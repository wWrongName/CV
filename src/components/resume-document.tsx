import Link from "next/link";
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
      <Link href={`/${locale}`} className="identity"><Mark /><span>{ui.name}<small>{ui.specialization}</small></span></Link>
      <div className="resume-top-actions"><LanguageSwitch locale={locale} /><ThemeSwitch locale={locale} /><Link href={`/${locale}`} className="text-link">← {ui.projects}</Link><a href={pdf} download className="resume-download">{ui.download} ↓</a></div>
    </header>
    <article className="resume-document">
      <div className="eyebrow">{ui.resume.toUpperCase()}</div>
      <h1>{resume.fullName}</h1>
      <p className="resume-headline">{resume.headline}</p>
      <p className="resume-location">{resume.location} · {resume.format}</p>
      <div className="resume-contacts">{resume.contacts.map(c=><a key={c.href} href={c.href}>{c.label}</a>)}</div>
      <p className="resume-summary">{resume.summary}</p>
      <section className="resume-skills" aria-labelledby="skills-heading"><h2 id="skills-heading">{ui.skills}</h2><dl>{resume.skills.map(s=><div key={s.label}><dt>{s.label}</dt><dd>{s.text}</dd></div>)}</dl></section>
      <section aria-labelledby="experience-heading"><h2 className="resume-section-title" id="experience-heading">{ui.experience}</h2>
        <nav className="resume-jump" aria-label={ui.companies}>{resume.jobs.map(j=><a key={j.id} href={`#${j.id}`}>{j.company} ↓</a>)}</nav>
        {resume.jobs.map(j=><section className="resume-job" id={j.id} key={j.id}>
          <div className="resume-job-header"><h3>{j.company}</h3><span>{j.dates}</span></div>
          <p className="resume-role">{j.role}</p><p className="resume-context">{j.context}</p>
          {j.sections.map(s=><div className="resume-job-section" key={s.title}><h4>{s.title}</h4><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}
        </section>)}
      </section>
      <section className="resume-education" aria-labelledby="education-heading"><h2 id="education-heading">{ui.education}</h2>{resume.education.map(e=><div key={e.title}><h3>{e.title}</h3><p>{e.institution}</p><p className="resume-location">{e.dates}</p>{e.detail && <p>{e.detail}</p>}</div>)}</section>
      <p className="resume-languages">{resume.languages}</p>
      <footer className="resume-bottom"><a href={pdf} download className="resume-download">{ui.downloadFull} ↓</a><a href="https://t.me/wr0ngn4m3" className="text-link">{ui.telegram} ↗</a></footer>
    </article>
  </main>;
}
