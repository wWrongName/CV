import content from './studio-content.js';
import { deviceTilt, mountDeviceTilt } from './device-tilt.js';
import {createIdleBehavior} from '../ascii-head-module/runtime/idle-behavior.js';
import { createAsciiHead, HEAD_ANCHORS } from '../ascii-head-module/index.js';
import { mountCoverVariants } from './cover-variants.js';
import { animateContactQr, telegramUrl } from './contact-qr.js';
import { paasLaunchMarkup, playPaasLaunch } from './paas-launch.js';
import { mountPaasLiveObject } from './paas-live-object.js';
import { mountLaunchSequence, mountStackMap, stackPreview, workflowPreview } from './paas-chapter-preview.js';
import { llmopsCaseContent, mountLlmopsDemo, mountLlmopsWorkflow } from './llmops-case.js';
import { operationsCaseContent, mountOperationsOverview, mountOperationsWorkflow } from './operations-case.js';
import { deliveryPlatformCaseContent, deliveryPlatformTitle, mountDeliveryOverview, mountDeliveryWorkflow } from './delivery-platform-case.js';
import { mountProjectPreview, projectLayouts } from './project-previews.js';
import { mountStudioMark, studioAboutMarkup } from './studio-about.js';
import { mountStudioScreen, offeringsMarkup, processMarkup } from './studio-offerings.js';
import { blogMarkup, researchMarkup, mountBlogCarousel } from './studio-editorial.js';

// Project IDs match the site's canonical routes.
const projects = [
  { id: 'paas', index: '01', name: 'PaaS-платформа', kind: 'Cloud-native платформа', result: 'Запуск приложений из Git в инфраструктуре компании.' },
  { id: 'llmops', index: '02', name: 'LLMOps', kind: 'Референсная архитектура', result: 'Архитектура AI-ассистента для корпоративной инфраструктуры.' },
  { id: 'operations', index: '03', name: 'Инфраструктура как код', kind: 'IaC и мониторинг', result: 'Автоматизация обновлений и восстановления после сбоев.' },
  { id: 'delivery-platform', index: '04', name: deliveryPlatformTitle, kind: 'Развертывание и эксплуатация', result: 'Общий процесс выпуска, масштабирования и управления доступами.' },
];
const demoParams = new URLSearchParams(location.search);
const production = document.body.hasAttribute('data-studio-release');
const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
const alternateLocale = locale === 'ru' ? 'en' : 'ru';
if (production) {
  for (const [key, value] of Object.entries({
    cover: 'glass-split-schematic', brand: 'top-left', font: 'condensed',
    effect: 'all', mark: 'vertical', logo: 'menu-sign', contactStyle: 'caption',
    paasStyle: 'live', paasWorkflow: 'sequence', paasStack: 'layers', projectLayout: 'carousel',
  })) {
    if (!demoParams.has(key)) demoParams.set(key, value);
  }
  if (navigator.doNotTrack !== '1') {
    void fetch('/api/events', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({kind: 'page_view', value: `/${locale}`}),
      credentials: 'omit', mode: 'same-origin', keepalive: true,
    }).catch(() => {});
  }
}
const requestedLayout = demoParams.get('projectLayout');
const projectLayout = projectLayouts.has(requestedLayout) ? requestedLayout : '';
const $ = id => document.getElementById(id);
const languageSwitch = `<div class="cover-languages" role="group" aria-label="Язык">
  ${['ru', 'en'].map(language => language === locale
    ? `<span lang="${language}" aria-current="true">${language.toUpperCase()}</span>`
    : `<a class="cover-locale" href="/${language}" hreflang="${language}" lang="${language}">${language.toUpperCase()}</a>`).join('')}
</div>`;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const enableTilt = mountDeviceTilt(reduced, hideTiltControl);
const tiltControl = enableTilt ? '<button type="button" data-enable-tilt hidden aria-live="polite">Включить наклон</button>' : '';
const directoryLinks = '<button data-open-projects>Проекты</button><button data-section="services">Решения</button><button data-section="about">О студии</button><button data-section="process">Процесс</button><button data-section="blog">Блог и публикации</button><button data-section="research">Исследования</button><button data-section="contact">Контакты</button>' + tiltControl + (production ? languageSwitch : '');
const host = $('head'), orbit = $('orbit'), projectLayer = $('projects');
const goButton = $('go'), backButton = $('back'), status = $('demo-status');
const coverDetails = $('cover-details');
const coverLinks = [...coverDetails.querySelectorAll('.cover-link')];
const DEFAULT_VIEW = Object.freeze({ yaw: -.77, pitch: .087, scale: .84, offsetX: 0, offsetY: .22 });
const TOP_VIEW = Object.freeze({ yaw: -.65, pitch: 1.12, scale: 1.6, offsetX: 0, offsetY: -1.15 });
const transitionDuration = reduced ? 120 : 850;
const openingDuration = .85;
const openingNoteCue = .10 * openingDuration;
let entryView = {...DEFAULT_VIEW}, pointerX=0, pointerY=0, pointerPresent=false, documentOpen=false, returnFocus=null;
let pointerTracking = false;
const touchPointer=matchMedia('(pointer: coarse)').matches;
const idleBehavior=createIdleBehavior({touch: touchPointer});
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const x = clamp(value); return x * x * (3 - 2 * x); };
const mix = (a, b, t) => a + (b - a) * t;
let ready = false, phase = 'loading', progress = 0, transition = null;
let openingElapsed = 0, openProjectsAfterLoading = false;
let raf = 0, previousTime = 0, orbitTime = 0, hoverPaused = false, focused = false, hiddenAt = 0;
let coverNoteTimers = [];
let contactOpening = null;
let contactDispersed = false;
const coverPreview = mountCoverVariants({
  host, cover: coverDetails, links: coverLinks, params: demoParams, onChange: updateCoverFrame, directoryMarkup: directoryLinks,
});
let coverView = coverPreview?.frame(DEFAULT_VIEW) ?? DEFAULT_VIEW;
const tiltButton = document.querySelector('[data-enable-tilt]');
function hideTiltControl() {
  if (!tiltButton) return;
  if (document.activeElement === tiltButton) {
    tiltButton.closest('.cover-menu')?.querySelector('[data-section="more"]')?.focus({preventScroll: true});
  }
  tiltButton.hidden = true;
}
if (tiltButton) {
  setTimeout(() => {
    if (!deviceTilt.active) tiltButton.hidden = false;
  }, 750);
  tiltButton.addEventListener('click', async () => {
    tiltButton.disabled = true;
    tiltButton.textContent = 'Проверяем датчики…';
    const state = await enableTilt();
    if (state === 'active') hideTiltControl();
    else tiltButton.textContent = state === 'blocked' ? 'Доступ к датчикам закрыт' : 'Нет сигнала от датчиков';
    tiltButton.disabled = false;
  });
}

