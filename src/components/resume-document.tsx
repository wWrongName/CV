import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { Mark } from "@/components/mark";
import russian from "@/lib/resume.json";
import english from "@/lib/resume.en.json";
import { messages, type Locale } from "@/lib/i18n";
import { LanguageSwitch } from "./language-switch";
import { ThemeSwitch } from "./theme-switch";
export function ResumeDocument({ locale }: { locale: Locale }) {
  const resume = locale === "en" ? english : russian;
  const ui = messages[locale];
  const pdf = locale === "en" ? "/resume-ivan-velichko-en.pdf" : "/resume-ivan-velichko.pdf";
  return <main className="document resume-page">
    <header className="topbar">
      <Link href={`/${locale}/projects`} className="identity"><Mark /><span>{ui.name}<small>{ui.specialization}</small></span></Link>
      <MobileNavigation locale={locale} className="resume-top-actions">
        <div className="nav-preferences"><LanguageSwitch locale={locale} /><ThemeSwitch locale={locale} /></div>
        <Link href={`/${locale}/projects`} className="text-link">← {ui.projects}</Link>
        <a href={pdf} download className="resume-download">{ui.download} ↓</a>
      </MobileNavigation>
    </header>
    <article className="resume-document">
      <header className="resume-intro">
        <div className="resume-intro-main">
          <div className="eyebrow">{ui.resume.toUpperCase()} <span> / WWN</span></div>
          <h1>{resume.fullName}</h1>
          <p className="resume-headline">{resume.headline}</p>
          <p className="resume-summary">{resume.summary}</p>
        </div>
        <aside className="resume-intro-meta" aria-label={locale === "ru" ? "Контакты и формат работы" : "Contact and working arrangements"}>
          <p className="resume-city">{resume.location}</p>
          <p className="resume-format">{resume.format}</p>
          <div className="resume-contacts">{resume.contacts.map(c=><a key={c.href} href={c.href}><span>{c.label}</span><span aria-hidden="true">↗</span></a>)}</div>
        </aside>
      </header>
      <section className="resume-skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading"><span className="resume-section-index" aria-hidden="true">01</span>{ui.skills}</h2>
        <dl>{resume.skills.map(s=><div key={s.label}><dt>{s.label}</dt><dd>{s.text.split(", ").map(skill=><span className="resume-skill" key={skill}>{skill}</span>)}</dd></div>)}</dl>
      </section>
      <section aria-labelledby="experience-heading"><h2 className="resume-section-title" id="experience-heading"><span className="resume-section-index" aria-hidden="true">02</span>{ui.experience}</h2>
        <nav className="resume-jump" aria-label={ui.companies}>{resume.jobs.map(j=><a key={j.id} href={`#${j.id}`}>{j.company} ↓</a>)}</nav>
        {resume.jobs.map(j=><section className="resume-job" id={j.id} key={j.id}>
          <div className="resume-job-header"><span>{j.dates}</span><h3>{j.company}</h3><p className="resume-role">{j.role}</p></div>
          <div className="resume-job-content"><p className="resume-context">{j.context}</p>
          {j.sections.map(s=><div className="resume-job-section" key={s.title}><h4>{s.title}</h4><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </section>)}
      </section>
      <section className="resume-education" aria-labelledby="education-heading"><h2 id="education-heading"><span className="resume-section-index" aria-hidden="true">03</span>{ui.education}</h2>{resume.education.map(e=><div key={e.title}><h3>{e.title}</h3><p>{e.institution}</p><p className="resume-location">{e.dates}</p>{e.detail && <p>{e.detail}</p>}</div>)}</section>
      <section className="resume-languages" aria-labelledby="languages-heading">
        <h2 id="languages-heading"><span className="resume-section-index" aria-hidden="true">04</span>{locale === "ru" ? "Языки" : "Languages"}</h2>
        <ul className="resume-language-list">{resume.languages.split(", ").map(entry => {
          const [name, level] = entry.split(" — ");
          return <li key={name}><span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>{level && <span className="resume-language-level" aria-label={`${locale === "ru" ? "Уровень" : "Level"} ${level}`}>{level}</span>}</li>;
        })}</ul>
      </section>
      <footer className="resume-bottom">
        <a href={pdf} download className="resume-footer-action" aria-label={ui.downloadFull}><span>{ui.download}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 4v12m-5-5 5 5 5-5M5 19h14" /></svg></a>
        <a href="https://t.me/wr0ngn4m3" className="resume-footer-action"><span>{locale === "ru" ? "Написать в Telegram" : "Message on Telegram"}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></a>
      </footer>
    </article>
  </main>;
}
