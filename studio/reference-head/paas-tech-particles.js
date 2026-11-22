const glyphs = ['·', ':', '+', 'x', 'o', '*', '#'];
const duration = 590;

function sampleWord(context, label, width, height) {
  context.canvas.width = width;
  context.canvas.height = height;
  context.font = '800 100px Arial, sans-serif';
  const widthLimit = width * .94 * 100 / context.measureText(label).width;
  const fontSize = Math.min(widthLimit, height * .97, 178);
  context.font = `800 ${fontSize}px Arial, sans-serif`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(label, width / 2, height * .515);

  const {data} = context.getImageData(0, 0, width, height);
  const step = Math.max(4, Math.round(fontSize / 20));
  const points = [];
  for (let y = step; y < height; y += step) {
    for (let x = step; x < width; x += step) {
      if (data[(y * width + x) * 4 + 3] > 120) points.push({x,y});
    }
  }
  return {points, step};
}

export function mountTechParticles(map, reducedMotion, initialIndex, labels) {
  const visual = map.querySelector('.paas-tech-visual');
  const canvas = map.querySelector('canvas');
  const context = canvas.getContext('2d');
  const stencil = document.createElement('canvas').getContext('2d', {willReadFrequently: true});
  if (!context || !stencil) return {select() {}, stop() {}};
  let index = initialIndex;
  let width = 0, height = 0, wordWidth = 0, wordHeight = 0, frame, started, step;
  let centerX = 0, centerY = 0;
  let from = [], target = [], current = [];

  function draw(progress) {
    const eased = 1 - (1 - progress) ** 3;
    const burst = Math.sin(progress * Math.PI);
    context.clearRect(0, 0, width, height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `600 ${step * 1.12}px ui-monospace, monospace`;
    context.fillStyle = '#edeee5';
    const radiusX = width / 2 - step;
    const radiusY = Math.min(centerY, height - centerY, wordHeight * 1.32) - step;
    current = Array.from({length: Math.max(from.length, target.length)}, (_, i) => {
      const source = from[i] ?? {x: centerX, y: centerY, alpha: 0};
      const destination = target[i] ?? {x: centerX, y: centerY, alpha: 0};
      const noise = Math.sin(i * 91.73);
      const x = source.x + (destination.x - source.x) * eased + noise * wordWidth * .19 * burst;
      const y = source.y + (destination.y - source.y) * eased + Math.sin(i * 673) * wordHeight * .43 * burst;
      const alpha = source.alpha + (destination.alpha - source.alpha) * eased;
      const distance = Math.hypot((x - centerX) / Math.max(1, radiusX), (y - centerY) / Math.max(1, radiusY));
      const fade = Math.max(0, Math.min(1, (1 - distance) / (.18 + Math.abs(noise) * .11)));
      const visibility = 1 - Math.min(1, burst * 4) * (1 - fade * fade * (3 - 2 * fade));
      context.globalAlpha = alpha * (.76 + Math.abs(noise) * .24) * visibility;
      if (context.globalAlpha > .01) context.fillText(glyphs[(i + Math.floor(burst * 5)) % glyphs.length], x, y);
      return {x, y, alpha};
    });
    context.globalAlpha = 1;
  }

  function drawFrame(time) {
    const progress = Math.min(1, (time - started) / duration);
    draw(progress);
    if (progress < 1) frame = requestAnimationFrame(drawFrame);
    else current = target;
  }

  function select(next, animate = true) {
    index = next;
    if (!wordWidth || !wordHeight) return;
    cancelAnimationFrame(frame);
    const sampled = sampleWord(stencil, labels[index], wordWidth, wordHeight);
    step = sampled.step;
    from = current;
    target = sampled.points.map(({x, y}) => ({
      x: x + centerX - wordWidth / 2,
      y: y + centerY - wordHeight / 2,
      alpha: 1,
    }));
    if (reducedMotion || !animate) {
      draw(1);
      current = target;
      return;
    }
    started = performance.now();
    frame = requestAnimationFrame(drawFrame);
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    wordWidth = Math.min(600, visual.clientWidth);
    wordHeight = visual.clientHeight;
    const anchor = visual.getBoundingClientRect();
    const field = canvas.getBoundingClientRect();
    centerX = anchor.left - field.left + anchor.width / 2;
    centerY = anchor.top - field.top + anchor.height / 2;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    from = [];
    current = [];
    select(index, false);
  }

  const observer = new ResizeObserver(resize);
  observer.observe(visual);
  observer.observe(canvas);
  resize();
  return {select, stop() {observer.disconnect(); cancelAnimationFrame(frame);}};
}