let head, headReady;

const projectPreview = projectLayout ? mountProjectPreview(projectLayer, projectLayout, projects, openDocument) : undefined;
const cards = projectLayout ? [] : projects.map(project => {
  const card = document.createElement('a');
  card.className = 'project';
  card.href = `/${locale}/projects/${project.id}`;
  card.addEventListener('click',event=>{event.preventDefault();openDocument('case-'+project.id);});
  card.dataset.project = project.id;
  card.setAttribute('aria-label', `${project.name}, открыть проект`);
  card.innerHTML = `<span class="project-top"><span class="project-index">${project.index}</span><span class="project-kind">${project.kind}</span></span><span class="project-bottom"><span class="project-name">${project.name}</span><svg class="project-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10"/></svg></span>`;
  orbit.append(card);
  return card;
});

function markPhase(value) {
  phase = value;
  document.body.dataset.phase = phase;
  if (phase !== 'head') {
    stopCoverNotePreview();
    if (head) coverPreview?.clearEffect?.(head);
  }
}

function stopCoverNotePreview() {
  for (const timer of coverNoteTimers) clearTimeout(timer);
  coverNoteTimers = [];
  for (const link of coverLinks) link.classList.remove('is-previewing');
}

function playCoverNotes() {
  if (reduced || documentOpen || document.hidden) return;
  for (const link of coverLinks) {
    const delay = Math.random() * 50;
    coverNoteTimers.push(setTimeout(() => link.classList.add('is-previewing'), delay));
    coverNoteTimers.push(setTimeout(() => link.classList.remove('is-previewing'), delay + 290));
  }
}

function setFigureScatter(amount, mode = 'scatter') {
  head?.setScatter(amount, {region: 'all', mode});
  document.body.dataset.scatter = amount.toFixed(4);
}

