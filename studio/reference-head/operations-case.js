import { mountStageSequence, stackMapMarkup, stageSequenceMarkup } from './paas-chapter-preview.js';
import { mountOperationsScene } from './operations-scene.js';

const stages = [
  {title: 'Конфигурация', action: 'Настройки хранятся в коде', detail: 'Конфигурацию инфраструктуры перенесли в код. Инженер вносит изменения и запускает готовый сценарий в GitLab.', output: 'Изменения переданы в GitLab CI'},
  {title: 'Обновление', action: 'GitLab обновляет настройки', detail: 'Пайплайн выполняет обновление по одному сценарию. Время на эту работу сократилось примерно втрое.', output: 'Настройки обновлены'},
  {title: 'Восстановление', action: 'Sentry возобновляет сбор ошибок', detail: 'Блокировка диска во время резервного копирования останавливала обработчики Sentry. Теперь они восстанавливаются автоматически, а мониторинг уведомляет команду о сбоях.', output: 'Сбор ошибок возобновлен'},
];

const stack = [
  {title: 'Инфраструктура как код', tools: [
    {tools: 'Ansible', symbol: 'IaC', name: 'Настройки в коде', detail: 'Настройки инфраструктуры описаны в сценариях Ansible.'},
    {tools: 'GitLab CI', symbol: 'CI/CD', name: 'Обновление инфраструктуры', detail: 'Пайплайн GitLab CI запускает сценарий обновления из репозитория.'},
  ]},
  {title: 'Эксплуатация', tools: [
    {tools: 'Sentry · Snuba', symbol: 'Errors', name: 'Обработка ошибок', detail: 'Для обработчиков Sentry настроено автоматическое восстановление после сбоев при резервном копировании.'},
    {tools: 'Grafana · ELK', symbol: 'Logs', name: 'Мониторинг и логи', detail: 'Мониторинг и уведомления показывают сбои, а логи помогают разобраться в причине.'},
  ]},
];

export function operationsCaseContent() {
  return [
    {id: 'overview', label: 'Обзор', layout: 'paas-hero case-hero--compact', markup: `
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / IaC и мониторинг</p>
        <h1 id="document-title">Инфраструктура как код</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Результат</p>
          <p>Перенос настроек инфраструктуры в код и автоматизация обновлений. Повышение отказоустойчивости сервисов за счет мониторинга и автоматического восстановления после сбоев.</p>
        </div>
      </div>
      <figure class="case-demo" data-operations-demo>
        <canvas class="case-demo__art" aria-hidden="true"></canvas>
        <figcaption>
          <ol class="case-demo__labels">
            <li>Настройки в коде</li>
            <li>Обновление</li>
            <li>Мониторинг</li>
          </ol>
        </figcaption>
      </figure>`},
    {id: 'workflow', label: 'Как работает', layout: 'paas-details operations-flow', markup:
      stageSequenceMarkup(stages, 'Как работает / IaC и мониторинг', 'Этапы изменений и восстановления')},
    {id: 'stack', label: 'Технологии', layout: 'paas-details', markup: stackMapMarkup(stack, 'operations')},
  ];
}

export function mountOperationsOverview(deck, reducedMotion) {
  const canvas = deck.querySelector('[data-operations-demo] canvas');
  let dispose;
  return {
    start() {dispose = mountOperationsScene(canvas, reducedMotion);},
    stop() {dispose?.(); dispose = undefined;},
  };
}

export function mountOperationsWorkflow(deck, reducedMotion) {
  return mountStageSequence(deck, reducedMotion, mountOperationsScene);
}
