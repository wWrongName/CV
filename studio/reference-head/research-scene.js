const glyphs = ['·', ':', '+', 'x', '#'];
const samples = Array.from({length: 29 * 19}, (_, index) => {
  const u = (index % 29 - 14) / 14;
  const v = (Math.floor(index / 29) - 9) / 9;
  return {u, v, grain: ((index * 71) % 31) / 31};
});

// An illustration of comparing two passes, with no measured data in the model.
export function mountResearchScene(canvas, reducedMotion, readStep) {
  const context = canvas.getContext('2d');
  if (!context) return;

  let width = 0, height = 0, frame = 0;
  let previous = -Infinity;
  let stage = readStep();
  const start = performance.now();

  function schedule() {
    if (!frame && width && height && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(now) {
    frame = 0;
    const delta = now - previous;
    if (delta < 32 && !reducedMotion) {
      schedule();
      return;
    }
    previous = now;
    stage += (readStep() - stage) * (1 - Math.exp(-Math.min(80, delta) / 150));
    const time = reducedMotion ? 0 : (now - start) / 1000;
    const yaw = -.51 + Math.sin(time * .68) * .09;
    const pitch = .62 + Math.sin(time * .53) * .06;
    const scale = Math.min(width / 3.12, height / 2.3);
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    const sweep = Math.sin(time * 1.55);
    const gap = .48 + .34 * Math.max(0, 1 - Math.abs(1 - stage));

    context.clearRect(0, 0, width, height);
    context.fillStyle = '#edeee5';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `600 ${Math.max(4.5, scale * .097)}px ui-monospace, monospace`;

    for (const layer of [0, 1]) {
      for (const {u, v, grain} of samples) {
        const edge = Math.max(Math.abs(u), Math.abs(v));
        const ridge = Math.cos(4 * u - 2 * v + layer * (.8 + stage * .3));
        const wave = .22 * ridge * Math.sin(3 * v + time * .52) * (1 - edge ** 4);
        const y = wave + (layer - .5) * gap;
        const x = 1.28 * u, z = .79 * v;
        const depth = x * sy + z * cy;
        const signal = Math.max(0, 1 - Math.abs(u - sweep) * 8) * Math.min(1, stage);
        const glyph = edge === 1 ? 2 : Math.floor(1.9 + ridge * 1.2 + grain * .85);
        context.globalAlpha = Math.min(1, .21 + layer * .18 + (ridge + 1) * .14 + signal * .36);
        context.fillText(glyphs[signal > .58 ? 4 : glyph],
          width * .5 + (x * cy - z * sy) * scale,
          height * .5 - (y * cp - depth * sp) * scale);
      }
    }
    context.globalAlpha = 1;
    if (!reducedMotion) schedule();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    schedule();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  document.addEventListener('visibilitychange', schedule);
  resize();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    document.removeEventListener('visibilitychange', schedule);
  };
}
