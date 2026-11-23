function samplePath(vertices, spacing = .074) {
  return vertices.slice(1).flatMap(([endX, endY], index) => {
    const [x, y] = vertices[index];
    const dx = endX - x, dy = endY - y;
    const count = Math.ceil(Math.hypot(dx, dy) / spacing);
    return Array.from({length: count}, (_, i) => [x + dx * i / count, y + dy * i / count]);
  });
}

function syncArc(start) {
  return Array.from({length: 22}, (_, index) => {
    const angle = start + index * .125;
    return [.51 * Math.cos(angle), .51 * Math.sin(angle)];
  });
}

const upperArc = syncArc(-3);
const lowerArc = syncArc(.14);
const icons = [
  [
    samplePath([[-.31, -.37], [-.62, 0], [-.31, .37]]),
    samplePath([[.17, -.46], [-.17, .46]]),
    samplePath([[.31, -.37], [.62, 0], [.31, .37]]),
  ],
  [
    upperArc,
    lowerArc,
    samplePath([[.23, -.13], upperArc.at(-1), [.57, -.47]]),
    samplePath([[-.23, .13], lowerArc.at(-1), [-.57, .47]]),
  ],
  [
    ...[[-.48, .13], [-.12, -.18], [.24, -.44]].map(([x, y]) =>
      samplePath([[x, .42], [x, y], [x + .22, y], [x + .22, .42]])),
    samplePath([[-.62, .42], [.61, .42]]),
  ],
];
const glyphs = ['+', 'x', ':', '+'];

export function mountOperationsScene(canvas, reducedMotion, readStep) {
  const context = canvas.getContext('2d');
  if (!context) return () => {};
  const touch = matchMedia('(pointer: coarse)').matches;
  const started = performance.now();
  let frame = 0, width, height, last = -Infinity;

  function schedule() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(now) {
    frame = 0;
    if (document.hidden || !width || !height) return;
    if (!reducedMotion && now - last < 32) {
      schedule();
      return;
    }
    last = now;

    const elapsed = reducedMotion ? 0 : now - started;
    const scale = Math.min(width / 5.65, height / 1.95);
    const angle = -.30 + Math.sin(elapsed / 1450) * .065;
    const sin = Math.sin(angle), cos = Math.cos(angle);
    const progress = elapsed % 3100 / 3100 * 3.05 - .35;
    const active = readStep?.();
    const routeY = height * .79;

    context.clearRect(0, 0, width, height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `${touch ? 700 : 600} ${Math.max(5, Math.min(11, scale * .126))}px ui-monospace, monospace`;
    context.fillStyle = '#edeee5';

    for (let segment = 0; segment < icons.length - 1; segment++) {
      const from = width * (segment + .5) / icons.length;
      const to = from + width / icons.length;
      const spacing = Math.max(5, scale * .115);
      const count = Math.round((to - from) / spacing);
      for (let i = 1; i < count; i++) {
        const t = i / count;
        const signal = reducedMotion ? 0 : Math.max(0, 1 - Math.abs(segment + t - progress) * 7);
        context.globalAlpha = .46 + signal * .53;
        context.fillText(signal > .35 ? '+' : '·', from + (to - from) * t, routeY);
      }
    }

    icons.forEach((paths, index) => {
      const centerX = width * (index + .5) / icons.length;
      const centerY = height * .40;
      const selected = active === undefined || active === index;
      const signal = reducedMotion ? 0 : Math.max(0, 1 - Math.abs(index - progress) * 3);
      const strength = selected ? .83 : .43;

      for (const depth of [-.25, -.12, 0]) {
        const front = depth === 0;
        paths.forEach(path => {
          path.forEach(([x, y], i) => {
            const viewX = x * cos - depth * sin;
            const viewDepth = x * sin + depth * cos;
            context.globalAlpha = front ? Math.min(1, strength + signal * .16) : strength * (depth === -.25 ? .30 : .44) * (touch ? 1.28 : 1);
            context.fillText(front ? glyphs[i % glyphs.length] : '·', centerX + viewX * scale, centerY + (y + viewDepth * .43) * scale);
          });
        });
      }

      context.globalAlpha = Math.min(1, strength * (touch ? 1.28 : 1));
      context.fillText('o', centerX, routeY);
    });

    context.globalAlpha = 1;
    if (!reducedMotion) schedule();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    schedule();
  }

  function onVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else schedule();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  document.addEventListener('visibilitychange', onVisibility);
  resize();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
