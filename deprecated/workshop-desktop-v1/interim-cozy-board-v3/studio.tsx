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

const menus: SectionId[] = ["services", "projects", "about", "contact"];
const extraMenus: SectionId[] = ["experience", "research", "blog", "process"];
const steps: Record<string, [string[], string[]]> = {
  home: [["Код", "Проверки", "Запуск"], ["Code", "Checks", "Launch"]],
  services: [["Задача", "Решение", "Сервис"], ["Challenge", "Solution", "Service"]],
  projects: [["Задача", "Решение", "Результат"], ["Challenge", "Solution", "Outcome"]],
  paas: [["Репозиторий", "Подготовка", "Приложение"], ["Repository", "Prepare", "Application"]],
  llmops: [["Запрос", "AI-сервис", "Проверка"], ["Request", "AI service", "Evaluation"]],
  operations: [["Конфигурация", "GitLab", "Инфраструктура"], ["Configuration", "GitLab", "Infrastructure"]],
  "delivery-platform": [["Код", "Сборка", "Деплой"], ["Code", "Build", "Deploy"]],
  resilience: [["Алерт", "Сценарий", "Действие"], ["Alert", "Runbook", "Action"]],
  about: [["Опыт", "Подход", "Практика"], ["Experience", "Approach", "Practice"]],
  experience: [["Опыт", "Навыки", "Развитие"], ["Experience", "Skills", "Growth"]],
  research: [["Гипотеза", "Эксперимент", "Выводы"], ["Hypothesis", "Experiment", "Findings"]],
  blog: [["Наблюдение", "Заметка", "Обсуждение"], ["Observe", "Write", "Discuss"]],
  process: [["Обсуждаем", "Делаем", "Проверяем"], ["Discuss", "Build", "Validate"]],
  contact: [["Твоя задача", "Разговор", "План"], ["Your challenge", "Conversation", "Plan"]],
};

const boardTitles: Record<string, [string, string]> = {
  home: ["Инженерная мастерская", "Engineering workshop"],
  services: ["Что собираем", "What we build"], projects: ["Из практики", "From practice"],
  paas: ["Проекты в облаке", "Projects in the cloud"], llmops: ["AI в приложении", "AI in an app"],
  operations: ["Инфраструктура как код", "Infrastructure as code"], "delivery-platform": ["Доставка изменений", "Shipping changes"],
  resilience: ["Когда что-то пошло не так", "When things go wrong"], about: ["Привет, я Иван", "Hi, I'm Ivan"],
  experience: ["Опыт и инструменты", "Experience & tools"], research: ["Проверяем идеи", "Testing ideas"],
  blog: ["Заметки из мастерской", "Workshop notes"], process: ["Как работаем вместе", "How we work together"],
  contact: ["С чего начнём?", "Where shall we start?"],
};
const poseFor = (section: SectionId | null): StudioPose => !section || section === "about" || section === "contact" ? "idle" : ["research", "blog"].includes(section) ? "write" : ["projects", "experience"].includes(section) ? "review" : "board";

function BoardDiagram({ labels, kind }: { labels: string[]; kind: string }) {
  const research = kind === "research" || kind === "llmops";
  const human = ["contact", "about", "experience", "process", "blog"].includes(kind);
  return <div className="studio-board-flow" aria-hidden="true">{labels.map((label, i) => <div key={label}>
    <svg viewBox="0 0 48 38" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {research ? i === 0 ? <><path d="M19 3h10m-8 0v12L9 32q-1 3 3 3h24q4 0 2-4L27 15V3M15 25h18"/><circle cx="24" cy="25" r="1"/></> : i === 1 ? <><rect x="9" y="7" width="30" height="25" rx="3"/><path d="M17 7V2m14 5V2M9 15H4m5 10H4m35-10h5m-5 10h5M18 18h12m-12 7h7"/></> : <><path d="m9 21 10 10L40 8"/><path d="M9 5h11M5 12v21h33"/></> : human ? i === 0 ? <><rect x="6" y="4" width="36" height="25" rx="4"/><path d="m14 29-4 7 15-7M13 12h22m-22 8h14"/></> : i === 1 ? <><path d="M10 3h23l6 7v25H10ZM32 3v9h7M17 18h15m-15 7h15"/></> : <><path d="m8 21 11 11L40 8"/></> : i === 0 ? <><rect x="5" y="4" width="38" height="27" rx="2"/><path d="m20 12-6 5 6 5m8-10 6 5-6 5M2 35h44"/></> : i === 1 ? <><path d="m24 2 7 7 10 1-1 10 4 8-10 3-10 6-9-6-11-3 4-8-1-10 10-1Z"/><circle cx="24" cy="20" r="7"/></> : <><rect x="7" y="3" width="34" height="14" rx="2"/><rect x="7" y="21" width="34" height="14" rx="2"/><path d="M13 10h1m5 0h1M13 28h1m5 0h1m9-18h6m-6 18h6"/></>}
    </svg><span>{label}</span>{i < labels.length - 1 && <b>→</b>}</div>)}</div>;
}

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
  const title = (boardTitles[key] || boardTitles.projects)[locale === "ru" ? 0 : 1];
  const labels = (steps[key] || steps.projects)[locale === "ru" ? 0 : 1];
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
      <div className="studio-board" role="status" aria-live="polite" aria-atomic="true"><div key={`${locale}-${key}`} className="studio-board-content"><p>{title}</p><svg className="studio-board-mountains" viewBox="0 0 110 70" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true"><path d="m3 64 31-36 13 14L70 5l36 59M22 41l12-13 6 16 7-2M58 25 70 5l9 27-9-8-6 9M9 60h92M8 19h20m-15-4h8M84 14h20M87 10h8"/></svg><BoardDiagram labels={labels} kind={key}/><span className="studio-board-note">{locale === "ru" ? "веб · инфраструктура · автоматизация" : "web · infrastructure · automation"}</span></div></div>
      {displayed === "board" && <svg key={key} className="studio-chalk-mark" viewBox="0 0 80 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M4 18Q25 4 53 12H76"/></svg>}
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
