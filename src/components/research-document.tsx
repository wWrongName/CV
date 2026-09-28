import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { Mark } from "./mark";
import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";
import russian from "@/lib/research.ru.json";
import english from "@/lib/research.en.json";
import { messages, type Locale } from "@/lib/i18n";
import type { Journey } from "@/lib/journeys";

export function ResearchDocument({ locale }: { locale: Locale }) {
  const study = (locale === "en" ? english : russian) as Journey;
  const ui = messages[locale];
  return <main className="document resume-page research-page">
    <header className="topbar">
      <Link href={`/${locale}/projects`} className="identity"><Mark /><span>{ui.name}<small>{ui.specialization}</small></span></Link>
      <MobileNavigation locale={locale} className="resume-top-actions">
        <div className="nav-preferences"><LanguageSwitch locale={locale} /><ThemeSwitch locale={locale} /></div>
        <Link href={`/${locale}/projects`}>← {ui.projects}</Link>
        <Link href={`/${locale}/experience`} className="resume-link">{ui.resume}</Link>
      </MobileNavigation>
    </header>
    <article className="resume-document research-document">
      <header className="research-intro">
        <div className="eyebrow">{locale === "ru" ? "ДИССЕРТАЦИОННОЕ ИССЛЕДОВАНИЕ" : "DISSERTATION RESEARCH"} / AI</div>
        <h1>{locale === "ru" ? "Безопасность языковых моделей" : "Language model security"}</h1>
        <p className="resume-summary">{study.summary}</p>
        <div className="research-stack">{["Python", "PyTorch", "Transformers", "PEFT", "LoRA"].map(item => <span className="resume-skill" key={item}>{item}</span>)}</div>
      </header>
      <nav className="resume-jump" aria-label={locale === "ru" ? "Разделы исследования" : "Research sections"}>{study.chapters.map((chapter, i) => <a href={`#research-${i}`} key={chapter.label}>{chapter.label} ↓</a>)}</nav>
      {study.chapters.map((chapter, i) => <section className="research-section" id={`research-${i}`} key={chapter.label}>
        <div className="research-section-heading"><span className="resume-section-index">{String(i + 1).padStart(2, "0")}</span><span>{chapter.label}</span></div>
        <div className="research-section-body">
          <h2>{chapter.title.replaceAll("\n", " ")}</h2>
          <p>{chapter.text}</p>
          {chapter.metrics && <dl className="research-metrics">{chapter.metrics.map(metric => <div key={metric.value}><dt>{metric.value}</dt><dd>{metric.label}<small>{metric.detail}</small></dd></div>)}</dl>}
          <p className="research-note">{chapter.note}</p>
          {chapter.details && <aside className="research-context"><h3>{chapter.details.title}</h3><p>{chapter.details.text}</p></aside>}
        </div>
      </section>)}
      <footer className="resume-bottom">
        <Link href={`/${locale}/projects`} className="resume-footer-action">← {ui.projects}</Link>
        <a href="https://t.me/wr0ngn4m3" className="resume-footer-action">{locale === "ru" ? "Обсудить исследование ↗" : "Discuss the research ↗"}</a>
      </footer>
    </article>
  </main>;
}
