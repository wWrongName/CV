const svg = 'http://www.w3.org/2000/svg';

function svgNode(name, attributes = {}) {
  const element = document.createElementNS(svg, name);
  for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
  return element;
}

export function mountGuideSignal({ host, links, connectors, points }) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let signal = null;

  links.forEach((link, index) => {
    const start = () => {
      if (reduced.matches || document.body.dataset.phase !== 'head') return;
      if (signal?.index === index) return;
      signal?.connector.classList.remove('is-signaling');
      const connector = connectors[index].group;
      connector.classList.add('is-signaling');
      signal = { index, connector, time: performance.now(), point: null, seed: Math.random() };
    };
    link.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') start();
    });
    link.addEventListener('focus', () => { if (link.matches(':focus-visible')) start(); });
  });

  function clear(head) {
    if (!signal) return;
    signal.connector.classList.remove('is-signaling');
    signal = null;
    head.setGlyphGlitch();
  }

  function update(head, time) {
    if (!signal) return;
    const age = time - signal.time;
    if (age >= 575 || reduced.matches) { clear(head); return; }
    if (age < 320) { head.setGlyphGlitch(); return; }
    signal.point ??= connectors[signal.index].point ?? head.projectPoints([points[signal.index]])[0];
    const elapsed = (age - 320) / 255;
    const strength = .83 * Math.sin(Math.PI * elapsed);
    head.setGlyphGlitch({
      x: signal.point.x / host.clientWidth,
      y: 1 - signal.point.y / host.clientHeight,
      strength, seed: signal.seed + Math.floor(age / 40) * .11,
    });
  }

  return { update, clear };
}

export function mountCoverDirectory(menu, markup) {
  const button = menu.querySelector('[data-section="more"]');
  const directory = document.createElement('div');
  directory.id = 'cover-directory';
  directory.className = 'cover-directory';
  directory.hidden = true;
  directory.innerHTML = markup;
  menu.append(directory);
  button.setAttribute('aria-controls', directory.id);
  button.setAttribute('aria-expanded', 'false');

  function setOpen(open) {
    directory.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  }

  button.addEventListener('click', event => {
    event.stopPropagation();
    const open = directory.hidden;
    setOpen(open);
    if (open && event.detail === 0) directory.querySelector('button, a').focus();
  });
  directory.addEventListener('click', event => {
    if (event.target.closest('[data-enable-tilt]') || !event.target.closest('button, a')) return;
    setOpen(false);
    button.focus({ preventScroll: true });
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !menu.contains(event.relatedTarget)) setOpen(false);
  });
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || directory.hidden) return;
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);
    button.focus({ preventScroll: true });
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) setOpen(false);
  });
  return () => setOpen(false);
}

function lensMap(width, height, radius) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) return null;
  const pixels = context.createImageData(width, height);
  const halfWidth = Math.max(0, width / 2 - radius);
  const halfHeight = height / 2 - radius;
  const bevel = radius / 2;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x + .5 - width / 2;
      const dy = y + .5 - height / 2;
      const rx = Math.sign(dx) * Math.max(0, Math.abs(dx) - halfWidth);
      const ry = Math.sign(dy) * Math.max(0, Math.abs(dy) - halfHeight);
      const distance = Math.hypot(rx, ry);
      const depth = radius - distance;
      const rim = depth < 0 ? 0 : Math.max(0, 1 - depth / bevel) ** 1.8;
      const offset = (y * width + x) * 4;
      pixels.data[offset] = 128 - rim * rx / Math.max(1, distance) * 123;
      pixels.data[offset + 1] = 128 - rim * ry / Math.max(1, distance) * 123;
      pixels.data[offset + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);
  return canvas.toDataURL();
}

export function mountCoverLenses(layout) {
  if (!/Chrom(?:e|ium)\//.test(navigator.userAgent) ||
      matchMedia('(pointer: coarse), (prefers-reduced-transparency: reduce)').matches) return;
  const definitions = svgNode('svg', { width: 0, height: 0, 'aria-hidden': 'true' });
  const defs = svgNode('defs');
  definitions.classList.add('cover-lens-definitions');
  definitions.append(defs);
  layout.prepend(definitions);

  const surfaces = [...layout.querySelectorAll('.cover-topbar-group, .cover-menu > [data-section="more"], #go, .cover-directory')];
  const filters = new Map(surfaces.map((surface, index) => {
    const filter = svgNode('filter', { id: `cover-glass-${index}`, filterUnits: 'userSpaceOnUse', 'color-interpolation-filters': 'sRGB' });
    defs.append(filter);
    return [surface, filter];
  }));
  const resize = new ResizeObserver(entries => {
    for (const { target } of entries) {
      const filter = filters.get(target);
      const width = target.offsetWidth;
      const height = target.offsetHeight;
      if (!width || !height || (filter.getAttribute('width') === String(width) && filter.getAttribute('height') === String(height))) continue;
      // The directory has rounded corners, while the buttons are capsules.
      const directory = target.classList.contains('cover-directory');
      const map = lensMap(width, height, directory ? 22 : height / 2);
      if (!map) continue;
      for (const [key, value] of Object.entries({ x: 0, y: 0, width, height })) filter.setAttribute(key, value);
      filter.replaceChildren(
        svgNode('feImage', { href: map, width, height, result: 'rim', preserveAspectRatio: 'none' }),
        svgNode('feDisplacementMap', {
          in: 'SourceGraphic', in2: 'rim', scale: directory ? 10 : height * .23, xChannelSelector: 'R', yChannelSelector: 'G', result: 'lens',
        }),
        svgNode('feGaussianBlur', { in: 'lens', stdDeviation: .55 }),
      );
      target.style.setProperty('--cover-glass-lens', `url(#${filter.id})`);
    }
  });
  surfaces.forEach(surface => resize.observe(surface));
  addEventListener('pagehide', () => resize.disconnect(), { once: true });
}
