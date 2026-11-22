import { mountPaasLiveObject } from './paas-live-object.js';
import { mountTechParticles } from './paas-tech-particles.js';

const launchStages = [
  {title: 'Репозиторий', action: 'Проект из GitHub или GitLab', detail: 'Разработчик подключает репозиторий и запускает проект через веб-интерфейс. Платформа сама получает исходный код.', input: 'GitHub / GitLab', output: 'Исходный код'},
  {title: 'Сборка', action: 'Подготовка среды запуска', detail: 'Платформа определяет стек проекта и устанавливает нужные инструменты и библиотеки. Это избавляет разработчика от ручной настройки окружения.', input: 'Исходный код', output: 'Готовая сборка'},
  {title: 'Запуск', action: 'Работающий сервис в облаке', detail: 'Платформа разворачивает приложение. Разработчик получает адрес работающего сервиса и логи, по которым можно проверить запуск.', input: 'Готовая сборка', output: 'URL и логи запуска', previewOutput: 'Пример URL · https://app.wwn.example'},
];

const stackLayers = [
  {name: 'Интерфейс и API', tools: 'Next.js · FastAPI', symbol: 'API', detail: 'Next.js показывает интерфейс платформы. FastAPI принимает запрос на запуск.'},
  {name: 'Фоновые задачи', tools: 'Celery', symbol: 'Celery', detail: 'Выполняет задачи запуска в фоне.'},
  {name: 'Среда выполнения', tools: 'Kubernetes', symbol: 'K8s', detail: 'Запускает приложения в облаке.'},
  {name: 'Подготовка окружения', tools: 'Terraform · Ansible', symbol: 'IaC', detail: 'Terraform описывает инфраструктуру для кластера, Ansible настраивает окружение.'},
  {name: 'Синхронизация с Git', tools: 'Argo CD', symbol: 'GitOps', detail: 'Применяет конфигурацию из Git в кластере Kubernetes.'},
];

const architectureFlows = [
  {label: 'Интерфейс и задачи', nodes: ['Next.js', 'FastAPI', 'Celery'], note: 'Интерфейс отправляет запрос в API. Фоновые задачи передаются Celery.'},
  {label: 'Развертывание · GitOps', nodes: ['Git', 'Argo CD', 'Kubernetes'], note: 'Argo CD применяет конфигурацию из Git в кластере.'},
  {label: 'Подготовка окружений', nodes: ['Terraform · Ansible', 'Kubernetes'], note: 'Инструменты описывают и настраивают инфраструктуру кластера.'},
];

export function workflowPreview(style) {
  if (style === 'trace') {
    return `<div class="paas-chapter">
      <h2>Из репозитория <br>в облако</h2>
      <ol class="paas-trace">
        ${launchStages.map(({action, detail, input, output}) => `<li>
          <h3>${action}</h3><p>${detail}</p>
          <samp>${input} <span aria-label="переходит в">→</span> ${output}</samp>
        </li>`).join('')}
      </ol>
    </div>`;
  }

  return stageSequenceMarkup(launchStages, 'Как работает / PaaS', 'Этапы запуска');
}

export function stageSequenceMarkup(stages, caption, controlsLabel, scene = '<canvas class="paas-launch__canvas" aria-hidden="true"></canvas>') {
  return `<div class="paas-chapter paas-sequence" data-paas-sequence>
    <div class="paas-sequence__scene">
      ${scene}
      <div class="paas-sequence__output">
        ${stages.map(({output, previewOutput}, index) => `<samp data-paas-stage-output ${index ? 'hidden' : ''}>${previewOutput ?? output}</samp>`).join('')}
      </div>
    </div>
    <div class="paas-sequence__copy" aria-live="polite">
      <p class="paas-sequence__caption">${caption}</p>
      <div class="paas-sequence__stages">
        ${stages.map(({action, detail}, index) => `<div class="paas-sequence__stage" data-paas-stage-content ${index ? 'inert' : ''}>
          <h2>${action}</h2><p>${detail}</p>
        </div>`).join('')}
      </div>
    </div>
    <div class="paas-sequence__controls" role="group" aria-label="${controlsLabel}">
      ${stages.map(({title}, index) => `<button type="button" aria-pressed="${index === 0}" data-paas-stage="${index}">${title}</button>`).join('')}
    </div>
  </div>`;
}

