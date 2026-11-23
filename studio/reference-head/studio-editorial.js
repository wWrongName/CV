import content from './editorial-content.json';
import {choices} from './studio-offerings.js';
import {mountEditorialScene} from './editorial-scene.js';

const {research, scientificPublications, technicalArticles} = content;

function externalLink(href, text, attributes = '') {
  return `<a href="${href}" target="_blank" rel="noopener" ${attributes}>${text}</a>`;
}

function screen(title, className, body, labels, navigationLabel, headerAction) {
  return `<article class="section-page studio-screen ${className}">
    <div class="studio-offerings__body">
      <header class="studio-screen__header">
        <h1 id="document-title">${title}</h1>
        ${headerAction}
      </header>
      ${body}
    </div>
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      ${choices(labels, navigationLabel, true)}
    </footer>
  </article>`;
}

function chapter({title, text, note, details, metrics}, heading) {
  return `<section class="research-chapter">
    <${heading}>${title.replaceAll('\n', ' ')}</${heading}>
    <p>${text}</p>
    ${metrics ? `<dl class="research-metrics">${metrics.map(({value, label, detail}) =>
      `<div><dt>${label}</dt><dd><strong>${value}</strong><small>${detail}</small></dd></div>`).join('')}</dl>` : ''}
    <p class="editorial-meta">${note}</p>
    ${details ? `<details><summary>${details.title}</summary><p>${details.text}</p></details>` : ''}
  </section>`;
}

const [problem, solution, method, results] = research.chapters;

export const researchMarkup = screen('Исследования', 'studio-research', `
  <div class="studio-offerings__stage">
    <div class="studio-offerings__copy">
      <div data-studio-panel>
        <h2>${research.title.replaceAll('\n', ' ')}</h2>
        <p>${research.summary}</p>
        ${chapter(problem, 'h3')}
      </div>
      <div data-studio-panel hidden>
        ${chapter(solution, 'h2')}
        ${chapter(method, 'h3')}
      </div>
      <div data-studio-panel hidden>
        ${chapter(results, 'h2')}
        <button type="button" class="studio-screen__link" data-section="contact">Обсудить похожую задачу <span aria-hidden="true">→</span></button>
      </div>
    </div>
    <canvas aria-hidden="true"></canvas>
  </div>`, ['Обзор', 'Методика', 'Результаты'], 'Разделы исследования', '<button type="button" class="studio-screen__link" data-section="blog">Статьи и публикации <span aria-hidden="true">→</span></button>');

function publicationSlide({year, language, href, title, authors, venue, issue, pages, doi, format, kind}) {
  const doiUrl = doi ? `https://doi.org/${doi}` : '';
  return `<p class="editorial-meta">${year} · ${kind === 'conference' ? 'Международная конференция · IEEE' : 'Научный журнал'}</p>
    <h2 lang="${language}">${title}</h2>
    <p lang="${language}">${authors.join(', ')}</p>
    <p class="blog-venue"><span lang="${language}">${venue}</span>${issue ? ` · ${issue}` : ''} · ${language === 'ru' ? 'С.' : 'pp.'} ${pages}</p>
    <div class="editorial-versions">
      ${externalLink(href, `Открыть ${format === 'pdf' ? 'PDF' : 'публикацию'} ↗`)}
      ${doiUrl && doiUrl !== href ? externalLink(doiUrl, `DOI ${doi}`) : ''}
    </div>`;
}

function articleSlide({topics, versions}) {
  const preferred = versions.find(version => version.language === document.documentElement.lang) ?? versions[0];
  return `<p class="editorial-meta">${topics.join(' / ')}</p>
    <h2 lang="${preferred.language}">${preferred.title}</h2>
    <div class="editorial-versions">${versions.map(({href, language, platform}) =>
      externalLink(href, `${platform} · ${language.toUpperCase()} ↗`, `hreflang="${language}"`)).join('')}</div>`;
}

// Journal coverage is documented by the publishers. EDNs identify the exact articles.
const publicationIndexes = {
  'llm-defense-review-2025': {labels: ['ВАК', 'РИНЦ'], edn: 'FHFGXI'},
  'llm-attacks-review-2025': {labels: ['ВАК', 'РИНЦ'], edn: 'SJYTYG'},
  'vrf-journal-2024': {labels: ['Scopus', 'ВАК', 'РИНЦ'], edn: 'FNYMEW'},
  'lora-certification-2026': {labels: ['ВАК', 'РИНЦ']},
};

