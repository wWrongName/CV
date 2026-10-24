"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";
import { getObjectLabel, projectHref, sectionHref, type SectionId } from "@/lib/workshop/sections";
import { caseStories } from "@/lib/workshop/case-stories";
import { useWorkshopInteraction } from "./interaction-provider";
import { StudioCharacter, type StudioPose } from "./studio-character";
import { StudioRoom } from "./studio-room";
import { StudioBoard } from "./studio-board";

const menus: SectionId[] = ["services", "projects", "about", "contact"];
const extraMenus: SectionId[] = ["experience", "research", "blog", "process"];
const poseFor = (section: SectionId | null): StudioPose => !section || section === "about" || section === "contact" ? "idle" : ["research", "blog"].includes(section) ? "write" : ["projects", "experience"].includes(section) ? "review" : "board";

export function StudioScene({ locale, section }: { locale: Locale; section: SectionId | null }) {
  const pathname = usePathname();
  const { state, send } = useWorkshopInteraction();
  const [enabled, setEnabled] = useState(false);
  const [decoded, setDecoded] = useState<Partial<Record<StudioPose, boolean>>>({});
  const [mounted, setMounted] = useState<StudioPose[]>(["idle"]);
  const [displayed, setDisplayed] = useState<StudioPose>("idle");
  const target = section ?? state.target;
  const pose = poseFor(target);
  const slug = section === "projects" ? pathname.split("/")[3] || "paas" : undefined;
  const key = slug || target || "home";
  useEffect(() => {
    const media = matchMedia("(min-width: 900px)");
    const update = () => setEnabled(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    setMounted(previous => previous.includes(pose) ? previous : [...previous, pose]);
    if (decoded[pose]) setDisplayed(pose);
  }, [pose, decoded]);
  const ready = useCallback((id: StudioPose) => setDecoded(previous => previous[id] ? previous : { ...previous, [id]: true }), []);
  return <aside className="studio-scene" aria-label={locale === "ru" ? "Инженерная мастерская" : "Engineering workshop"}>
    <div className="studio-stage workshop-stage" data-section={target || "home"} data-pose={displayed}
      onPointerMove={event => { const bounds = event.currentTarget.getBoundingClientRect(); send({ type: "pointer", x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height }); }}
      onPointerLeave={() => send({ type: "pointer-leave" })}>
      <StudioRoom/>
      <StudioBoard locale={locale} diagramKey={key} drawing={displayed === "board"}/>
      {enabled && <div className="studio-actors">{mounted.map(id => <StudioCharacter key={id} pose={id} active={displayed === id} onReady={ready}/>)}</div>}
      <div className="studio-lamp-glow" aria-hidden="true"/>
    </div>
  </aside>;
}

function StudioMenuLink({ id, locale, section, children }: { id: SectionId; locale: Locale; section: SectionId | null; children?: ReactNode }) {
  const { send } = useWorkshopInteraction();
  const label = id === "services" ? locale === "ru" ? "Услуги" : "Services" : getObjectLabel(id, locale).title;
  return <Link href={sectionHref(id, locale)} scroll={false} prefetch={false} data-object={id} aria-current={section === id ? "page" : undefined}
    onMouseEnter={() => send({ type: "attend", target: id, source: "pointer" })}
    onMouseLeave={() => { if (!section) send({ type: "rest" }); }}
    onFocus={() => send({ type: "attend", target: id, source: "keyboard" })}
    onBlur={() => { if (!section) send({ type: "rest" }); }}
    onNavigate={() => send({ type: "activate", target: id })}>{children || label}</Link>;
}

export function StudioHeader({ locale, section, theme, toggleTheme }: { locale: Locale; section: SectionId | null; theme: string; toggleTheme: () => void }) {
  return <header className="studio-header"><Link href={`/${locale}`} scroll={false} className="studio-brand" aria-label="WWN IT Solutions"><b>WWN</b><span>IT Solutions</span></Link>
    <nav aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>{menus.map(id => <StudioMenuLink key={id} id={id} locale={locale} section={section}/>)}<details className="studio-more"><summary aria-label={locale === "ru" ? "Другие разделы" : "More sections"}>···</summary><div>{extraMenus.map(id => <StudioMenuLink key={id} id={id} locale={locale} section={section}/>)}</div></details></nav>
    <div className="studio-controls"><LanguageSwitch locale={locale}/><button type="button" className="studio-theme" onClick={toggleTheme} aria-label={locale === "ru" ? theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему" : theme === "dark" ? "Use light theme" : "Use dark theme"} title={locale === "ru" ? "Сменить тему" : "Switch theme"}>{theme === "dark" ? "☀" : "☾"}</button></div>
  </header>;
}

export function StudioHome({ locale }: { locale: Locale }) {
  const ru = locale === "ru";
  return <main className="studio-home"><div className="studio-home-intro"><h1>{ru ? <>Разработка<br/>сервисов, DevOps<br/>и автоматизация</> : <>Web services,<br/>DevOps &amp;<br/>automation</>}</h1>
    <p>{ru ? "Я Иван, инженер. Помогаю с веб-разработкой, инфраструктурой и запуском проектов." : "I'm Ivan, an engineer. I help with web development, infrastructure and launching projects."}</p>
    <div className="studio-actions"><StudioMenuLink id="contact" locale={locale} section={null}><span>{ru ? "Обсудить задачу" : "Discuss your project"}</span><b aria-hidden="true">→</b></StudioMenuLink><StudioMenuLink id="projects" locale={locale} section={null}>{ru ? "Посмотреть кейсы ↗" : "View case studies ↗"}</StudioMenuLink></div></div>
    <section className="studio-featured"><div className="studio-featured-heading"><span>{ru ? "ИЗ ПРАКТИКИ" : "SELECTED WORK"}</span><StudioMenuLink id="projects" locale={locale} section={null}>{ru ? "Все кейсы ↗" : "All cases ↗"}</StudioMenuLink></div>
      {(["paas", "operations", "delivery-platform"] as const).map((id, i) => <Link className="studio-case-link" key={id} href={projectHref(locale, id)} scroll={false}><h2>{caseStories[id].title[locale]}</h2><small>{["PaaS", "Infrastructure", "CI/CD"][i]} <span aria-hidden="true">↗</span></small></Link>)}
    </section>
    <footer className="studio-footer">{extraMenus.map(id => <StudioMenuLink key={id} id={id} locale={locale} section={null}/>)}</footer>
  </main>;
}