export function stackPreview(style) {
  if (style === 'flows') {
    return `<div class="paas-chapter">
      <h2>Архитектура платформы</h2>
      <div class="paas-architecture">
        ${architectureFlows.map(({label, nodes, note}) => `<section>
          <h3>${label}</h3>
          <div class="paas-architecture__flow">${nodes.map(node => `<b>${node}</b>`).join('<span aria-label="передает в">→</span>')}</div>
          <p>${note}</p>
        </section>`).join('')}
      </div>
    </div>`;
  }

  return stackMapMarkup([{title: 'Запуск приложения', tools: stackLayers.slice(0, 3)}, {title: 'Управление окружением', tools: stackLayers.slice(3)}]);
}

export function stackMapMarkup(groups, id = 'paas') {
  const layers = groups.flatMap(group => group.tools);
  const toolButton = (tool) => {
    const index = layers.indexOf(tool);
    return `<button type="button" data-paas-tech="${index}" data-particle-word="${tool.symbol}" aria-pressed="${index === 0}">${tool.tools}</button>`;
  };

  return `<div class="paas-chapter paas-layers" data-paas-tech-map>
    <canvas class="paas-tech-particle-field" aria-hidden="true"></canvas>
    <div class="paas-tech-visual" aria-hidden="true"></div>
    <div class="paas-tech-details" aria-live="polite">
      ${layers.map(({name, detail}, index) => `<div data-paas-tech-detail ${index ? 'hidden' : ''}>
        <h3>${name}</h3><p>${detail}</p>
      </div>`).join('')}
    </div>
    <div class="paas-tech-map">
      ${groups.map(({title, tools}, index) => `<div class="paas-tech-group" role="group" aria-labelledby="${id}-tech-group-${index}">
        <p id="${id}-tech-group-${index}">${title}</p>
        <div>${tools.map(toolButton).join('')}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

export function mountStackMap(deck, reducedMotion) {
  const map = deck.querySelector('[data-paas-tech-map]');
  if (!map) return;
  const buttons = [...map.querySelectorAll('[data-paas-tech]')];
  const words = buttons.map(button => button.dataset.particleWord);
  const details = [...map.querySelectorAll('[data-paas-tech-detail]')];
  let current = 0;
  let particles;
  function start() {
    particles = mountTechParticles(map, reducedMotion, current, words);
  }
  function showDetail(event) {
    if (event.type === 'pointerover' && event.pointerType === 'touch') return;
    const selected = event.target.closest('[data-paas-tech]');
    if (!selected) return;
    const next = Number(selected.dataset.paasTech);
    if (current === next) return;
    current = next;
    particles?.select(next);
    buttons.forEach((button, index) => {
      button.setAttribute('aria-pressed', String(button === selected));
      details[index].hidden = button !== selected;
    });
  }
  map.addEventListener('pointerover', showDetail);
  map.addEventListener('focusin', showDetail);
  map.addEventListener('click', showDetail);
  return {start, stop() {particles?.stop(); particles = undefined;}};
}

export function mountLaunchSequence(deck, reducedMotion) {
  return mountStageSequence(deck, reducedMotion, (canvas, reduced, readStep) =>
    mountPaasLiveObject(canvas, reduced, () => [0, 2, 3][readStep()]));
}

export function mountStageSequence(deck, reducedMotion, mountScene, {autoAdvance = true} = {}) {
  const sequence = deck.querySelector('[data-paas-sequence]');
  if (!sequence) return;
  const buttons = [...sequence.querySelectorAll('[data-paas-stage]')];
  const stages = [...sequence.querySelectorAll('[data-paas-stage-content]')];
  const outputs = [...sequence.querySelectorAll('[data-paas-stage-output]')];
  const canvas = sequence.querySelector('canvas');
  let selected = 0;
  let stopObject, timer;

  function startObject() {
    stopObject = mountScene?.(canvas, reducedMotion, () => selected);
  }

  function show(next) {
    if (next === selected) return;
    selected = next;
    buttons.forEach((item, index) => {
      item.setAttribute('aria-pressed', String(index === selected));
      stages[index].inert = index !== selected;
      outputs[index].hidden = index !== selected;
    });
    if (reducedMotion && stopObject) {
      stopObject();
      startObject();
    }
  }

  function advance() {
    show(selected + 1);
    if (selected < stages.length - 1) timer = setTimeout(advance, 4400);
  }

  function selectFromControl(event) {
    const button = event.target.closest('[data-paas-stage]');
    if (!button) return;
    clearTimeout(timer);
    show(Number(button.dataset.paasStage));
  }

  sequence.addEventListener('click', selectFromControl);
  sequence.addEventListener('pointerover', event => {
    if (event.pointerType === 'mouse') selectFromControl(event);
  });

  return {
    start() {
      show(0);
      startObject();
      if (!reducedMotion && autoAdvance) timer = setTimeout(advance, 4400);
    },
    stop() {
      clearTimeout(timer);
      stopObject?.();
      stopObject = undefined;
    },
  };
}
