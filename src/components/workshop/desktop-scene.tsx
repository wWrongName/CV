"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import type { Locale } from "@/lib/i18n";
import { desktopObjects, type SceneObject } from "@/lib/workshop/scene";
import { getObjectLabel, sectionHref, sectionIds, workshopCopy, type ObjectId } from "@/lib/workshop/sections";
import { WorkshopArt } from "./art";
import { useWorkshopInteraction } from "./interaction-provider";
import { WindowLife } from "./window-life";
import { WorkshopEnvironment } from "./environment";
import { visiblePosition } from "@/lib/workshop/presentation";
import { WorkshopReaction, reactionFrames } from "./reactions";
import { WorkshopFurniture } from "./furniture";
import { WorkshopSpeedTrail } from "./speed-trail";
import furniture from "@/lib/workshop/furniture.json";
import { getBoardCopy } from "@/lib/workshop/board-copy";

type Props = { locale: Locale; onEnter: (id: ObjectId) => void };

function WorkshopIcon({ id }: { id: ObjectId }) {
  const paths: Record<string, string> = {
    about: "M16 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM5 29v-4c0-4 5-7 11-7s11 3 11 7v4Z",
    services: "m16 2 7 4v8l-7 4-7-4V6ZM3 18l6-4 7 4v8l-7 4-6-4Zm13 0 7-4 7 4v8l-7 4-7-4ZM9 6l7 4 7-4M16 10v8M3 18l6 4 7-4M9 22v8m7-12 7 4 7-4m-7 4v8",
    projects: "M3 10h10l3-4h10v6M3 10v18h26V12H3",
    research: "M12 3h8m-6 0v10L4 27q-1 3 3 3h18q4 0 3-3L18 13V3M9 21h14m-9-4 3 3m2 4 2 2",
    blog: "M7 2h14l6 6v22H7ZM20 2v7h7M12 14h10m-10 5h10m-10 5h7",
    experience: "M8 3h17v24H8ZM4 8v22h17M12 9h9m-9 5h9m-9 5h6",
    process: "M12 2h8v8h-8ZM2 22h8v8H2Zm10 0h8v8h-8Zm10 0h8v8h-8ZM16 10v7M6 22v-5h20v5m-10-5v5",
  };
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true"><path d={paths[id] || paths.blog} /></svg>;
}

