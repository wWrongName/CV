import {mountPaasLiveObject} from './paas-live-object.js';
import {mountRequestScene} from './llmops-request-scene.js';
import {mountOperationsScene} from './operations-scene.js';
import {mountDeliveryObject} from './delivery-platform-object.js';

export const projectLayouts = new Set(['index', 'atlas', 'carousel']);

const artwork = {
  paas: `
                    . : : .
               . : + x x x + : .
          . : + x x x x x x x x + : .
     . : + x x x x x x x x x x x x x + : .
     + : . x x x x x x x x x x x x . : +
     :     ' : + x x x x x x + : '    :
     :  .. ..   ' : + x + : '    o o  :
     + : .          ' + '          . : +
          ' : .       :       . : '
     + : .     ' : .  :  . : '     . : +
     :  ·· ··       ' + '       o o   :
     + : .                         . : +
          ' : .               . : '
               ' : .     . : '
                    ' + '
`,
  llmops: `
                          . : + : .
                        : + x x x + :
              . . + - - + x + # + x + - - + . .
              :         : + x x x + :         :
     . : .    :           ' : + : '           :   . : .
    : + x : - +                               + - : x + :
     ' : '    :           . : + : .           :   ' : '
              :         : + x x x + :         :
              ' . + - - + x + # + x + - - + . '
                        : + x x x + :
                          ' : + : '
`,
  operations: `
                       . + .              .
                   . : + :          . : +
               . : + :          . : + :
            . : + :            : + :
               ' : + :        : + :
                   ' : + .   : + :
                        '   : + :
                           : + :
                          : + :    . + .
                         : + :     : + : .
                                    ' : + : .
                                        ' : + : .
                                    . : + : '
                                . : + : '
                               ' : '
`,
  'delivery-platform': `
                           . : .
                     . : + : : : + : .
              . : + : .      +      . : + : .
            + :              x              : +
           :         x . : + x + : . x        :
          .           + x :  +  : x +          .
          :           : x    x    x :          :
          :          :   x + # + x   :         :
         .     + x + x + x + # + x + x + x +    .
          :          :   x + # + x   :         :
          :           : x + : : + x :          :
           .        . x + : . . : + x .       .
            :      x + :         : + x       :
             + :     '             '     : +
                  + : : : : : : : : : +
`,
};

function art(project) {
  return `<pre class="project-preview__art" aria-hidden="true">${artwork[project.id].trimEnd().replace(/^\n/, '')}</pre>`;
}

function link(project, className, children) {
  return `<a class="${className}" href="#case-${project.id}">${children}</a>`;
}

const arrow = '<span class="project-preview__arrow" aria-hidden="true">→</span>';
const title = '<h1 class="project-preview__title">Проекты</h1>';

function renderIndex(projects) {
  return `${title}
    <ul class="project-preview__index">
      ${projects.map(project => `<li>${link(project, 'project-preview__entry', `
        <span><strong>${project.name}</strong><span>${project.result}</span></span>${arrow}
      `)}</li>`).join('')}
    </ul>`;
}

function renderAtlas(projects) {
  return `${title}
    <ul class="project-preview__atlas">
      ${projects.map(project => `<li>${link(project, 'project-preview__tile', `
        ${art(project)}
        <span class="project-preview__tile-copy"><strong>${project.name}</strong><span>${project.result}</span></span>
        ${arrow}
      `)}</li>`).join('')}
    </ul>`;
}

