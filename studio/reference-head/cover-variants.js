import { mountCoverDirectory, mountCoverLenses, mountGuideSignal } from './cover-effects.js';
import { createBrandMark } from './cover-brand.js';

const dock = { id: 'dock', title: 'Нижняя панель', offset: 0, scale: .86 };
const variants = [
  { id: 'editorial', title: 'Журнал', offset: .16, scale: .79 },
  { id: 'schematic', title: 'Схема', offset: 0, scale: .80 },
  dock,
  { id: 'focus', title: 'Фокус', offset: .15, scale: .83 },
];

const guidePoints = [
  [-.45, 1.26, 1.16],
  [.46, -2.7, 1.22],
  [1.05, 1.62, -.35],
];
const svgNamespace = 'http://www.w3.org/2000/svg';
const mobile = () => matchMedia('(max-width: 600px)').matches;
const topbarVariants = new Map([
  ['glass-pill', { panel: 'glass-pill', layout: 'dock' }],
  ['glass-rail', { panel: 'glass-rail', layout: 'dock' }],
  ['glass-split', { panel: 'glass-split', layout: 'dock' }],
  ['glass-split-schematic', { panel: 'glass-split', layout: 'schematic' }],
]);
const brandPositions = new Set([
  'stacked', 'right', 'top-left', 'top-stack', 'top-right', 'top-center', 'top-split',
]);
const brandFonts = new Set(['helvetica', 'avenir', 'condensed', 'menlo', 'baskerville', 'site']);
const coverMarks = new Set(['stack', 'three-lines', 'outline', 'vertical', 'studio', 'split']);
const effects = new Set(['signal', 'glass', 'directory']);
const edgePreviews = new Map([
  ['editorial', { left: ['Независимая инженерная', 'студия'], right: ['Разработка / DevOps'] }],
  ['portrait', { left: ['Интерактивный ASCII-портрет'], right: ['Двигайте курсор', 'Портрет следует за ним'] }],
  ['corners', { corners: true }],
  ['details', { corners: true, left: ['Независимая инженерная студия'], footer: 'Реквизиты' }],
]);

function mountEdgePreview(cover, style, preview) {
  const frame = document.createElement('div');
  frame.className = 'cover-edge-preview';
  frame.dataset.edgeStyle = style;
  if (preview.corners) {
    for (const corner of ['top-left', 'top-right', 'bottom-left', 'bottom-right']) {
      const marker = document.createElement('i');
      marker.className = 'cover-edge-corner';
      marker.dataset.corner = corner;
      marker.setAttribute('aria-hidden', 'true');
      frame.append(marker);
    }
  }
  for (const [side, lines] of [['left', preview.left], ['right', preview.right], ['footer', preview.footer && [preview.footer]]]) {
    if (!lines) continue;
    const label = document.createElement('p');
    label.className = `cover-edge-label cover-edge-label--${side}`;
    for (const line of lines) {
      const text = document.createElement('span');
      text.textContent = line;
      label.append(text);
    }
    frame.append(label);
  }
  cover.prepend(frame);
}

function frameCover(base, host, variant) {
  const aspect = host.clientWidth / Math.max(1, host.clientHeight);
  if (mobile()) {
    const scale = base.scale * Math.min(1, (aspect || .47) / .47);
    return { ...base, scale, offsetY: -.36 };
  }
  return {
    ...base,
    scale: variant.scale,
    offsetX: 5.6 * aspect * variant.offset,
    offsetY: variant.id === 'schematic' ? .035 : base.offsetY,
  };
}

