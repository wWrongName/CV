import {mountStageSequence, stackMapMarkup, stageSequenceMarkup} from './paas-chapter-preview.js';
import {mountDeliveryObject} from './delivery-platform-object.js';

export const deliveryPlatformTitle = 'Kubernetes и GitOps';

const stages = [
  {
    title: 'Развертывание',
    action: 'Выпуск сервисов из Git',
    detail: 'Настройки платформы описаны в коде, поэтому окружение можно развернуть повторно. Argo CD применяет конфигурацию из Git, а Kubernetes запускает приложения из образов в Harbor.',
    output: 'Git → Argo CD → Kubernetes',
  },
  {
    title: 'Сеть и масштаб',
    action: 'Наблюдаемая сеть и автоматический масштаб',
    detail: 'Cilium обеспечивает связь между сервисами, а Hubble показывает, какой трафик проходит между ними. За автомасштабирование отвечают сценарии Ansible.',
    output: 'Cilium · Hubble · Ansible',
  },
  {
    title: 'Доступы',
    action: 'Корпоративный вход и права по ролям',
    detail: 'Argo CD использует Dex для связи с корпоративным LDAP. Vault также подключен к LDAP. Группы сотрудников определяют роли в Argo CD и политики доступа в Vault.',
    output: 'LDAP → Dex → Argo CD',
  },
];

const stack = [
  {title: 'Развертывание', tools: [
    {tools: 'Kubernetes', symbol: 'K8s', name: 'Среда запуска', detail: 'Общее окружение, в котором разворачиваются сервисы платформы.'},
    {tools: 'Argo CD', symbol: 'GitOps', name: 'Доставка конфигурации', detail: 'Синхронизирует конфигурацию приложений в Kubernetes с Git.'},
    {tools: 'Harbor', symbol: 'Image', name: 'Хранилище образов', detail: 'Реестр контейнерных образов, используемых при развертывании.'},
    {tools: 'IaC', symbol: 'IaC', name: 'Развертывание из кода', detail: 'Конфигурация инфраструктуры платформы описана в коде и воспроизводится при развертывании.'},
  ]},
  {title: 'Сеть и масштабирование', tools: [
    {tools: 'Cilium · Hubble', symbol: 'Flow', name: 'Сеть и видимость трафика', detail: 'Cilium соединяет сервисы, Hubble показывает сетевые потоки между ними.'},
    {tools: 'Ansible', symbol: 'Scale', name: 'Автомасштабирование', detail: 'Сценарии Ansible автоматизируют масштабирование платформы.'},
  ]},
  {title: 'Секреты и доступы', tools: [
    {tools: 'Vault', symbol: 'Vault', name: 'Хранение секретов', detail: 'Доступ к секретам ограничен политиками Vault.'},
    {tools: 'LDAP · RBAC', symbol: 'Access', name: 'Вход и разграничение прав', detail: 'LDAP обеспечивает вход в Vault и Argo CD. Группы привязаны к политикам Vault и ролям Argo CD.'},
  ]},
];

const hub = `<figure class="platform-hub" aria-label="Компоненты платформы Kubernetes">
  <canvas class="platform-hub__canvas" aria-hidden="true"></canvas>
  <ul class="platform-hub__group platform-hub__group--left">
    <li data-hub-stages="0 2"><span>Argo CD</span></li>
    <li data-hub-stages="0"><span>Harbor</span></li>
    <li data-hub-stages="2"><span>Dex</span></li>
  </ul>
  <div class="platform-hub__mark" aria-hidden="true"></div>
  <ul class="platform-hub__group platform-hub__group--right">
    <li data-hub-stages="1"><span>Cilium · Hubble</span></li>
    <li data-hub-stages="1"><span>Ansible</span></li>
    <li data-hub-stages="2"><span>Vault</span></li>
  </ul>
  <figcaption>Kubernetes</figcaption>
</figure>`;

const overviewRoute = `<ul class="paas-launch__route" aria-label="Компоненты проекта">
  ${stages.map(({title}) => `<li>${title}</li>`).join('')}
</ul>`;

export function deliveryPlatformCaseContent() {
  return [
    {id: 'overview', label: 'Обзор', layout: 'paas-hero case-hero--compact', markup: `
      <div class="paas-hero__copy">
        <p class="paas-hero__label">Проекты / Развертывание и эксплуатация</p>
        <h1 id="document-title">${deliveryPlatformTitle}</h1>
        <div class="paas-hero__result">
          <p class="paas-hero__label">Результат</p>
          <p>Общая среда для выпуска сервисов на Kubernetes. Новые проекты подключаются к готовому процессу развертывания, платформа масштабируется автоматически, а доступы управляются централизованно.</p>
        </div>
      </div>
      <div class="paas-launch platform-overview">${hub}${overviewRoute}</div>`},
    {id: 'workflow', label: 'Как работает', layout: 'paas-details', markup:
      stageSequenceMarkup(stages, 'Как работает / Kubernetes', 'Компоненты платформы', hub)},
    {id: 'stack', label: 'Технологии', layout: 'paas-details', markup: stackMapMarkup(stack, 'delivery-platform')},
  ];
}

export function mountDeliveryWorkflow(deck, reducedMotion) {
  return mountStageSequence(deck, reducedMotion, (canvas, reduced, readStage) =>
    mountDeliveryObject(canvas.closest('.platform-hub'), reduced, readStage));
}

export function mountDeliveryOverview(deck, reducedMotion) {
  const overview = deck.querySelector('.platform-overview .platform-hub');
  let stopObject;
  return {
    start() {stopObject = mountDeliveryObject(overview, reducedMotion);},
    stop() {stopObject?.(); stopObject = undefined;},
  };
}
