const glyphs = ['·', ':', '+', 'x', '#'];

const faces = [
  {normal: [0, 0, 1], point: (u, v) => [u, v, 1], light: .72},
  {normal: [1, 0, 0], point: (u, v) => [1, v, -u], light: .46},
  {normal: [0, 1, 0], point: (u, v) => [u, 1, -v], light: .94},
];

const model = faces.map(face => ({
  ...face,
  points: Array.from({length: 18 * 18}, (_, i) => {
    const row = Math.floor(i / 18), col = i % 18;
    const u = (col + .5) / 9 - 1, v = (row + .5) / 9 - 1;
    return {
      position: face.point(u, v),
      grain: (col * 7 + row * 13) % 11,
      scaffold: row % 6 === 0 || col % 6 === 0,
      rim: Math.max(Math.abs(u), Math.abs(v)) > .83,
    };
  }),
}));

export function mountStudioProcessScene(canvas, reducedMotion, readStep) {
  const context = canvas.getContext('2d');
  if (!context) return;
  const started = performance.now();
  let frame = 0, width = 0, height = 0, previous = -Infinity;
  let assembly = readStep();

  function schedule() {
    if (!frame && width && height && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(now) {
    frame = 0;
    const delta = now - previous;
    if (!reducedMotion && delta < 33) {
      schedule();
      return;
    }
    previous = now;
    const time = reducedMotion ? 0 : now - started;
    assembly += (readStep() - assembly) * (reducedMotion ? 1 : 1 - Math.exp(-Math.min(90, delta) / 310));
    const yaw = .54 + Math.sin(time / 2060) * .095;
    const pitch = .34 + Math.sin(time / 2450) * .048;
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const scale = Math.min(width / 3.65, height / 3.25);
    const cell = Math.max(4, scale * .10);

    function dot(x, y, z, glyph, alpha) {
      const depth = x * sy + z * cy;
      context.globalAlpha = alpha;
      context.fillText(glyph, width * .5 + (x * cy - z * sy) * scale,
        height * .5 - (y * cp - depth * sp) * scale);
    }

    context.clearRect(0, 0, width, height);
    context.font = `600 ${cell}px ui-monospace, monospace`;
    context.fillStyle = '#edeee5';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    for (const face of model) {
      for (const {position: [x, y, z], grain, scaffold, rim} of face.points) {
        const fill = Math.max(0, Math.min(1, assembly * 1.44 - (y + 1) * .66 - grain * .027));
        const spread = (1 - fill) * (1 - assembly / 2) * .14;
        const alpha = (scaffold || rim ? .41 : .07) + fill * .48;
        dot(x + face.normal[0] * spread, y + face.normal[1] * spread, z + face.normal[2] * spread,
          glyphs[rim ? 2 : Math.min(4, Math.floor(fill * 3 + grain / 6))], alpha * face.light);
      }
    }
    if (assembly > .04) {
      for (let i = 0; i < 70; i++) {
        const angle = i * Math.PI * 2 / 70 + time / 1700;
        const glow = reducedMotion ? .3 : Math.sin(i / 70 * Math.PI) ** 4;
        dot(Math.cos(angle) * 1.42, -1.12, Math.sin(angle) * 1.42, glow > .62 ? '+' : '·', assembly * (.09 + glow * .23));
      }
    }
    context.globalAlpha = 1;
    if (!reducedMotion) schedule();
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
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
