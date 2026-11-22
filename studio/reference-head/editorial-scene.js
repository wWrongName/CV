import {habrMask, devBadgePath} from './platform-marks.js';

const points = [];
for (let page = 0; page < 3; page++) {
  for (let row = 0; row < 32; row++) {
    for (let col = 0; col < 24; col++) {
      if (row < 6 && col > 17 + row) continue;
      const edge = row === 0 || row === 31 || col === 0 || col === Math.min(23, 17 + row);
      const ink = page === 0 && col > 2 && col < 21 && row > 7 && row < 27 &&
        row % 3 === 0 && (row < 15 || col < 19 - row % 5);
      const crease = page === 0 && row === 6 && col >= 17;
      if (edge || ink || crease) points.push({page, row, col, edge, ink});
    }
  }
}

function platformSamples(platform) {
  if (platform === 'Хабр') {
    return habrMask.flatMap((row, y) => Array.from(row, (value, x) =>
      value === '.' ? null : {x: x - 25.5, y: y - 25.5, alpha: Number(value) / 4}
    ).filter(Boolean));
  }
  const stencil = document.createElement('canvas');
  stencil.width = 52;
  stencil.height = 52;
  const context = stencil.getContext('2d');
  context.setTransform(2, 0, 0, 2, 2, 2);
  context.fill(new Path2D(devBadgePath), 'evenodd');
  const {data} = context.getImageData(0, 0, 52, 52);
  const cells = [];
  for (let y = 0; y < 52; y++) {
    for (let x = 0; x < 52; x++) {
      const alpha = data[(y * 52 + x) * 4 + 3] / 255;
      if (alpha > .27) cells.push({x: x - 25.5, y: y - 25.5, alpha});
    }
  }
  return cells;
}

export function mountEditorialScene(canvas, reducedMotion, readIndex, readVersions) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const start = performance.now();
  let previous = -Infinity, width = 0, height = 0, frame = 0;
  let turn = readIndex();
  const platforms = new Map();

  function schedule() {
    if (!frame && width && height && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(time) {
    frame = 0;
    const elapsed = time - previous;
    if (!reducedMotion && elapsed < 32) {schedule(); return;}
    previous = time;
    const seconds = reducedMotion ? 0 : (time - start) / 1000;
    turn += (readIndex() - turn) * (1 - Math.exp(-Math.min(90, elapsed) / 180));
    const tilt = .38 + Math.sin(seconds * .75) * .08 + Math.sin(turn * 1.9) * .14;
    const scale = Math.min(width, height) * .295;
    const sweep = (seconds * 9) % 42 - 6;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#edeee5';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const versions = readVersions();
    if (versions) {
      const spacing = Math.min(width / 59, height / (versions.length === 1 ? 61 : 93));
      ctx.font = `700 ${spacing * 1.53}px ui-monospace, monospace`;
      versions.forEach(({platform}, index) => {
        if (!platforms.has(platform)) {
          platforms.set(platform, platformSamples(platform));
        }
        const center = (index - (versions.length - 1) / 2) * 44;
        const lift = reducedMotion ? 0 : Math.sin(seconds * 1.1 + index * 1.8) * .8;
        for (const {x, y, alpha} of platforms.get(platform)) {
          ctx.globalAlpha = .46 + alpha * .48;
          ctx.fillText(alpha > .55 ? '+' : '·', width / 2 + x * spacing,
            height / 2 + (center + lift + y) * spacing);
        }
      });
      ctx.globalAlpha = 1;
      if (!reducedMotion) schedule();
      return;
    }

    ctx.font = `600 ${Math.max(5, scale * .1)}px ui-monospace, monospace`;
    for (const {page, row, col, edge, ink} of points) {
      const x = (col - 11.5) / 11 + page * .18;
      const y = (row - 15.5) / 13 - page * .18;
      const z = page * .32;
      const fold = Math.max(0, col - 17) * Math.max(0, 6 - row) * .009;
      const depth = Math.sin(tilt) * x + Math.sin(.34) * y + z - fold;
      const perspective = 1 / (1 + depth * .25);
      const px = Math.cos(tilt) * x - .36 * y;
      const py = .24 * x + Math.cos(.34) * y - z * .23;
      const signal = reducedMotion ? 0 : Math.max(0, 1 - Math.abs(row - sweep) / 5);
      ctx.globalAlpha = Math.min(1, (page === 0 ? edge ? .76 : .48 : .35) + signal * .24);
      ctx.fillText(ink ? (col % 4 === 0 ? 'x' : '·') : (edge ? '+' : ':'), width / 2 + px * scale * perspective,
        height / 2 + (py * perspective + .08) * scale);
    }
    ctx.globalAlpha = 1;
    if (!reducedMotion) schedule();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    schedule();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  document.addEventListener('visibilitychange', schedule);
  resize();
  return {
    stop() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', schedule);
    },
  };
}
