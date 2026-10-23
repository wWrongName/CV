import type { Locale } from "@/lib/i18n";
import { scientificPublications, technicalArticles } from "@/lib/workshop/publications";

export function Publications({ locale }: { locale: Locale }) {
  const ru = locale === "ru";
  const scientificGroups = [
    { kind: "conference", id: "conference-publications", title: ru ? "Международные конференции" : "International conferences" },
    { kind: "journal", id: "journal-publications", title: ru ? "Русскоязычные журнальные статьи" : "Russian-language journal articles" },
  ] as const;
  return <article className="workshop-document workshop-publications">
    <span className="workshop-kicker">PUBLICATIONS / WWN</span>
    <h1>{ru ? "Статьи и публикации" : "Articles and publications"}</h1>
    <p className="workshop-document-lead">{ru ? "Инфраструктура, автоматизация и безопасность AI." : "Infrastructure, automation and AI security."}</p>
    <nav className="workshop-document-links publication-jump" aria-label={ru ? "Разделы публикаций" : "Publication categories"}>
      <a href="#technical-articles">{ru ? "Технические статьи" : "Technical articles"} · {technicalArticles.length} ↓</a>
      <a href="#scientific-publications">{ru ? "Научные публикации" : "Scientific publications"} · {scientificPublications.length} ↓</a>
    </nav>
    <section id="technical-articles" className="publication-section">
      <div className="publication-section-heading"><h2>{ru ? "Технические статьи" : "Technical articles"}</h2><span className="workshop-kicker">{String(technicalArticles.length).padStart(2, "0")} / ХАБР · DEV</span></div>
      <div className="publication-list">{technicalArticles.map((article, index) => {
        const preferred = article.versions.find(version => version.language === locale) || article.versions[0];
        return <article className="publication-entry" key={article.id}>
          <span className="workshop-kicker publication-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="publication-entry-body">
            <p className="publication-topics">{article.topics.map(topic => topic === "Автоматизация" && !ru ? "Automation" : topic).join(" / ")}</p>
            <h3 lang={preferred.language}><a href={preferred.href} target="_blank" rel="noreferrer">{preferred.title}</a></h3>
            <div className="publication-versions">{article.versions.map(version => <a key={version.language} href={version.href} target="_blank" rel="noreferrer" hrefLang={version.language} aria-label={`${version.title} — ${version.platform}, ${version.language === "ru" ? ru ? "на русском" : "in Russian" : ru ? "на английском" : "in English"}`}>
              <span>{version.platform === "Хабр" && !ru ? "Habr" : version.platform}</span><span className="publication-language">{version.language.toUpperCase()}</span><span aria-hidden="true">↗</span>
            </a>)}</div>
          </div>
        </article>;
      })}</div>
    </section>
    <section id="scientific-publications" className="publication-section">
      <div className="publication-section-heading"><h2>{ru ? "Научные публикации" : "Scientific publications"}</h2><span className="workshop-kicker">{String(scientificPublications.length).padStart(2, "0")} / {ru ? "ЖУРНАЛЫ · КОНФЕРЕНЦИИ" : "JOURNALS · CONFERENCES"}</span></div>
      <p className="publication-section-intro">{ru ? "Статьи в научных журналах и материалы международных конференций." : "Scientific journal articles and international conference papers."}</p>
      {scientificGroups.map(group => <div className="publication-group" id={group.id} key={group.kind}>
        <h3 className="publication-group-title">{group.title}<span>{String(scientificPublications.filter(publication => publication.kind === group.kind).length).padStart(2, "0")}</span></h3>
        <div className="publication-list">{scientificPublications.filter(publication => publication.kind === group.kind).map((publication, index) => <article className="publication-entry" key={publication.id}>
          <span className="workshop-kicker publication-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="publication-entry-body">
            <p className="publication-topics">{publication.year} / {publication.kind === "journal" ? ru ? "ЖУРНАЛ" : "JOURNAL" : "IEEE"} / {publication.language.toUpperCase()}</p>
            <h4 lang={publication.language}><a href={publication.href} target="_blank" rel="noreferrer">{publication.title}</a></h4>
            <p className="publication-authors" lang={publication.language}>{publication.authors.join(", ")}</p>
            <p className="publication-venue"><span lang={publication.language}>{publication.venue}</span>{publication.issue && ` · ${publication.issue}`} · {ru ? "С." : "pp."} {publication.pages}</p>
            <a className="publication-doi" href={publication.doi ? `https://doi.org/${publication.doi}` : publication.href} target="_blank" rel="noreferrer">{publication.doi ? `DOI: ${publication.doi}` : `${ru ? "Открыть статью" : "Read article"}${publication.format === "pdf" ? " · PDF" : ""}`} <span aria-hidden="true">↗</span></a>
          </div>
        </article>)}</div>
      </div>)}
    </section>
  </article>;
}
