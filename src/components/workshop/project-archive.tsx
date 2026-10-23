"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Locale } from "@/lib/i18n";
import type { Journey } from "@/lib/journeys";
import { sectionHref } from "@/lib/workshop/sections";
import Link from "next/link";
import { projectDiagrams } from "@/lib/workshop/project-diagrams";
import { caseStories } from "@/lib/workshop/case-stories";

type Props = { projects: Journey[]; locale: Locale };

function ProjectDiagram({ project, locale }: { project: Journey; locale: Locale }) {
  const ru = locale === "ru";
  const diagram = projectDiagrams[project.id];
  return <figure className="dossier-diagram">
    <figcaption><span className="dossier-eyebrow">{ru ? "Техническая схема" : "Technical diagram"}</span><span className="dossier-figure-id">{ru ? "ЛОГИЧЕСКИЕ СВЯЗИ" : "LOGICAL CONNECTIONS"}</span></figcaption>
    <p className="dossier-diagram-key">{ru ? "→ действие или передача данных · — функциональная связь. Одинаковые подписи обозначают один и тот же компонент." : "→ action or data flow · — functional relationship. Repeated blocks refer to the same component."}</p>
    <div className="dossier-routes">
      {diagram.routes.map(route => <section className="dossier-route" key={route.id} data-route={route.id}>
        <h4>{route.title[locale]}</h4>
        <ol className="dossier-route-steps">
          {route.steps.map((step, i) => {
            const node = project.nodes.find(node => node.id === step.node)!;
            const relation = route.relations[i];
            const next = route.steps[i + 1];
            return <li key={`${step.node}-${i}`}>
              <div className="dossier-flow-node" data-node={step.node}><strong>{step.label?.[locale] ?? node.label}</strong><span>{step.detail?.[locale] ?? node.detail}</span></div>
              {relation && <div className="dossier-flow-relation" data-kind={relation.kind ?? "flow"} data-from={step.node} data-to={next.node}>
                <span className="dossier-flow-arrow" aria-hidden="true" /><span>{relation.label[locale]}</span>
              </div>}
            </li>;
          })}
        </ol>
      </section>)}
    </div>
    {diagram.note && <p className="dossier-diagram-note">{diagram.note[locale]}</p>}
    <dl className="dossier-component-list">{project.nodes.map(node => <div key={node.id}><dt>{node.label}</dt><dd>{node.detail}</dd></div>)}</dl>
  </figure>;
}