function WorkshopObject({ object, locale, onEnter, active }: Props & { object: SceneObject; active: ObjectId | null }) {
  const { state, send } = useWorkshopInteraction();
  const label = getObjectLabel(object.id, locale);
  const contact = object.id === "contact";
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [hitArea, setHitArea] = useState<CSSProperties>();
  useLayoutEffect(() => {
    const link = linkRef.current;
    const art = link?.querySelector<HTMLElement>(".workshop-art");
    const badge = link?.querySelector<HTMLElement>(".workshop-object-name");
    if (!link || !art || !badge) return;
    const measure = () => {
      const origin = link.getBoundingClientRect();
      const a = art.getBoundingClientRect();
      const b = badge.getBoundingClientRect();
      const next = {
        left: Math.min(a.left, b.left) - origin.left,
        top: Math.min(a.top, b.top) - origin.top,
        width: Math.max(a.right, b.right) - Math.min(a.left, b.left),
        height: Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top),
      };
      setHitArea(previous => previous && Object.entries(next).every(([key, value]) => previous[key as keyof CSSProperties] === value) ? previous : next);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(link);
    observer.observe(badge);
    measure();
    return () => observer.disconnect();
  }, [object.id, locale]);
  const sceneDetails: Record<string, [string, string]> = {
    about: ["Опыт, подход, стек", "Experience, approach, stack"],
    services: ["Инженерные услуги", "Engineering services"],
    projects: ["Реализованные проекты", "Selected projects"],
    research: ["Тех. работы и R&D", "Technical work and R&D"],
    blog: ["Статьи и заметки", "Articles and notes"],
    experience: ["CV / PDF", "CV / PDF"],
    process: ["Как я работаю", "How I work"],
  };
  const sceneDetail = sceneDetails[object.id]?.[locale === "ru" ? 0 : 1] || label.detail;
  const position = { "--object-x": `${object.x}%`, "--object-y": `${object.y}%`, "--object-width": `${object.width}%`,
    "--label-left": `${object.label ? (object.label.x - object.x + object.width / 2) / object.width * 100 : 50}%`,
    "--label-bottom": `${object.label ? (object.y - object.label.bottom) * 2 / 3 : 0}cqw`,
  } as CSSProperties;
  return <Link ref={linkRef} className={`workshop-object ${contact ? "workshop-character" : ""}`} href={sectionHref(object.id, locale)}
    scroll={false} prefetch={false} style={position} data-object={object.id} data-reaction={object.reaction}
    data-away={contact && Boolean(active) || undefined}
    data-attended={active === object.id || undefined}
    data-prop-replaced={active === object.id && reactionFrames[active]?.replaceObject || undefined}
    data-character-mode={contact ? state.mode : undefined} data-character-target={contact ? state.target : undefined}
    aria-label={`${label.title}. ${label.detail}`}
    onPointerEnter={event => { if (event.pointerType !== "touch") send(contact ? { type: "rest" } : { type: "attend", target: object.id, source: "pointer" }); }}
    onPointerLeave={() => { if (!contact) send({ type: "leave", target: object.id }); }}
    onFocus={() => { send(contact ? { type: "rest" } : { type: "attend", target: object.id, source: "keyboard" }); }}
    onBlur={() => { if (!contact) send({ type: "leave", target: object.id }); }}
    onClick={event => { if (event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { send({ type: "activate", target: object.id }); onEnter(object.id); } }}>
    {hitArea && <span className="workshop-object-hit-area" style={hitArea} aria-hidden="true" />}
    <WorkshopArt art={object.art} eager motionActive={!active && state.mode !== "reading" && state.mode !== "opening"} />
    {!contact && <span className="workshop-object-name"><WorkshopIcon id={object.id} /><span><strong>{label.title}</strong><small>{sceneDetail}</small></span></span>}
  </Link>;
}

export function DesktopWorkshop({ locale, onEnter }: Props) {
  const ui = workshopCopy[locale];
  const { state, send } = useWorkshopInteraction();
  const [enabled, setEnabled] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [preparedPositions, setPreparedPositions] = useState<ObjectId[]>([]);
  const [displayed, setDisplayed] = useState<ObjectId | null>(null);
  const [decoded, setDecoded] = useState<Partial<Record<ObjectId, boolean>>>({});
  const markReady = useCallback((id: ObjectId) => setDecoded(value => value[id] ? value : { ...value, [id]: true }), []);
  const markFailed = useCallback((id: ObjectId) => setDecoded(value => ({ ...value, [id]: false })), []);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const target = enabled && (state.mode === "attending" || state.mode === "opening") && state.target ? state.target : null;
  const active = visiblePosition(target, displayed, decoded);
  useLayoutEffect(() => {
    if (!target) setDisplayed(null);
    else if (decoded[target]) setDisplayed(target);
  }, [target, decoded]);
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    const afterLoad = async () => {
      // Visible room artwork and the initial character own the first network pass.
      const images = Array.from(stage.current?.querySelectorAll<HTMLImageElement>("img") || []);
      await Promise.allSettled(images.map(image => image.decode()));
      if (!cancelled) setSceneLoaded(true);
    };
    if (document.readyState === "complete") void afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
    return () => { cancelled = true; window.removeEventListener("load", afterLoad); };
  }, [enabled]);
  useEffect(() => {
    if (!enabled || !sceneLoaded) return;
    // Only one background sprite is requested at a time. A hovered sprite bypasses
    // this queue and keeps high fetch priority; decoded positions remain mounted.
    if (preparedPositions.some(id => !Object.prototype.hasOwnProperty.call(decoded, id))) return;
    const next = sectionIds.find(id => !preparedPositions.includes(id) && !Object.prototype.hasOwnProperty.call(decoded, id) && id !== target);
    if (!next) return;
    const prepare = () => setPreparedPositions(previous => previous.includes(next) ? previous : [...previous, next]);
    if ("requestIdleCallback" in window) {
      const task = window.requestIdleCallback(prepare, { timeout: 2000 });
      return () => window.cancelIdleCallback(task);
    }
    const task = setTimeout(prepare, 200);
    return () => clearTimeout(task);
  }, [enabled, sceneLoaded, preparedPositions, decoded, target]);
  const mountedPositions = Array.from(new Set([
    ...preparedPositions,
    ...Object.keys(decoded) as ObjectId[],
    ...(active ? [active] : []),
    ...(target ? [target] : []),
  ]));
  const boardTarget = state.mode === "attending" || state.mode === "opening" ? state.target : null;
  const boardCopy = boardTarget ? getBoardCopy(boardTarget, locale) : { title: ui.greeting, description: ui.boardIntro };
  const openAbout = () => { send({ type: "activate", target: "about" }); onEnter("about"); };
  const openContacts = () => { send({ type: "activate", target: "contact" }); onEnter("contact"); };
  return <main className="desktop-workshop" aria-label={ui.title}>
    <div ref={stage} className="workshop-stage"
      onPointerMove={event => {
        if (event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        send({ type: "pointer", x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)), y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)) });
      }} onPointerLeave={() => send({ type: "pointer-leave" })}>
      <WorkshopEnvironment />
      <WindowLife />
      <svg className="workshop-effect-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <defs><filter id="workshop-chalk-stroke" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="7" result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale=".5" xChannelSelector="R" yChannelSelector="G" />
        </filter></defs>
      </svg>
      <aside className="workshop-board-copy" role="status" aria-atomic="true" data-section={boardTarget || "default"}>
        <h2>{boardCopy.title}</h2><p>{boardCopy.description}</p>
        {!boardTarget && <p className="workshop-board-links">
          <Link href={sectionHref("about", locale)} scroll={false} onNavigate={openAbout} onFocus={() => send({ type: "rest" })}>{getObjectLabel("about", locale).title} ↗</Link>
          <Link href={sectionHref("contact", locale)} scroll={false} onNavigate={openContacts} onFocus={() => send({ type: "rest" })}>{ui.invitation} ↗</Link>
        </p>}
      </aside>
      <WorkshopSpeedTrail position={active} pending={target !== active} enabled={enabled && state.mode !== "reading"} />
      <WorkshopFurniture active={active} />
      <h1 className="workshop-scene-title">{ui.title}</h1>
      <div className="workshop-objects">{desktopObjects.map(object => <WorkshopObject key={object.id} object={object} locale={locale} onEnter={onEnter} active={active} />)}</div>
      <div className="workshop-contact-zone"
        onPointerEnter={event => { if (event.pointerType !== "touch") send({type:"attend",target:"contact",source:"pointer"}); }}
        onPointerLeave={() => send({type:"leave",target:"contact"})}
        onFocusCapture={() => send({type:"attend",target:"contact",source:"keyboard"})}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) send({type:"leave",target:"contact"}); }}>
      <Link className="workshop-contact-zone-hit" href={sectionHref("contact", locale)} scroll={false} onNavigate={openContacts} tabIndex={-1} aria-label={locale === "ru" ? "Открыть контакты" : "Open contacts"} />
      {furniture.filter(layer => layer.id === "telegram-cube" || layer.id === "email-cube").map(layer => {
        const email = layer.id === "email-cube";
        const label = `${locale === "ru" ? "Открыть контакты" : "Open contacts"}: ${email ? "Email" : "Telegram"}`;
        return <Link key={layer.id} className="workshop-contact-cube" data-channel={email ? "email" : "telegram"}
          href={sectionHref("contact", locale)} scroll={false} onNavigate={openContacts}
          aria-label={label} title={label} style={{left:`${layer.x}%`,top:`${layer.y}%`,width:`${layer.width}%`,height:`${layer.height * ("heightScale" in layer ? Number(layer.heightScale) : 1)}%`}} />;
      })}
      <Link className="workshop-contact-plaque" data-object="contact" href={sectionHref("contact", locale)} scroll={false} onNavigate={openContacts}>
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="6" width="28" height="21" rx="2"/><path d="m3 8 13 11L29 8"/></svg>
        <span>{locale === "ru" ? "Контакты" : "Contact"}<small>Telegram / Email</small></span>
      </Link>
      </div>
      {mountedPositions.map(position => <WorkshopReaction key={position} target={position} visible={position === active} priority={position === target} onReady={markReady} onError={markFailed} />)}
    </div>
    <div className="workshop-preferences"><LanguageSwitch locale={locale} /></div>
    <Link className="workshop-classic-link" href={`/classic/${locale}`} prefetch={false}>
      {locale === "ru" ? "Классическая версия" : "Classic version"}<span aria-hidden="true">↗</span>
    </Link>
  </main>;
}
