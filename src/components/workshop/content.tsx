import { ProjectArchive } from "./project-archive";
import { Publications } from "./publications";
import { ContactContent } from "./contact-content";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getJourneys } from "@/lib/localized-journeys";
import russianResume from "@/lib/resume.json";
import englishResume from "@/lib/resume.en.json";
import russianResearch from "@/lib/research.ru.json";
import englishResearch from "@/lib/research.en.json";
import type { Journey } from "@/lib/journeys";
import serviceCatalog from "@/lib/workshop/services.json";
import { sectionHref, telegramHref, type SectionId } from "@/lib/workshop/sections";

function Contact({ locale }: { locale: Locale }) {
  return <footer className="workshop-document-contact"><p>{locale === "ru" ? "Есть похожая задача?" : "Working on a similar challenge?"}</p><a href={telegramHref} target="_blank" rel="noreferrer">{locale === "ru" ? "Давай обсудим в Telegram" : "Let's talk on Telegram"} <span aria-hidden="true">↗</span></a></footer>;
}

function Resume({ locale }: { locale: Locale }) {
  const resume = locale === "ru" ? russianResume : englishResume;
  return <article className="workshop-document"><span className="workshop-kicker">CURRICULUM VITAE / WWN</span><h1>{resume.fullName}</h1><p className="workshop-document-lead">{resume.headline}</p><p>{resume.summary}</p>
    <div className="workshop-document-meta"><span>{resume.location}</span><span>{resume.format}</span></div>
    <div className="workshop-document-links">{resume.contacts.map(contact => <a key={contact.href} href={contact.href}>{contact.label} ↗</a>)}</div>
    <section><h2>{locale === "ru" ? "Навыки" : "Skills"}</h2><dl className="workshop-skills">{resume.skills.map(skill => <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.text}</dd></div>)}</dl></section>
    <section><h2>{locale === "ru" ? "Опыт работы" : "Experience"}</h2>{resume.jobs.map(job => <section className="workshop-job" key={job.id} id={job.id}><div className="workshop-kicker">{job.dates}</div><h3>{job.company}</h3><strong>{job.role}</strong><p>{job.context}</p>{job.sections.map(part => <div key={part.title}><h4>{part.title}</h4><ul>{part.items.map((item, index) => <li key={index}><p>{item.work}</p><p className="workshop-result">{item.impact}</p></li>)}</ul></div>)}</section>)}</section>
    <section><h2>{locale === "ru" ? "Образование" : "Education"}</h2>{resume.education.map((item, index) => <div className="workshop-education" key={index}><h3>{item.institution}</h3><p>{item.title}</p><span>{item.dates}</span><p>{item.detail}</p></div>)}</section>
    <section><h2>{locale === "ru" ? "Языки" : "Languages"}</h2><p>{resume.languages}</p></section>
    <Contact locale={locale} />
  </article>;
}

function Projects({ locale }: { locale: Locale }) {
  return <ProjectArchive projects={getJourneys(locale)} locale={locale} />;
}

function Research({ locale }: { locale: Locale }) {
  const study = (locale === "ru" ? russianResearch : englishResearch) as Journey;
  return <article className="workshop-document"><span className="workshop-kicker">RESEARCH / WWN</span><h1>{study.title.replace(/\n/g, " ")}</h1><p className="workshop-document-lead">{study.summary}</p>{study.chapters.map((chapter, index) => <section key={chapter.label} id={`research-${index}`}><span className="workshop-kicker">{String(index + 1).padStart(2, "0")} / {chapter.label}</span><h2>{chapter.title}</h2><p>{chapter.text}</p><p className="workshop-result">{chapter.note}</p>{chapter.metrics && <dl className="workshop-metrics">{chapter.metrics.map(metric => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}<small>{metric.detail}</small></dd></div>)}</dl>}{chapter.details && <details><summary>{chapter.details.title}<b aria-hidden="true">+</b></summary><div><p>{chapter.details.text}</p></div></details>}</section>)}<Contact locale={locale} /></article>;
}

