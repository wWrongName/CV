import {mountPaasLiveObject} from './paas-live-object.js';
import {mountOperationsScene} from './operations-scene.js';
import {mountRequestScene} from './llmops-request-scene.js';
import {mountStudioProcessScene} from './studio-process-scene.js';
import {mountResearchScene} from './research-scene.js';

const offerings = [
  {
    label: 'Разработка',
    title: 'Запустить новый сервис',
    detail: 'Разрабатываем веб-приложения и внутренние инструменты. Готовим среду для запуска и передаем работающий сервис.',
    project: 'paas',
    visual: (canvas, reduced) => mountPaasLiveObject(canvas, reduced, () => 3),
  },
  {
    label: 'Инфраструктура',
    title: 'Упростить выпуск и поддержку',
    detail: 'Переносим конфигурации в код, автоматизируем релизы и настраиваем мониторинг. Разбираем повторяющиеся сбои и устраняем их причины.',
    project: 'operations',
    visual: mountOperationsScene,
  },
  {
    label: 'Исследования',
    title: 'Проверить техническую идею',
    detail: 'Сравниваем подходы и собираем прототипы, чтобы проверить ограничения и риски до внедрения в продукт.',
    project: 'llmops',
    visual: mountRequestScene,
  },
];

const process = [
  ['План', 'Согласуем задачу и границы', 'Разбираемся в текущей системе, согласуем объем работ и заранее определяем, как проверим результат.', 'План работ и критерии приемки.'],
  ['Запуск', 'Собираем, проверяем, запускаем', 'Показываем промежуточные версии, проверяем рабочие сценарии и разворачиваем готовое решение.', 'Работающий сервис и документация.'],
  ['Поддержка', 'Помогаем после запуска', 'Разбираем сбои, выпускаем обновления и развиваем сервис по согласованному формату.', 'Согласованный порядок сопровождения.'],
];

const contact = '<button class="studio-about__contact section-glass" type="button" data-section="contact">Обсудить проект <span aria-hidden="true">→</span></button>';

export function choices(values, label, glass = false) {
  return `<div class="studio-choices${glass ? ' section-glass' : ''}" role="group" aria-label="${label}">
    ${values.map((value, index) => `<button type="button" data-studio-choice="${index}" aria-pressed="${index === 0}">${value}</button>`).join('')}
  </div>`;
}

export const offeringsMarkup = `<article class="section-page studio-screen studio-offerings">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Решения</h1>${contact}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${offerings.map(({title, detail, project}, index) => `<div data-studio-panel ${index ? 'hidden' : ''}>
          <h2>${title}</h2><p>${detail}</p>
          <button type="button" class="studio-screen__link" data-section="case-${project}">Пример проекта <span aria-hidden="true">→</span></button>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><span aria-hidden="true">←</span></button>
    ${choices(offerings.map(({label}) => label), 'Направления', true)}
  </footer>
</article>`;

export const processMarkup = `<article class="section-page studio-screen studio-process">
  <div class="studio-offerings__body">
    <header class="studio-screen__header"><h1 id="document-title">Как работаем</h1>${contact}</header>
    <div class="studio-offerings__stage">
      <canvas aria-hidden="true"></canvas>
      <div class="studio-offerings__copy" aria-live="polite">
        ${process.map(([, title, detail, outcome], index) => `<div data-studio-panel ${index ? 'hidden' : ''}>
          <h2>${title}</h2><p>${detail}</p>
          <p class="studio-process__result">${outcome}</p>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <footer class="paas-deck__footer">
    <button type="button" class="paas-deck__back section-glass" aria-label="Назад" data-studio-back><span aria-hidden="true">←</span></button>
    ${choices(process.map(([label]) => label), 'Этапы работы', true)}
  </footer>
</article>`;

export function mountStudioScreen(screen, reducedMotion) {
  const buttons = [...screen.querySelectorAll('[data-studio-choice]')];
  const panels = [...screen.querySelectorAll('[data-studio-panel]')];
  const canvas = screen.querySelector('.studio-offerings__stage canvas');
  const scrollArea = screen.querySelector('.studio-offerings__body');
  const listeners = new AbortController();
  let selected = -1;
  const continuousScene = screen.classList.contains('studio-research') ? mountResearchScene
    : screen.classList.contains('studio-process') ? mountStudioProcessScene : null;
  let stopArt;

  function select(index) {
    if (index === selected) return;
    selected = index;
    buttons.forEach((button, number) => {
      button.setAttribute('aria-pressed', String(number === index));
      panels[number].hidden = number !== index;
    });
    scrollArea.scrollTop = 0;
    if (!canvas) return;
    if (continuousScene) {
      if (reducedMotion || !stopArt) {
        stopArt?.();
        stopArt = continuousScene(canvas, reducedMotion, () => selected);
      }
    } else {
      stopArt?.();
      stopArt = offerings[index].visual(canvas, reducedMotion);
    }
  }

  screen.addEventListener('click', event => {
    const button = event.target.closest('[data-studio-choice]');
    if (button) select(Number(button.dataset.studioChoice));
  }, {signal: listeners.signal});
  select(0);

  return () => {
    stopArt?.();
    listeners.abort();
  };
}