function publicationBadges(publication) {
  if (publication.kind === 'conference') {
    return externalLink(publication.href, 'IEEE Xplore', 'class="blog-index-badge"');
  }
  const {labels, edn} = publicationIndexes[publication.id] ?? {labels: []};
  return labels.map(label => {
    const href = label === 'РИНЦ' && edn ? `https://elibrary.ru/${edn.toLowerCase()}` : publication.href;
    return externalLink(href, label, `class="blog-index-badge" aria-label="${label} · открыть статью"`);
  }).join('');
}

const blogGroups = [
  [...scientificPublications.filter(({kind}) => kind === 'conference'),
    ...scientificPublications.filter(({kind}) => kind === 'journal')].map(publication =>
    ({copy: publicationSlide(publication), badges: publicationBadges(publication)})),
  technicalArticles.map(article => ({copy: articleSlide(article)})),
];

export const blogMarkup = screen('Блог и публикации', 'studio-blog', `
  <div class="blog-carousel">
    <button class="blog-shift section-glass" type="button" data-blog-shift="-1" aria-label="Предыдущий материал" disabled>←</button>
    ${blogGroups.map((slides, group) => `<div class="blog-track" data-studio-panel ${group ? 'hidden' : ''} tabindex="0" role="region" aria-label="${group ? 'Статьи' : 'Публикации'}">
      ${slides.map(({copy, badges}) => `<div class="blog-stage" data-blog-slide>
        <div class="blog-stage__copy">${copy}</div>
        <div class="blog-visual">
          <canvas aria-hidden="true"></canvas>
          ${badges ? `<div class="blog-index-badges">${badges}</div>` : ''}
        </div>
      </div>`).join('')}
    </div>`).join('')}
    <button class="blog-shift section-glass" type="button" data-blog-shift="1" aria-label="Следующий материал">→</button>
  </div>`, ['Публикации', 'Статьи'], 'Категории материалов',
  `<div class="blog-position"><span>Листайте</span><output aria-label="Позиция">1 / ${blogGroups[0].length}</output></div>`);

export function mountBlogCarousel(screen, reducedMotion) {
  const rail = screen.querySelector('.blog-carousel');
  const tracks = [...rail.querySelectorAll('.blog-track')];
  const slides = tracks.map(track => [...track.children]);
  const [previous, next] = rail.querySelectorAll('[data-blog-shift]');
  const counter = screen.querySelector('output');
  const listeners = new AbortController();
  const options = {signal: listeners.signal};
  const scenes = new Map();
  let group = 0;

  function slideOffset(track, slide) {
    return slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
  }

  function currentIndex() {
    const track = tracks[group];
    const distances = slides[group].map(slide => Math.abs(slideOffset(track, slide)));
    return distances.indexOf(Math.min(...distances));
  }

  function update() {
    const index = currentIndex();
    const currentSlides = slides[group];
    const position = `${index + 1} / ${currentSlides.length}`;
    if (counter.value !== position) counter.value = position;
    previous.disabled = index === 0;
    next.disabled = index === currentSlides.length - 1;

    const visible = new Set(currentSlides.slice(Math.max(0, index - 1), index + 2));
    for (const [slide, {scene}] of scenes) {
      if (visible.has(slide)) continue;
      scene?.stop();
      scenes.delete(slide);
    }
    for (const slide of visible) {
      const animate = !reducedMotion && slide === currentSlides[index];
      const running = scenes.get(slide);
      if (running?.animate === animate) continue;
      running?.scene?.stop();
      const number = currentSlides.indexOf(slide);
      const versions = group === 1 ? technicalArticles[number].versions : null;
      const scene = mountEditorialScene(slide.querySelector('canvas'), !animate, () => number, () => versions);
      scenes.set(slide, {scene, animate});
    }
  }

  function shift(delta) {
    const track = tracks[group];
    const target = slides[group][currentIndex() + delta];
    if (target) track.scrollBy({left: slideOffset(track, target), behavior: reducedMotion ? 'instant' : 'smooth'});
  }

  tracks.forEach((track, index) => track.addEventListener('scroll', () => {
    if (index === group) update();
  }, {...options, passive: true}));
  screen.addEventListener('click', event => {
    const tab = event.target.closest('[data-studio-choice]');
    if (tab) {
      group = Number(tab.dataset.studioChoice);
      update();
    }
  }, options);
  previous.addEventListener('click', () => shift(-1), options);
  next.addEventListener('click', () => shift(1), options);
  rail.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    shift(event.key === 'ArrowLeft' ? -1 : 1);
  }, options);

  const observer = new ResizeObserver(update);
  observer.observe(rail);
  update();
  return () => {
    listeners.abort();
    observer.disconnect();
    for (const {scene} of scenes.values()) scene?.stop();
  };
}