const processSteps = {
  ru: [
    ["01", "Обсуждаем задачу", "Разбираемся, что нужно получить, как устроена текущая система и какие есть ограничения."],
    ["02", "Определяем решение", "Согласуем подход, границы работы, ожидаемый результат и критерии проверки."],
    ["03", "Реализуем и проверяем", "Двигаемся по согласованным этапам, показываем результат и проверяем его на рабочих сценариях."],
    ["04", "Передаем результат", "Документируем решение и передаем необходимые материалы."],
    ["05", "Поддерживаем и развиваем", "После запуска сопровождаем решение, разбираем сбои и вносим необходимые изменения. Формат и объем поддержки согласуем отдельно."],
  ],
  en: [
    ["01", "Understand the challenge", "Clarify the desired outcome, the current system and its constraints."],
    ["02", "Define the solution", "Agree on the approach, scope, deliverables and acceptance criteria."],
    ["03", "Implement and validate", "Work through agreed milestones, share results and check real use cases."],
    ["04", "Hand over the result", "Document the solution and deliver the necessary materials."],
    ["05", "Support and improve", "Maintain the solution after launch, investigate failures and make necessary changes. Agree the support scope and format separately."],
  ],
};

export function WorkshopContent({ section, locale }: { section: SectionId; locale: Locale }) {
  if (section === "contact") return <ContactContent locale={locale} />;
  if (section === "experience") return <Resume locale={locale} />;
  if (section === "projects") return <Projects locale={locale} />;
  if (section === "research") return <Research locale={locale} />;
  const ru = locale === "ru";
  const aboutSummary = ru
    ? "Разрабатываю веб-сервисы, ускоряю доставку изменений и обеспечиваю стабильную работу инфраструктуры. Работаю с fullstack-разработкой и DevOps: от пользовательского интерфейса до деплоя и сопровождения. Также отвечаю за менеджмент процессов команды. Автоматизирую ручные операции, чтобы команда тратила меньше времени на рутину и сбои."
    : "I build web services, accelerate software delivery and keep infrastructure running reliably. I work across fullstack development and DevOps, from the user interface to deployment and maintenance. I also manage team processes. I automate manual operations so teams spend less time on repetitive work and service failures.";
  if (section === "about") return <article className="workshop-document"><span className="workshop-kicker">THE PERSON / WWN</span><h1>{ru ? "Привет, я Иван." : "Hi, I'm Ivan."}</h1><p className="workshop-document-lead">{ru ? "WWN — моя независимая инженерная практика." : "WWN is my independent engineering practice."}</p><p>{aboutSummary}</p><section><h2>{ru ? "От интерфейса до инфраструктуры" : "From interface to infrastructure"}</h2><p>{ru ? "Здесь собраны мои проекты, опыт и технические исследования. Работу в командах и личный вклад описываю в соответствующих разделах." : "This workshop brings together my projects, experience and technical research. The project descriptions distinguish team work and my own contributions."}</p><div className="workshop-document-links"><Link href={sectionHref("projects", locale)} scroll={false}>{ru ? "Открыть кейсы" : "Explore cases"} ↗</Link><Link href={sectionHref("experience", locale)} scroll={false}>{ru ? "Прочитать резюме" : "Read my resume"} ↗</Link></div></section><Contact locale={locale} /></article>;
  if (section === "blog") return <Publications locale={locale} />;
  const items = section === "services"
    ? serviceCatalog.map((service, index) => [
        String(index + 1).padStart(2, "0"),
        service[locale].title,
        service[locale].description,
      ])
    : processSteps[locale];
  return <article className="workshop-document"><span className="workshop-kicker">{section === "services" ? "ENGINEERING SOLUTIONS" : "WORKING TOGETHER"} / WWN</span><h1>{section === "services" ? ru ? "Разработка, инфраструктура и автоматизация." : "Development, infrastructure and automation." : ru ? "От задачи к работающему решению." : "From a challenge to a working solution."}</h1><p className="workshop-document-lead">{section === "services" ? ru ? "Разработка, инфраструктура и автоматизация под задачи проекта." : "Development, infrastructure and automation around your project's needs." : ru ? "Понятные этапы и согласованный результат." : "Clear milestones and an agreed outcome."}</p>{items.map(([number, title, text]) => <section className="workshop-service" key={number}><span className="workshop-kicker">{number}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}<Contact locale={locale} /></article>;
}