function renderCarousel(projects) {
  return `<div class="project-preview__rail-heading">
    ${title}<span class="project-preview__swipe">← Листайте →</span><output data-project-position aria-label="Позиция в карусели">1 / ${projects.length}</output>
  </div>
  <div class="project-preview__rail-shell">
    <div class="project-preview__rail-controls" role="group" aria-label="Листать проекты">
      <button class="paas-deck__back section-glass" type="button" data-project-shift="-1" aria-label="Предыдущий проект" disabled><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
      <button class="paas-deck__back section-glass" type="button" data-project-shift="1" aria-label="Следующий проект"><svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg></button>
    </div>
    <ul class="project-preview__rail" data-project-rail aria-label="Проекты">
      ${projects.map((project, index) => `<li ${index === 0 ? 'data-project-current' : ''}>
        ${link(project, 'project-preview__slide', `
          ${project.id === 'delivery-platform'
            ? `<div class="platform-hub project-preview__badge" data-project-model="${project.id}" aria-hidden="true">
                <canvas class="platform-hub__canvas"></canvas><div class="platform-hub__mark"></div>
              </div>`
            : `<canvas class="project-preview__model" data-project-model="${project.id}" aria-hidden="true"></canvas>`}
          <div class="project-preview__feature-copy">
            <h2>${project.name}</h2>
            <p>${project.result}</p>
            <span class="project-preview__slide-open">Открыть кейс ${arrow}</span>
          </div>`)}
      </li>`).join('')}
    </ul>
  </div>`;
}

const mountModels = {
  paas: (canvas, reduced) => mountPaasLiveObject(canvas, reduced, () => 3),
  llmops: mountRequestScene,
  operations: mountOperationsScene,
  'delivery-platform': mountDeliveryObject,
};

function mountCarousel(preview) {
  const track = preview.querySelector('[data-project-rail]');
  const slides = [...track.children];
  const [previousButton, nextButton] = preview.querySelectorAll('[data-project-shift]');
  const indicator = preview.querySelector('[data-project-position]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const models = slides.map(slide => slide.querySelector('[data-project-model]'));
  const scenes = new Map();
  let active = false;
  let selected = -1;

  function showModel(index, animate) {
    const model = models[index];
    const running = scenes.get(index);
    if (!model || running?.animate === animate) return;
    running?.stop?.();
    scenes.set(index, {animate, stop: mountModels[model.dataset.projectModel](model, !animate)});
  }

  function slideOffset(slide) {
    return slide.getBoundingClientRect().left - track.getBoundingClientRect().left +
      (slide.offsetWidth - track.clientWidth) / 2;
  }

  function currentSlide() {
    const distances = slides.map(slide => Math.abs(slideOffset(slide)));
    return distances.indexOf(Math.min(...distances));
  }

  function updatePosition() {
    const current = currentSlide();
    const position = `${current + 1} / ${slides.length}`;
    if (indicator.value !== position) indicator.value = position;
    previousButton.disabled = current === 0;
    nextButton.disabled = current === slides.length - 1;
    slides.forEach((slide, index) => slide.toggleAttribute('data-project-current', index === current));
    if (!active || selected === current) return;
    for (const [index, scene] of scenes) {
      if (Math.abs(index - current) <= 1) continue;
      scene.stop?.();
      scenes.delete(index);
    }
    showModel(current - 1, false);
    showModel(current + 1, false);
    showModel(current, !reduced.matches);
    selected = current;
  }

  track.addEventListener('scroll', updatePosition, {passive: true});
  preview.addEventListener('click', event => {
    const control = event.target.closest('[data-project-shift]');
    if (!control) return;
    const slide = slides[currentSlide() + Number(control.dataset.projectShift)];
    if (slide) track.scrollBy({left: slideOffset(slide), behavior: reduced.matches ? 'instant' : 'smooth'});
  });
  return {
    setActive(value) {
      if (active === value) return;
      active = value;
      if (active) updatePosition();
      else {
        for (const scene of scenes.values()) scene.stop?.();
        scenes.clear();
        selected = -1;
      }
    },
  };
}

export function mountProjectPreview(layer, layout, projects, openProject) {
  const preview = document.createElement('div');
  preview.className = `project-preview project-preview--${layout}`;
  preview.innerHTML = {index: renderIndex, atlas: renderAtlas, carousel: renderCarousel}[layout](projects);
  layer.dataset.projectLayout = layout;
  layer.append(preview);
  const carousel = layout === 'carousel' ? mountCarousel(preview) : undefined;

  preview.addEventListener('click', event => {
    const entry = event.target.closest('a[href^="#case-"]');
    if (!entry || event.button || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    openProject(entry.hash.slice(1));
  });
  return carousel;
}
