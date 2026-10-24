"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";
import { getObjectLabel, projectHref, sectionHref, type SectionId } from "@/lib/workshop/sections";
import { caseStories } from "@/lib/workshop/case-stories";
import { useWorkshopInteraction } from "./interaction-provider";

const menus: SectionId[] = ["about", "process", "services", "projects", "experience", "research", "blog", "contact"];

export { PanoramaScene as StudioScene } from "./panorama-scene";

function StudioMenuLink({ id, locale, section, children }: { id: SectionId; locale: Locale; section: SectionId | null; children?: ReactNode }) {
  const { send } = useWorkshopInteraction();
  const label = id === "services" ? locale === "ru" ? "Решения" : "Solutions" : getObjectLabel(id, locale).title;
  return <Link href={sectionHref(id, locale)} scroll={false} prefetch={false} data-object={id} aria-current={section === id ? "page" : undefined}
    onMouseEnter={() => send({ type: "attend", target: id, source: "pointer" })}
    onMouseLeave={() => { if (!section) send({ type: "rest" }); }}
    onFocus={() => send({ type: "attend", target: id, source: "keyboard" })}
    onBlur={() => { if (!section) send({ type: "rest" }); }}
    onNavigate={() => send({ type: "activate", target: id })}>{children || label}</Link>;
}

export function StudioHeader({ locale, section }: { locale: Locale; section: SectionId | null }) {
  return <header className="studio-header"><Link href={`/${locale}`} scroll={false} className="studio-brand" aria-label="WWN IT Solutions"><b>WWN</b><span>IT Solutions</span></Link>
    <nav aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>{menus.map(id => <StudioMenuLink key={id} id={id} locale={locale} section={section}/>)}</nav>
    <div className="studio-controls"><LanguageSwitch locale={locale}/></div>
  </header>;
}

export function StudioHome({ locale }: { locale: Locale }) {
  const ru = locale === "ru";
  return <main className="studio-home"><div className="studio-home-intro"><h1>{ru ? <>Разработка<br/>сервисов, DevOps<br/>и автоматизация</> : <>Web services,<br/>DevOps &amp;<br/>automation</>}</h1>
    <p>{ru ? "Помогаю с веб-разработкой, инфраструктурой и запуском проектов." : "I help with web development, infrastructure and launching projects."}</p>
    <div className="studio-actions"><StudioMenuLink id="contact" locale={locale} section={null}><span>{ru ? "Обсудить задачу" : "Discuss your project"}</span><b aria-hidden="true">→</b></StudioMenuLink><StudioMenuLink id="projects" locale={locale} section={null}>{ru ? "Посмотреть кейсы ↗" : "View case studies ↗"}</StudioMenuLink></div></div>
    <section className="studio-featured"><div className="studio-featured-heading"><span>{ru ? "ИЗ ПРАКТИКИ" : "SELECTED WORK"}</span><StudioMenuLink id="projects" locale={locale} section={null}>{ru ? "Все кейсы ↗" : "All cases ↗"}</StudioMenuLink></div>
      {(["paas", "operations", "delivery-platform"] as const).map((id, i) => <Link className="studio-case-link" key={id} href={projectHref(locale, id)} scroll={false}><h2>{caseStories[id].title[locale]}</h2><small>{["PaaS", "Infrastructure", "CI/CD"][i]} <span aria-hidden="true">↗</span></small></Link>)}
    </section>

  </main>;
}