function updateCoverFrame() {
  if (!coverPreview) return;
  coverView = coverPreview.frame(DEFAULT_VIEW);
  if (phase === 'returning') entryView = coverView;
  if (head && !transition && progress === 0) {
    head.setView({ ...coverView, immediate: true });
    coverPreview.drawGuides?.(head);
  }
}

function applyTransition() {
  const camera = smooth(progress / .85);
  const scatter = smooth(progress / .38);
  const reveal = smooth((progress - .45) / .35);
  const view = {};
  for (const key of Object.keys(DEFAULT_VIEW)) view[key] = mix(entryView[key], TOP_VIEW[key], camera);
  // The page owns this interpolated timeline, so do not ease the same view twice.
  head?.setView({ ...view, immediate: true });
  setFigureScatter(scatter, transition?.to === 0 ? 'appear' : 'scatter');
  projectLayer.style.setProperty('--reveal', reveal.toFixed(4));
  const interactable = reveal > .9 && !transition;
  projectLayer.classList.toggle('is-active', interactable);
  projectLayer.inert = !interactable;
  projectLayer.setAttribute('aria-hidden', String(reveal <= .01));
  projectPreview?.setActive(interactable && !documentOpen);
  coverDetails.classList.toggle('is-away', progress > .03);
  coverDetails.inert = progress > .03;
  goButton.inert = progress > .01;
  goButton.classList.toggle('is-away', progress > .01);
  backButton.hidden = reveal < .55;
  document.body.dataset.progress = progress.toFixed(4);
  document.body.dataset.pitch = view.pitch.toFixed(4);
  document.body.dataset.projectsVisible = String(reveal > .9);
  document.body.classList.toggle('inside-projects', progress > .8);
}

