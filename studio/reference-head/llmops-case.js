import { mountStageSequence, stackMapMarkup, stageSequenceMarkup } from './paas-chapter-preview.js';
import { mountRequestScene } from './llmops-request-scene.js';

const requestSteps = [
  ['Доступ', 'Шлюз проверяет права приложения и лимиты.'],
  ['Обработка', 'Модель формирует ответ на запрос.'],
  ['Диагностика', 'Ответ возвращается приложению. Трассировка помогает разобрать ошибки и задержки.'],
];

const workflowStages = [
  {
    title: 'Запрос',
    action: 'Единый доступ к моделям',
    detail: 'Внутренние приложения отправляют запросы через общий шлюз. Он проверяет доступ, применяет лимиты и направляет запрос к нужной модели.',
    output: 'Запрос направлен к модели',
  },
  {
    title: 'Ответ',
    action: 'Ответ и диагностика',
    detail: 'Модель возвращает ответ приложению. Команда видит задержки и ошибки в мониторинге, а отдельный запрос может разобрать по трассировке.',
    output: 'Ответ · Метрики · Трассировка',
  },
  {
    title: 'Обновление',
    action: 'Проверка до выпуска',
    detail: 'Обновления проверяются отдельно от рабочих запросов. На одинаковых задачах команда сравнивает действующую и новую версии по качеству ответов, задержкам и расходу ресурсов.',
    output: 'Сравнение версий на одинаковых запросах',
  },
];

const stackGroups = [
  {title: 'Обработка запросов', tools: [
    {tools: 'Kong Gateway', symbol: 'GATE', name: 'Доступ и лимиты', detail: 'Шлюз проверяет правила доступа и ограничивает нагрузку перед обращением к модели.'},
    {tools: 'vLLM · Kubernetes', symbol: 'LLM', name: 'Выполнение запросов', detail: 'Модель обслуживает запросы через vLLM в Kubernetes компании.'},
  ]},
  {title: 'Контроль и выпуск', tools: [
    {tools: 'Prometheus · Grafana', symbol: 'METRICS', name: 'Состояние сервиса', detail: 'Метрики показывают задержки, ошибки и нагрузку.'},
    {tools: 'Langfuse', symbol: 'EVAL', name: 'Трассировки и качество', detail: 'Команда разбирает ответы по трассировкам и сравнивает версии на согласованных запросах.'},
    {tools: 'Git · CI/CD', symbol: 'CI/CD', name: 'Версии и релизы', detail: 'Конфигурации и промпты версионируются. Проверка качества предшествует выпуску изменений.'},
  ]},
];

export function llmopsCaseContent() {
  return [
    {id: 'overview', label: 'Обзор', layout: 'paas-hero llmops-hero', markup: `
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / LLMOps · Референсная архитектура</p>
        <h1 id="document-title">AI-ассистент для компании</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Цель проекта</p>
          <p>Дать командам единый доступ к моделям в инфраструктуре компании, видеть нагрузку и проверять качество ответов до обновления.</p>
          <p class="llmops-pilot">Качество, задержки и затраты на работу предстоит подтвердить на пилоте.</p>
        </div>
      </div>
      <figure class="llmops-demo" data-llmops-demo>
        <figcaption class="llmops-demo__caption">
          <span>Пример рабочего запроса</span>
          <button type="button" data-llmops-replay>Повторить</button>
        </figcaption>
        <canvas class="llmops-demo__art" aria-hidden="true"></canvas>
        <ol class="llmops-demo__steps">${requestSteps.map(([label]) => `<li>${label}</li>`).join('')}</ol>
        <p class="llmops-demo__status" aria-live="polite">${requestSteps[2][1]}</p>
      </figure>`},
    {id: 'workflow', label: 'Как работает', layout: 'paas-details', markup:
      stageSequenceMarkup(workflowStages, 'Как работает / LLMOps', 'Этапы работы LLMOps')},
    {id: 'stack', label: 'Технологии', layout: 'paas-details', markup: stackMapMarkup(stackGroups, 'llmops')},
  ];
}

export function mountLlmopsDemo(deck, reducedMotion) {
  const demo = deck.querySelector('[data-llmops-demo]');
  const replay = demo.querySelector('[data-llmops-replay]');
  const canvas = demo.querySelector('canvas');
  const steps = [...demo.querySelectorAll('li')];
  const status = demo.querySelector('[role="status"], [aria-live]');
  let timer, disposeScene;

  function stop() {
    clearTimeout(timer);
    disposeScene?.();
    disposeScene = undefined;
  }

  function show(index) {
    steps.forEach((step, position) => {
      step.dataset.state = position === index ? 'current' : position < index ? 'done' : 'pending';
    });
    status.textContent = requestSteps[index][1];
  }

  function start() {
    stop();
    disposeScene = mountRequestScene(canvas, reducedMotion);
    if (reducedMotion) {
      show(requestSteps.length - 1);
      return;
    }
    let index = 0;
    function advance() {
      show(index++);
      if (index < requestSteps.length) timer = setTimeout(advance, 850);
    }
    advance();
  }

  replay.hidden = reducedMotion;
  replay.addEventListener('click', start);
  return {start, stop};
}

export function mountLlmopsWorkflow(deck, reducedMotion) {
  return mountStageSequence(deck, reducedMotion, mountRequestScene);
}
