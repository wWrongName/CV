"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Component, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { getJourneys, getProjectMap } from "@/lib/localized-journeys";
import { messages, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";
import { advanceJourney, type JourneyPosition } from "@/lib/navigation";
import { Mark } from "./mark";
import { MobileNavigation } from "./mobile-navigation";
import { trackEvent } from "@/lib/analytics-client";

const Scene = dynamic(() => import("./world"), {
  ssr: false,
  loading: () => <div className="world-loading" aria-hidden="true"><span /></div>,
});
class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

export function Universe({ locale }: { locale: Locale }) {
  const ui = messages[locale];
  const journeys = useMemo(() => getJourneys(locale), [locale]);
  const projectMap = useMemo(() => getProjectMap(locale), [locale]);
  const chapterCounts = useMemo(() => journeys.map(j => j.chapters.length), [journeys]);
  const [position, setPosition] = useState<JourneyPosition>({ project: 0, step: -1 });
  const [reduced, setReduced] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [unsupported, setUnsupported] = useState(false);
  const narrationRef = useRef<HTMLDivElement>(null);
  const { project, step } = position;
  const journey = journeys[project];
  const chapter = journey.chapters[step];
  const inside = step >= 0;
  useEffect(() => { if (inside) trackEvent("project_open", journey.id); }, [inside, journey.id]);
  const move = useCallback((direction: 1 | -1, count = 1) => {
    setPosition(current => {
      let next = current;
      for (let index = 0; index < count; index++) {
        next = advanceJourney(next, direction, chapterCounts);
        // Never batch past a project preview in a single wheel event.
        if (next.step === -1) break;
      }
      return next;
    });
  }, [chapterCounts]);
  const toMap = useCallback(() => setPosition(current => ({ ...current, step: -1 })), []);
  const openProject = useCallback((project: number) => setPosition({ project, step: 0 }), []);
  const onUnavailable = useCallback(() => setUnsupported(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target as HTMLElement;
      if (target.closest("input,textarea,select,[contenteditable=true]")) return;
      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        if (!event.repeat) move(event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1);
      }
      if (event.key === "Escape") { setMenuOpen(false); toMap(); }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [move, toMap]);

  useEffect(() => {
    let accumulated = 0;
    let lastEvent = 0;
    let pendingTick: ReturnType<typeof setTimeout> | undefined;
    const wheel = (event: WheelEvent) => {
      if (menuOpen) return;
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.deltaY === 0) return;
      const target = event.target as HTMLElement;
      if (target.closest("input,textarea,select,[contenteditable=true]")) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const panel = narrationRef.current;
      // Reading long text takes priority; a new scroll at its edge advances the story.
      if (panel?.contains(target) && panel.scrollHeight > panel.clientHeight + 2) {
        const canRead = direction > 0
          ? panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2
          : panel.scrollTop > 2;
        if (canRead) { clearTimeout(pendingTick); accumulated = 0; return; }
      }
      event.preventDefault();
      clearTimeout(pendingTick);
      const now = performance.now();
      if (now - lastEvent > 180 || Math.sign(accumulated) !== direction) accumulated = 0;
      lastEvent = now;
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      accumulated += event.deltaY * unit;
      // Consume wheel distance without a cooldown: fast gestures can cross stages.
      const steps = Math.min(3, Math.floor(Math.abs(accumulated) / 60));
      if (steps > 0) {
        accumulated -= direction * steps * 60;
        move(direction, steps);
        // A completed movement must not produce a delayed extra step.
        accumulated = 0;
      } else {
        // A small isolated wheel tick still advances once; dense trackpad
        // events accumulate above and continue to support fast navigation.
        pendingTick = setTimeout(() => {
          if (accumulated !== 0) move(accumulated > 0 ? 1 : -1);
          accumulated = 0;
        }, 80);
      }
    };
    window.addEventListener("wheel", wheel, { passive: false });
    return () => { window.removeEventListener("wheel", wheel); clearTimeout(pendingTick); };
  }, [move, menuOpen]);

  const fallback = <div className="space-fallback"><span>{ui.no3d}</span><Link href={`/${locale}/experience`}>{ui.readResume} →</Link></div>;
  return <main className={`immersive ${inside ? "in-story" : "at-gateway"}`}>
    <div className="world-surface"><SceneBoundary fallback={fallback}>
      <Scene transitionKey={`${journey.id}-${step}`} key={inside ? journey.id : "project-map"} journey={inside ? journey : projectMap} overview={!inside}
        onSelect={id => { const index = journeys.findIndex(j => j.id === id); if (index >= 0) openProject(index); }}
        openProjectLabel={ui.openProject} step={step} reduced={reduced || quiet} onUnavailable={onUnavailable} />
    </SceneBoundary></div>
    <div className="space-haze" /><div className="space-grain" />
    <header className="hud-header">
      <button className="identity" onClick={toMap} aria-label={ui.backToMap}><Mark /><span>{ui.name}<small>{ui.specialization}</small></span></button>
      <div className="hud-project" aria-live="polite"><span>{ui.project} {journey.index} / {String(journeys.length).padStart(2,"0")}</span><strong>{journey.name}</strong>{inside && <small>{ui.chapter} {step + 1} / {journey.chapters.length}</small>}</div>
      <MobileNavigation locale={locale} open={menuOpen} onOpenChange={setMenuOpen}>
        <div className="nav-preferences"><LanguageSwitch locale={locale} /><ThemeSwitch locale={locale} /></div>
        <Link className="resume-nav-link" href={`/${locale}/experience`}>{ui.resume}</Link>
        <a href="https://t.me/wr0ngn4m3" target="_blank" rel="noreferrer">{ui.discuss} <span>↗</span></a>
      </MobileNavigation>
    </header>
    <div className="edge-coordinate left-coordinate" aria-hidden="true">IV / SYSTEM ARCHIVE</div>
    <div className="edge-coordinate right-coordinate" aria-hidden="true">{journey.name.toUpperCase()} / {inside ? `CHAPTER 0${step + 1}` : "ORIGIN"}</div>
    <div className="experience-content" key={`${journey.id}-${step}`} ref={narrationRef}>
      {!inside ? <section className="gateway-copy" aria-label={journey.name}>
        <div className="overline"><span className="accent-slash">/</span> {ui.case} {journey.index}<span className="label-divider" />{journey.category}</div>
        <p className="project-name">{journey.name}</p><h1>{journey.title}</h1><p className="gateway-summary">{journey.summary}</p>
        <button className="enter-story" onClick={() => move(1)}><span className="enter-symbol" aria-hidden="true">↗</span><span>{ui.openCase}<small>{ui.caseSubtitle}</small></span></button>
      </section> : <section className="narration" aria-label={`${ui.chapter} ${step + 1}: ${chapter.label}`}>
        <button className="exit-story" onClick={toMap}>← {ui.backToProjects}</button>
        <div className="overline"><span className="chapter-number">0{step + 1}</span>{chapter.label}<span className="label-divider" />{journey.name}</div>
        <h1>{chapter.title}</h1><p className="narration-body">{chapter.text}</p>
        {chapter.metrics && <div className="research-metrics">{chapter.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.detail}</small></div>)}</div>}
        <div className="story-note"><span aria-hidden="true">⌁</span>{chapter.note}</div>
        {chapter.details && <details className="research-details"><summary>{chapter.details.title}</summary><p>{chapter.details.text}</p></details>}
        {step === journey.chapters.length - 1 && <div className="story-end-links"><Link href={`/${locale}/experience`}>{ui.fullResume} ↗</Link><a href="https://t.me/wr0ngn4m3" target="_blank" rel="noreferrer">{ui.discuss} ↗</a></div>}
      </section>}
    </div>
    <div className="scene-caption" aria-hidden="true"><span className="caption-cross">+</span><div>{inside ? ui.diagram : ui.map}<small>{inside ? ui.components : ui.chooseProject.toUpperCase()}</small></div></div>
    {unsupported && <div className="unsupported-note">{ui.simplified} · <Link href={`/${locale}/experience`}>{ui.readResume}</Link></div>}
    <footer className="hud-footer">
      {!inside ? <div className="archive-picker"><span className="footer-label">{ui.chooseProject.toUpperCase()}</span><div role="group" aria-label={ui.chooseProject}>{journeys.map((j, i) => <button key={j.id} onClick={() => setPosition({ project: i, step: -1 })} aria-pressed={i === project} aria-label={`${j.index}: ${j.name}`} title={j.name}><span>{j.index}</span><span className="project-option-name">{j.name}</span><i /></button>)}</div></div>
        : <div className="chapter-nav"><div className="chapter-track" role="group" aria-label={ui.sections}>{journey.chapters.map((c, i) => <button key={c.label} onClick={() => setPosition({ project, step: i })} aria-label={`${ui.chapter} ${i + 1}: ${c.label}`} aria-current={i === step ? "step" : undefined} className={i < step ? "complete" : ""}><span>0{i + 1}</span><span className="chapter-title">{c.label}</span><i /></button>)}</div>
          <div className="transport"><button onClick={() => move(-1)} aria-label={ui.back} disabled={project === 0 && step === -1} title={`${ui.previousStage} · ←`}>←</button><button className="next-chapter" onClick={() => move(1)} aria-label={ui.next} disabled={project === journeys.length - 1 && step === journey.chapters.length - 1} title={`${ui.nextStage} · →`}>{ui.next} <span>→</span></button></div>
        </div>}
      <div className="footer-utility"><button aria-pressed={quiet || reduced} onClick={() => setQuiet(v => !v)}>{quiet || reduced ? ui.motionOff : ui.reduceMotion}</button><span className="navigation-hint">{ui.scrollHint}</span><Link href={`/${locale}/experience`}>{ui.fullResume} ↗</Link></div>
    </footer>
  </main>;
}