function positionCards() {
  if (projectLayout || !head) return;
  const {center,radii}=HEAD_ANCHORS.brain;
  const point=(theta,index=0)=>[center[0]+Math.cos(theta)*radii[0]*(index%2?.9:1),center[1]+Math.sin(theta*2+index*.5)*.18,center[2]+Math.sin(theta)*radii[2]];
  // These coordinates exist inside the model's brain volume before GO. Both
  // cards and crown use the same model matrix and orthographic camera.
  const points=projects.map((_,index)=>point(index*Math.PI*2/cards.length+orbitTime*.22,index));
  const projected=head.projectPoints(points);
  const depths=projected.map(p=>p.depth),min=Math.min(...depths),max=Math.max(...depths);
  projected.forEach((p,index)=>{
    const depth=(p.depth-min)/Math.max(.001,max-min),scale=.78+depth*.26;
    cards[index].style.left=`${p.x}px`;cards[index].style.top=`${p.y}px`;
    cards[index].style.transform=`translate(-50%,-50%) scale(${scale})`;
    cards[index].style.zIndex=String(Math.round(depth*100)+1);
    cards[index].style.opacity=String(.55+depth*.45);
  });
  const trace=head.projectPoints(Array.from({length:65},(_,i)=>point(i/64*Math.PI*2+orbitTime*.22)));
  const svg=orbit.querySelector('svg');svg.setAttribute('viewBox',`0 0 ${host.clientWidth} ${host.clientHeight}`);
  svg.querySelector('path').setAttribute('d',trace.map((p,i)=>`${i?'L':'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' '));
  const brain=head.projectPoints([center])[0];
  const marker=orbit.querySelector('.orbit-center');marker.style.left=`${brain.x}px`;marker.style.top=`${brain.y}px`;
  document.body.dataset.orbitPaused = String(hoverPaused || focused || reduced);
}

function requestTick() {
  if (!raf && !document.hidden) raf = requestAnimationFrame(frame);
}

function frame(time) {
  raf = 0;
  if (contactOpening !== null) {
    const scatter = clamp((time - contactOpening) / 360);
    setFigureScatter(smooth(scatter));
    if (scatter < 1) {
      requestTick();
    } else {
      contactOpening = null;
      contactDispersed = true;
      openDocument('contact');
    }
    return;
  }
  let finishFocus = null;
  const dt = previousTime ? Math.min((time - previousTime) / 1000, .04) : 0;
  previousTime = time;
  if (phase === 'assembling' && !documentOpen) {
    const previousOpeningElapsed = openingElapsed;
    openingElapsed = Math.min(openingElapsed + dt, openingDuration);
    const scatter = smooth(1 - openingElapsed / openingDuration);
    setFigureScatter(scatter, 'appear');
    head.setView({
      ...coverView,
      yaw: coverView.yaw - .055 * scatter,
      pitch: coverView.pitch + .036 * scatter,
      offsetY: coverView.offsetY - .055 * scatter,
      immediate: true,
    });
    coverPreview?.drawGuides?.(head);
    if (previousOpeningElapsed < openingNoteCue && openingElapsed >= openingNoteCue && !openProjectsAfterLoading) {
      playCoverNotes();
    }
    if (openingElapsed === openingDuration) finishOpening();
  }
  if((phase==='head'||phase==='assembling')&&!transition&&!documentOpen&&!reduced){
    const attention=coverPreview?.getAttention?.();
    const tilt = deviceTilt.active;
    const input = tilt ? {
      x: deviceTilt.x,
      y: deviceTilt.y,
      present: true,
      tilt: true,
      tracking: Math.hypot(deviceTilt.x, deviceTilt.y) > .16,
    } : {x:pointerX,y:pointerY,present:pointerPresent,tracking:pointerTracking};
    const pointer = attention ? { ...attention, present: true, tracking: true } : input;
    const pose=idleBehavior.update(dt,pointer);
    head.setGaze(pose);
    document.body.dataset.attention=pose.attention;
  }
  if (phase === 'head' && !documentOpen) coverPreview?.updateEffect?.(head, time);
  if (transition) {
    const t = clamp((time - transition.started) / transition.duration);
    progress = mix(transition.from, transition.to, smooth(t));
    if (t === 1) {
      const target = transition.to;
      progress = target; transition = null;
      markPhase(target ? 'projects' : 'head');
      status.textContent = target ? 'Проекты открыты.' : 'Исходный вид головы восстановлен.';
      finishFocus = target ? backButton : goButton;
    }
    applyTransition();
    finishFocus?.focus({ preventScroll: true });
  }
  if (progress > .4 && !hoverPaused && !focused && !reduced) orbitTime += dt;
  if(progress>.01)positionCards();
  if (!documentOpen&&(transition || phase==='assembling' || (phase==='head'&&!reduced) || (phase === 'projects' && !projectLayout && !hoverPaused && !focused && !reduced))) requestTick();
}

function moveTo(target) {
  if (target === 1 && (phase === 'loading' || phase === 'assembling')) {
    openProjectsAfterLoading = true;
    return;
  }
  if (!ready && target === 0 && progress > 0) {
    if (location.hash === '#projects') history.replaceState(null, '', location.pathname + location.search);
    progress = 0;
    transition = null;
    applyTransition();
    markPhase('loading');
    goButton.disabled = true;
    void startHead();
    return;
  }
  if (!ready || (target === progress && !transition)) return;
  if (target === 0 && location.hash === '#projects') history.replaceState(null, '', location.pathname + location.search);
  if(target===1&&progress===0){entryView={...head.getStats().view};head.setGaze();}
  transition = { from: progress, to: target, started: performance.now(), duration: transitionDuration * Math.max(.3, Math.abs(target - progress)) };
  markPhase(target ? 'entering' : 'returning');
  projectLayer.inert = true; projectLayer.classList.remove('is-active');
  status.textContent = target ? 'Камера поднимается над головой. Символы рассеиваются.' : 'Возвращаемся к исходной модели.';
  previousTime = 0; applyTransition(); requestTick();
}

goButton.addEventListener('click', openProjects);
backButton.addEventListener('click', closeProjects);
orbit.addEventListener('pointerenter',()=>{hoverPaused=true;positionCards();});
orbit.addEventListener('pointerleave', event => {
  if (event.relatedTarget?.closest?.('.project')) return;
  hoverPaused = false; previousTime = 0; requestTick();
});
orbit.addEventListener('focusin', () => { focused = true; positionCards(); });
orbit.addEventListener('focusout', event => { if (!orbit.contains(event.relatedTarget)) { focused = false; previousTime = 0; requestTick(); } });
addEventListener('keydown', event => { if(event.key==='Escape'&&documentOpen){event.preventDefault();closeDocument();return;} if (event.key === 'Escape' && progress > 0) { event.preventDefault(); closeProjects(); } });
addEventListener('resize', () => { updateCoverFrame(); positionCards(); requestTick(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { stopCoverNotePreview(); hiddenAt = performance.now(); cancelAnimationFrame(raf); raf = 0; }
  else { if (transition && hiddenAt) transition.started += performance.now() - hiddenAt; previousTime = 0; requestTick(); }
});

function finishOpening() {
  markPhase('head');
  goButton.disabled = false;
  status.textContent = 'Модель готова. GO открывает проекты.';
  if (openProjectsAfterLoading) {
    openProjectsAfterLoading = false;
    moveTo(1);
  }
}

function startHead() {
  headReady ??= Promise.resolve().then(() => {
    head = createAsciiHead(host, {
      modelUrl: new URL('./sculpt/head-study.glb?v=studio-1', import.meta.url).href,
      expressionsUrl: new URL('./sculpt/expressions.json', import.meta.url).href,
      cellSize: touchPointer ? 4.7 : 5.4,
      ink: '#edeee5',
      view: coverView,
      autoRotate: false,
      pointerRotation: false,
      onState(event) {
        document.body.dataset.moduleState = typeof event === 'string' ? event : String(event?.state ?? event?.type ?? 'updated');
      },
    });
    if (!reduced) setFigureScatter(1, 'appear');
    return head.ready.then(() => {
      ready = true;
      document.body.dataset.ready = 'true';
      $('load-note').hidden = true;
      coverPreview?.drawGuides?.(head);
      if (location.hash === '#projects') {
        if (phase !== 'projects') settleProjects();
      } else if (reduced) finishOpening();
      else {
        markPhase('assembling');
        status.textContent = 'Фигура собирается.';
      }
      previousTime = 0;
      requestTick();
      scheduleBlink();
    });
  }).catch(error => {
    markPhase('error');
    $('load-note').textContent = 'Не удалось загрузить модель.';
    status.textContent = 'Ошибка загрузки модели.';
    goButton.disabled = !projectLayout;
    console.error(error);
  });
  return headReady;
}

// Small read-only state plus explicit actions for standalone browser QA.
window.headDemo = {
  go: openProjects, back: closeProjects,
  getState: () => ({ ready, phase, progress, hoverPaused, focused, orbitTime, stats: head?.getStats() }),
};
addEventListener('pagehide', () => { stopCoverNotePreview(); cancelAnimationFrame(raf); projectPreview?.setActive(false); head?.dispose(); }, { once: true });

const dialog=$('document-dialog'),documentContent=$('document-content');
const usePaasLiveObject = demoParams.get('paasStyle') === 'live';
const paasWorkflowStyle = demoParams.get('paasWorkflow');
const paasStackStyle = demoParams.get('paasStack');
const contactStyles = new Set(['cover', 'capsule', 'caption', 'toolbar']);
const requestedContactStyle = demoParams.get('contactStyle');
const contactStyle = contactStyles.has(requestedContactStyle) ? requestedContactStyle : '';
const masthead = document.querySelector('.masthead');
const homeLink = masthead.querySelector('.brand');
homeLink.href = location.pathname + location.search;

function measureHeader() {
  dialog.style.setProperty('--studio-header-edge', `${Math.ceil(masthead.getBoundingClientRect().bottom)}px`);
}

const headerObserver = new ResizeObserver(measureHeader);
headerObserver.observe(masthead);
addEventListener('resize', measureHeader);
const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const paragraph=text=>`<p>${escapeHtml(text)}</p>`;
const contactLink=`<a class="document-cta section-glass" href="${telegramUrl}" target="_blank" rel="noopener">Обсудить задачу в Telegram</a>`;

function sectionPage(title, lead, body, action = contactLink) {
  return `<article class="section-page">
    <header class="section-intro">
      <h1 id="document-title">${escapeHtml(title)}</h1>
      ${lead ? `<p>${escapeHtml(lead)}</p>` : ''}
    </header>
    <div class="section-flow">${body}${action}</div>
  </article>`;
}

let disposeDocumentView;
const caseAnimations = {
  paas: [mountPaasOverview, mountLaunchSequence],
  llmops: [mountLlmopsDemo, mountLlmopsWorkflow],
  operations: [mountOperationsOverview, mountOperationsWorkflow],
  'delivery-platform': [mountDeliveryOverview, mountDeliveryWorkflow],
};

function mountCaseDeck(deck) {
  const tabs = [...deck.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(tab => $(tab.getAttribute('aria-controls')));
  const pages = deck.querySelector('.paas-deck__pages');
  deck.querySelector('.paas-deck__back').addEventListener('click', closeDocument);
  const controllers = [...caseAnimations[deck.dataset.caseDeck], mountStackMap].map(mount => mount(deck, reduced));
  let active = 0;
  controllers[active]?.start();

  function select(index) {
    if (index === active) return;
    const next = panels[index];
    controllers[active]?.stop();
    next.style.setProperty('--paas-entry-offset', index > active ? '24px' : '-24px');
    panels[active].hidden = true;
    next.hidden = false;
    tabs[active].tabIndex = -1;
    tabs[active].setAttribute('aria-selected', 'false');
    tabs[index].tabIndex = 0;
    tabs[index].setAttribute('aria-selected', 'true');
    active = index;
    pages.scrollTop = 0;
    controllers[active]?.start();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      const target = {
        ArrowLeft: (index + tabs.length - 1) % tabs.length,
        ArrowRight: (index + 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];
      if (target === undefined) return;
      event.preventDefault();
      select(target);
      tabs[target].focus({preventScroll: true});
    });
  });
  return () => controllers[active]?.stop();
}

function mountPaasOverview(deck) {
  const scene = deck.querySelector('[data-paas-launch]');
  const canvas = scene.querySelector('.paas-launch__canvas');
  const replay = scene.querySelector('.paas-launch__replay');
  let stopLaunch, stopObject;

  function start() {
    stopLaunch?.();
    stopLaunch = playPaasLaunch(scene, reduced);
    if (!canvas || stopObject) return;
    canvas.hidden = false;
    stopObject = mountPaasLiveObject(canvas, reduced);
    canvas.hidden = !stopObject;
    scene.querySelector('.paas-launch__art').hidden = Boolean(stopObject);
  }

  if (replay) {
    replay.hidden = reduced;
    replay.addEventListener('click', start);
  }
  return {start, stop() {stopLaunch?.(); stopObject?.(); stopObject = null;}};
}

addEventListener('pagehide', () => disposeDocumentView?.(), {once: true});

function caseDeck(id, title, chapters, style = '') {
  return `<article class="section-page paas-case${style}" data-case-deck="${id}">
    <footer class="paas-deck__footer">
      <button type="button" class="paas-deck__back section-glass" aria-label="Назад">
        <svg class="studio-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#studio-arrow-left"/></svg>
      </button>
      <div class="paas-deck__tabs section-glass" role="tablist" aria-label="Экраны кейса ${title}">
        ${chapters.map(({id: part, label}, index) => `<button type="button" role="tab" id="${id}-tab-${part}" aria-controls="${id}-${part}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${label}</button>`).join('')}
      </div>
    </footer>
    <div class="paas-deck__pages">
      ${chapters.map(({id: part, layout, markup}, index) => `<section class="${layout} paas-deck__panel" id="${id}-${part}" role="tabpanel" aria-labelledby="${id}-tab-${part}" tabindex="0" ${index ? 'hidden' : ''}>${markup}</section>`).join('')}
    </div>
  </article>`;
}

function caseMarkup(project) {
  if (project.id === 'llmops') return caseDeck('llmops', 'LLMOps', llmopsCaseContent());
  if (project.id === 'operations') return caseDeck(project.id, 'IaC и мониторинг', operationsCaseContent());
  if (project.id === 'delivery-platform') return caseDeck(project.id, deliveryPlatformTitle, deliveryPlatformCaseContent());
  if (project.id === 'paas') {
    const steps = [
      ['Подключить репозиторий', 'Выбрать проект в GitHub или GitLab.'],
      ['Собрать приложение', 'Платформа определяет стек и устанавливает зависимости.'],
      ['Запустить в облаке', 'Платформа разворачивает сервис и возвращает URL и логи.'],
    ];
    return caseDeck('paas', 'PaaS', [
      {id: 'overview', label: 'Обзор', layout: 'paas-hero', markup: `
        <div class="paas-hero__copy">
          <p class="paas-hero__label">Проекты / PaaS · On-premises</p>
          <h1 id="document-title">Запуск приложений в облаке</h1>
          <div class="paas-hero__result">
            <p class="paas-hero__label">Результат</p>
            <p>Платформа разворачивается в инфраструктуре компании и автоматизирует запуск приложений. Команды разработки быстрее получают ссылку на работающий сервис и доступ к логам.</p>
          </div>
        </div>
        ${paasLaunchMarkup(usePaasLiveObject)}`},
      {id: 'workflow', label: 'Как работает', layout: 'paas-details', markup: `
        ${['sequence', 'trace'].includes(paasWorkflowStyle) ? workflowPreview(paasWorkflowStyle) : `<h2>Как проходит запуск</h2>
        <p>Разработчик нажимает «Запустить». Платформа сама готовит окружение.</p>
        <ol class="case-steps">${steps.map(([title, text]) => `<li><strong>${title}</strong>${paragraph(text)}</li>`).join('')}</ol>`}`},
      {id: 'stack', label: 'Технологии', layout: 'paas-details', markup: stackPreview(paasStackStyle)},
    ], usePaasLiveObject ? ' paas-case--live' : '');
  }

  return null;
}

function documentMarkup(key){
 if(key.startsWith('case-')){
   const project=projects.find(p=>p.id===key.slice(5));
   if(!project)return null;
   return caseMarkup(project);
 }
 let title='',lead='',body='';
 if(key==='services')return offeringsMarkup;
 else if(key==='about')return studioAboutMarkup;
 else if(key==='process')return processMarkup;
 else if(key==='research')return researchMarkup;
 else if(key==='blog')return blogMarkup;
 else if(key==='contact'){return `<article class="contact-view"><h1 id="document-title" class="sr-only">Контакты</h1><div class="contact-layout">
   <div class="contact-qr"><canvas role="img" aria-label="QR для Telegram"></canvas></div>
   <div class="contact-channels"><a class="contact-channel section-glass" href="${telegramUrl}" target="_blank" rel="noopener"><span>Telegram</span><strong>@wr0ngn4m3</strong></a>
   <a class="contact-channel section-glass" href="mailto:wwr0ngn4m3@gmail.com"><span>Почта</span><strong>wwr0ngn4m3@gmail.com</strong></a></div>
 </div></article>`;}
 else if(key==='resume'){title=content.resume.fullName;lead=content.resume.headline;body=paragraph(content.resume.summary)+`<a class="document-cta" href="/${locale}/experience">Полное резюме</a>`;}
 else if(key==='more'){title='Меню';body=`<div class="directory section-glass">${directoryLinks}</div>`;}
 else return null;
 return sectionPage(title, lead, body, key === 'more' ? '' : contactLink);
}
function openDocument(key, fromHistory = false) {
  if (documentOpen && !fromHistory && location.hash === `#${key}`) return;
  const markup = documentMarkup(key);
  if (!markup) return;
  disposeDocumentView?.();
  disposeDocumentView = null;
  if (!documentOpen) returnFocus = document.activeElement;
  dialog.dataset.contactStyle = key === 'contact' ? contactStyle : '';
  documentContent.innerHTML = markup;
  hoverPaused = true;
  documentOpen = true;
  projectPreview?.setActive(false);
  stopCoverNotePreview();
  if (head) coverPreview?.clearEffect?.(head);
  document.body.dataset.documentOpen = '';
  measureHeader();
  dialog.hidden = false;
  document.querySelector('.experience').inert = true;
  dialog.scrollTop = 0;
  documentContent.scrollTop = 0;
  const title = $('document-title');
  title.tabIndex = -1;
  title.focus({preventScroll: true});
  if (key === 'contact') animateContactQr(documentContent.querySelector('canvas'), dialog, reduced);
  const deck = documentContent.querySelector('[data-case-deck]');
  documentContent.querySelector('[data-studio-back]')?.addEventListener('click', closeDocument);
  if (deck) disposeDocumentView = mountCaseDeck(deck);
  else if (key === 'about') disposeDocumentView = mountStudioMark(documentContent.querySelector('.studio-about__mark'), reduced);
  else if (documentContent.firstElementChild.matches('.studio-screen')) {
    const screen = documentContent.firstElementChild;
    const stopScreen = mountStudioScreen(screen, reduced);
    const stopCarousel = key === 'blog' ? mountBlogCarousel(screen, reduced) : null;
    disposeDocumentView = () => { stopScreen(); stopCarousel?.(); };
  }
  if (!fromHistory) history.pushState({wwnPanel: true}, '', `#${key}`);
}
function hideDocument({restoreCover = true} = {}) {
  disposeDocumentView?.();
  disposeDocumentView = null;
  if (contactDispersed) {
    contactDispersed = false;
    if (restoreCover) setFigureScatter(0);
  }
  dialog.hidden = true;
  delete document.body.dataset.documentOpen;
  documentOpen = false;
  projectPreview?.setActive(phase === 'projects');
  document.querySelector('.experience').inert = false;
  hoverPaused = false;
  previousTime = 0;
  if (restoreCover) {
    if (location.hash !== '#projects') void startHead();
    returnFocus?.focus({preventScroll:true});
  }
  requestTick();
}

async function showProjectsFromDocument() {
  const currentSection = documentContent.firstElementChild;
  if (!ready && !projectLayout) {
    await startHead();
    if (!ready) return;
    if (!documentOpen || documentContent.firstElementChild !== currentSection) return;
  }
  settleProjects();
  hideDocument({restoreCover: false});
  history.pushState({wwnPanel: true}, '', '#projects');
  backButton.focus({preventScroll: true});
}

function openProjects() {
  if (location.hash === '#projects') return;
  if (documentOpen) {
    void showProjectsFromDocument();
    return;
  }
  history.pushState({wwnPanel: true}, '', '#projects');
  if (!ready && projectLayout) settleProjects();
  else moveTo(1);
}

function closeProjects() {
  if (history.state?.wwnPanel && location.hash === '#projects') history.back();
  else moveTo(0);
}

function settleProjects() {
  entryView = coverView;
  transition = null;
  progress = 1;
  goButton.disabled = false;
  markPhase('projects');
  applyTransition();
  positionCards();
  status.textContent = 'Проекты открыты.';
}
function closeDocument(){if(history.state?.wwnPanel)history.back();else {hideDocument();history.replaceState(null,'',location.pathname+location.search);}}
$('close-document').addEventListener('click',closeDocument);
homeLink.addEventListener('click', event => {
  if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (location.hash) history.pushState(null, '', homeLink.href);
  if (documentOpen) hideDocument({restoreCover: progress === 0});
  homeLink.focus({preventScroll: true});
  if (progress > 0 || transition) moveTo(0);
});


document.addEventListener('click', event => {
  const section = event.target.closest('[data-section]');
  if (contactOpening !== null) return;
  if (section) {
    if (section.dataset.section === 'contact' && phase === 'head' && !documentOpen && !reduced) {
      stopCoverNotePreview();
      if (head) coverPreview?.clearEffect?.(head);
      contactOpening = performance.now();
      requestTick();
    } else {
      openDocument(section.dataset.section);
    }
  } else if (event.target.closest('[data-open-projects]')) openProjects();
});
function syncLocation() {
  const key = location.hash.slice(1);
  if (key === 'case-resilience') history.replaceState(null, '', '#projects');
  if (location.hash === '#projects') {
    if (documentOpen) hideDocument();
    if ((ready || projectLayout) && phase !== 'projects') settleProjects();
  } else if (key) openDocument(decodeURIComponent(key), true);
  else {
    if (documentOpen) hideDocument();
    if (progress > 0 || transition) moveTo(0);
    else void startHead();
  }
}
addEventListener('popstate', syncLocation);
if (production) {
  // Update the target before the anchor's default action, including keyboard use.
  document.addEventListener('click', event => {
    const languageLink = event.target.closest('.cover-locale');
    if (languageLink) languageLink.href = `/${alternateLocale}${location.hash}`;
  });
}
let blinkTimer;
// The release shell is laid out but hidden until its selected cover and menu are mounted.
document.querySelector('.studio-layout').style.removeProperty('visibility');
if (location.hash) syncLocation();
if (!documentOpen && phase !== 'projects') void startHead();
function scheduleBlink() {
  if (reduced) return;
  blinkTimer = setTimeout(async () => {
    if (ready && phase === 'head' && !documentOpen && !document.hidden) await head.blink().catch(() => {});
    scheduleBlink();
  }, 5000 + Math.random()*3000);
}
addEventListener('pagehide',()=>clearTimeout(blinkTimer),{once:true});

const experience = host.closest('.experience');
experience.addEventListener('pointermove', event => {
  if(event.pointerType==='touch') return;
  const bounds = host.getBoundingClientRect();
  pointerX = mix(-1, 1, clamp((event.clientX-bounds.left)/bounds.width));
  pointerY = mix(-1, 1, clamp((event.clientY-bounds.top)/bounds.height));
  pointerPresent = true;
  pointerTracking = true;
});
experience.addEventListener('pointerleave', () => {
  // Keep the last target when attention returns to the idle behavior.
  pointerTracking = false;
});