export function mountCoverVariants({ host, cover, links, onChange, directoryMarkup, params = new URL(location.href).searchParams }) {
  const name = params.get('cover');
  const topbar = topbarVariants.get(name);
  let variant = variants.find(item => item.id === (topbar?.layout ?? name));
  if (!variant) return null;

  const experience = host.closest('.experience');
  const layout = experience.parentElement;
  const masthead = layout.querySelector('.masthead');
  const selectedEffect = params.get('effect');
  const activeEffects = name === 'glass-split-schematic' ? (
    selectedEffect === 'all' ? [...effects] : effects.has(selectedEffect) ? [selectedEffect] : []
  ) : [];
  const hasSignal = activeEffects.includes('signal');
  let closeDirectory;
  let controls = [];
  if (topbar) {
    document.body.dataset.coverVariant = variant.id;
    document.body.dataset.coverTopbar = topbar.panel;
    cover.querySelector('.cover-brand-suffix').hidden = false;
    if (variant.id === 'schematic') {
      const brand = params.get('brand');
      document.body.dataset.coverBrand = brandPositions.has(brand) ? brand : 'inline';
      const font = params.get('font');
      if (brandFonts.has(font)) document.body.dataset.coverBrandFont = font;
      if (brand === 'top-left' && font === 'condensed') {
        masthead.classList.add('masthead--aligned-brand');
        masthead.querySelector('.cover-menu').before(cover.querySelector('.cover-credit'));
        const mark = params.get('mark');
        if (selectedEffect === 'all' && coverMarks.has(mark)) document.body.dataset.coverMark = mark;
        const edge = params.get('edge');
        if (selectedEffect === 'all' && edgePreviews.has(edge)) mountEdgePreview(cover, edge, edgePreviews.get(edge));
        if (selectedEffect === 'all' && mark === 'vertical' && !edgePreviews.has(edge)) {
          const logo = masthead.querySelector('.brand');
          logo.href = location.pathname + location.search;
          const requestedLogo = params.get('logo') ?? 'menu-sign';
          const inMenu = requestedLogo === 'menu-sign';
          const markCanvas = createBrandMark(inMenu ? 'link-classic' : requestedLogo, getComputedStyle(logo).color, 2, logo);
          if (inMenu && markCanvas) logo.classList.add('brand--in-menu');
          if (markCanvas) logo.append(markCanvas);
        }
      }
    }
    if (topbar.panel === 'glass-split') {
      const menu = masthead.querySelector('.cover-menu');
      const group = document.createElement('div');
      group.className = 'cover-topbar-group';
      const integratedLogo = masthead.querySelector('.brand--in-menu');
      if (integratedLogo) group.append(integratedLogo);
      group.append(...menu.querySelectorAll('button:not([data-section="more"])'));
      menu.prepend(group);
      if (activeEffects.includes('directory')) closeDirectory = mountCoverDirectory(menu, directoryMarkup);
    }
    if (activeEffects.length) document.body.dataset.coverEffect = activeEffects.join(' ');
    if (activeEffects.includes('glass')) mountCoverLenses(layout);
    if (variant === dock) return { frame: base => frameCover(base, host, dock) };
  } else {
    const toolbar = document.createElement('nav');
    toolbar.className = 'cover-variant-toolbar';
    toolbar.setAttribute('aria-label', 'Варианты обложки');
    masthead.after(toolbar);

    controls = variants.map(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = item.title;
      button.addEventListener('click', () => {
        if (variant === item) return;
        variant = item;
        const nextUrl = new URL(location.href);
        nextUrl.searchParams.set('cover', item.id);
        history.replaceState(history.state, '', nextUrl);
        updateSelection();
        onChange();
      });
      toolbar.append(button);
      return button;
    });
  }

  const guides = document.createElementNS(svgNamespace, 'svg');
  guides.classList.add('cover-variant-guides');
  guides.setAttribute('aria-hidden', 'true');
  const connectors = guidePoints.map(() => {
    const group = document.createElementNS(svgNamespace, 'g');
    const line = document.createElementNS(svgNamespace, 'path');
    const marker = document.createElementNS(svgNamespace, 'rect');
    marker.setAttribute('width', 6);
    marker.setAttribute('height', 6);
    group.append(line, marker);
    let pulse;
    if (hasSignal) {
      pulse = document.createElementNS(svgNamespace, 'path');
      pulse.setAttribute('pathLength', '100');
      pulse.classList.add('cover-guide-pulse');
      group.append(pulse);
    }
    guides.append(group);
    return { group, line, marker, pulse };
  });
  cover.prepend(guides);
  const signal = hasSignal ? mountGuideSignal({ host, links, connectors, points: guidePoints }) : null;

  const caption = document.createElement('p');
  caption.className = 'cover-variant-caption';
  caption.setAttribute('aria-hidden', 'true');
  links[0].parentElement.after(caption);
  let hoveredLink = null;
  let focusedLink = null;
  let activeIndex = 0;

  function updateHighlight() {
    activeIndex = links.indexOf(hoveredLink || focusedLink || links[0]);
    links.forEach((link, index) => link.classList.toggle('is-cover-highlighted', index === activeIndex));
    caption.textContent = links[activeIndex].querySelector('small').textContent;
  }

  links.forEach(link => {
    link.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      hoveredLink = link;
      updateHighlight();
    });
    link.addEventListener('pointerleave', () => {
      if (hoveredLink !== link) return;
      hoveredLink = null;
      updateHighlight();
    });
    link.addEventListener('focus', () => { focusedLink = link; updateHighlight(); });
    link.addEventListener('blur', () => { focusedLink = null; updateHighlight(); });
  });

  function updateSelection() {
    document.body.dataset.coverVariant = variant.id;
    controls.forEach((button, index) => button.setAttribute('aria-pressed', String(variants[index] === variant)));
  }
  updateSelection();
  updateHighlight();

  return {
    updateEffect: signal?.update,
    clearEffect(head) {
      signal?.clear(head);
      closeDirectory?.();
    },
    frame(base) {
      return frameCover(base, host, variant);
    },
    getAttention() {
      if (variant.id !== 'focus' || !(hoveredLink || focusedLink)) return null;
      return { x: -.94, y: -.34 + activeIndex * .29 };
    },
    drawGuides(head) {
      if (variant.id !== 'schematic') return;
      const bounds = host.getBoundingClientRect();
      guides.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
      const onMobile = mobile();
      const margin = onMobile ? 7 : 12;
      const leaderLength = onMobile ? 18 : 30;
      const projected = head.projectPoints(guidePoints);
      connectors.forEach((connector, index) => {
        const { line, marker, pulse } = connector;
        const point = projected[index];
        const label = links[index].querySelector('.cover-link-copy').getBoundingClientRect();
        const toLeft = label.left + label.width / 2 < bounds.left + bounds.width / 2;
        const endX = (toLeft ? label.right + margin : label.left - margin) - bounds.left;
        const endY = label.top + label.height / 2 - bounds.top;
        const anchorX = index === 1 && !toLeft ? bounds.width - point.x : point.x;
        const startX = toLeft ? Math.max(endX + leaderLength, anchorX) : Math.min(endX - leaderLength, anchorX);
        const cornerA = startX + (endX - startX) * .35;
        const cornerB = startX + (endX - startX) * .65;
        const path = `M${startX} ${point.y} H${cornerA} L${cornerB} ${endY} H${endX}`;
        line.setAttribute('d', path);
        pulse?.setAttribute('d', path);
        marker.setAttribute('x', startX - 3);
        marker.setAttribute('y', point.y - 3);
        connector.point = { x: startX, y: point.y };
      });
    },
  };
}