export function ProjectArchive({ projects, locale }: Props) {
  const [selected, setSelected] = useState(projects[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const project = projects.find(item => item.id === selected) || projects[0];
  const ru = locale === "ru";
  const story = caseStories[project.id];
  useEffect(() => {
    const readHash = () => { const hash = location.hash.slice(1); const item = projects.find(item => hash === item.id || hash.startsWith(`${item.id}-chapter-`)); if (item) setSelected(item.id); };
    readHash(); addEventListener("hashchange", readHash); return () => removeEventListener("hashchange", readHash);
  }, [projects]);
  useLayoutEffect(() => {
    const hash = location.hash.slice(1);
    if (hash.startsWith(`${project.id}-chapter-`)) document.getElementById(hash)?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [project.id]);
  function select(id: string) {
    setSelected(id); history.replaceState(history.state, "", `#${id}`);
    root.current?.closest(".workshop-panel-body")?.scrollTo({ top: 0, behavior: "instant" });
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key)) next = (index + 1) % projects.length;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key)) next = (index + projects.length - 1) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault(); select(projects[next].id); tabRefs.current[next]?.focus({ preventScroll: true });
  }
  return <div className="project-archive" ref={root}>
    <aside className="dossier-index"><div className="dossier-index-heading"><span className="dossier-eyebrow">WWN / IT SOLUTIONS</span><strong>{ru ? "Архив проектов" : "Project archive"}</strong><small>{String(projects.length).padStart(2,"0")} {ru ? "проектных дел" : "project files"}</small></div>
      <div className="dossier-tabs" role="tablist" aria-label={ru ? "Выбрать проект" : "Select a project"}>
        {projects.map((item, i) => <button key={item.id} ref={node => { tabRefs.current[i] = node; }} type="button" role="tab" id={`${uid}-tab-${item.id}`} aria-selected={item.id === project.id} aria-controls={`${uid}-file`} tabIndex={item.id === project.id ? 0 : -1} onClick={() => select(item.id)} onKeyDown={event => navigate(event, i)}>
          <span>{item.index}</span><span><strong>{item.name}</strong><small>{item.category}</small></span><b aria-hidden="true">→</b>
        </button>)}
      </div>
      <div className="dossier-index-foot"><span aria-hidden="true">WWN</span><p>{ru ? "Задача. Решение. Как работает. Результат." : "Challenge. Solution. How it works. Outcome."}</p></div>
    </aside>
    <article className="dossier-paper" role="tabpanel" id={`${uid}-file`} aria-labelledby={`${uid}-tab-${project.id}`} tabIndex={0} key={project.id}>
      <header className="dossier-cover"><div className="dossier-file-line"><span className="dossier-document-mark"><span aria-hidden="true" className="dossier-emblem">W</span>WWN<br />IT SOLUTIONS</span><span className="dossier-file-number">{ru ? "ПРОЕКТНОЕ ДЕЛО" : "PROJECT FILE"}<strong>{project.index}<span> / {String(projects.length).padStart(2,"0")}</span></strong></span></div>
        <p className="dossier-category">{project.category}</p><h1>{story.title[locale]}</h1><p className="dossier-lead">{story.summary[locale]}</p>
        {story.context && <p className="dossier-case-context">{story.context[locale]}</p>}
        <nav className="dossier-chapter-nav" aria-label={ru ? "Разделы разбора" : "Case sections"}>{story.chapters.map((chapter, i) => <a key={i} href={`#${project.id}-chapter-${i}`}><span>{String(i+1).padStart(2,"0")}</span>{chapter.label[locale].toLocaleLowerCase(locale)}<b aria-hidden="true">↓</b></a>)}</nav>
      </header>
      {story.chapters.map((chapter, i) => <section className="dossier-chapter" id={`${project.id}-chapter-${i}`} key={i} data-result={i === 3}>
        <div className="dossier-section-label"><span>{String(i+1).padStart(2,"0")}</span><h2>{chapter.label[locale]}</h2></div>
        <h3>{chapter.title[locale]}</h3><p>{chapter.text[locale]}</p>
        {chapter.steps && <ol className="dossier-workflow">{chapter.steps.map((step, j) => <li key={j}><span aria-hidden="true">{String(j+1).padStart(2,"0")}</span><p>{step[locale]}</p></li>)}</ol>}
        {chapter.points && <ul className="dossier-outcomes">{chapter.points.map((point, j) => <li key={j}>{point[locale]}</li>)}</ul>}
        {i === 2 && <details className="dossier-technical"><summary>{ru ? "Техническая схема и инструменты" : "Technical diagram and tools"}<span aria-hidden="true">+</span></summary>
          <ProjectDiagram project={project} locale={locale} />
          <p className="dossier-margin-note">{project.chapters[2].note}</p>
          {project.chapters.map((source, j) => source.details && <details className="dossier-extra" key={j}><summary>{source.details.title}</summary><p>{source.details.text}</p></details>)}
        </details>}
      </section>)}
      <footer className="dossier-footer"><span className="dossier-footer-title">{ru ? "Обсудить проект" : "Discuss a project"}</span><Link href={sectionHref("contact",locale)} scroll={false}>{ru ? "Обсудить задачу" : "Discuss a challenge"} ↗</Link><Link href={sectionHref("experience",locale)} scroll={false}>{ru ? "Резюме" : "Resume"} ↗</Link></footer>
    </article>
  </div>;
}
