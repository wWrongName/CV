const glyphs = ['·', ':', '+', 'x', '*', '#'];
const cycle = 2550;

function modelPoints() {
  const points = [];
  for (let slice = 0; slice <= 40; slice++) {
    const progress = slice / 40;
    const x = (progress - .5) * 2.4;
    const radius = .25 + .66 * Math.sin(Math.PI * progress) ** 1.4;
    for (let segment = 0; segment < 19; segment++) {
      const angle = segment * (Math.PI * 2 / 19) + progress * .9;
      points.push({
        x, y: Math.cos(angle) * radius, z: Math.sin(angle) * radius,
        trace: segment % 6 === 0,
      });
    }
  }
  return points;
}

const model = modelPoints();

export function mountRequestScene(canvas, reducedMotion, readStep) {
  const context = canvas.getContext('2d');
  if (!context) return () => {};
  const started = performance.now();
  let frame = 0;
  let lastDraw = -Infinity;
  let comparison = 0;
  let width = 0;
  let height = 0;

  function draw(time) {
    frame = 0;
    if (document.hidden || !width || !height) return;
    if (!reducedMotion && time - lastDraw < 32) {
      frame = requestAnimationFrame(draw);
      return;
    }
    lastDraw = time;
    const elapsed = time - started;
    const stage = readStep?.();
    const compare = stage === 2 ? 1 : 0;
    comparison += (compare - comparison) * (reducedMotion ? 1 : .16);
    const progress = reducedMotion ? .5 : elapsed % cycle / cycle;
    const pitch = reducedMotion ? .18 : .14 + .2 * Math.sin(elapsed / 1760);
    const sine = Math.sin(pitch), cosine = Math.cos(pitch);
    const scale = Math.min(width / 6, height / 2.45);
    const center = {x: width / 2, y: height * .525};
    const visiblePulse = reducedMotion ? 0 : Math.sin(Math.PI * progress);
    const pulse = stage === 0 ? progress * 3.4 - 2.8
      : stage === 1 ? progress * 4.1 - 1.35
      : progress * 5.5 - 2.75;

    context.clearRect(0, 0, width, height);
    context.fillStyle = '#edeee5';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `600 ${Math.max(5, scale * .13)}px ui-monospace, monospace`;

    const density = width < 400 ? 2 : 1;
    for (let index = 0; index < model.length; index += density) {
      const {x, y, z, trace} = model[index];
      const rotation = .48 + (reducedMotion ? 0 : .22 * Math.sin(elapsed / 1870)) + x * .48;
      const localY = y * Math.cos(rotation) - z * Math.sin(rotation);
      const localZ = y * Math.sin(rotation) + z * Math.cos(rotation);
      const across = x * cosine + localZ * sine;
      const depth = -x * sine + localZ * cosine;
      const light = Math.max(0, 1 - Math.abs(x - pulse) * 1.9) * visiblePulse;
      const perspective = 1 / (1 - depth * .105);
      const brightness = (depth + 1.2) / 2.5;
      const glyph = glyphs[Math.min(5, Math.max(0, Math.floor((brightness + light * .55) * 4.1)))];
      context.globalAlpha = Math.min(1, .15 + brightness * .55 + light * .38 + (trace ? .13 : 0));
      context.fillText(glyph, center.x + across * scale * perspective, center.y + (localY + depth * .21) * scale * perspective);
    }

    for (const direction of [-1, 1]) {
      for (let row = 0; row < 3; row++) {
        const lane = row - 1;
        const length = 11 - row;
        for (let column = 0; column < length; column++) {
          const distance = 1.36 + column * .114;
          const x = distance * direction;
          const split = direction === 1 ? comparison : 0;
          const y = lane * (.18 + (distance - 1.36) * (.19 + split * .65));
          const light = Math.max(0, 1 - Math.abs(x - pulse) * 2) * visiblePulse;
          const emphasis = (stage === 0 && direction === -1) || (stage === 1 && direction === 1);
          context.globalAlpha = (.22 + light * .58 + (emphasis ? .18 : 0)) * (lane ? 1 : 1 - split * .91);
          context.fillText(glyphs[(row * 3 + column) % 4], center.x + x * scale, center.y + y * scale);
        }
      }
    }

    context.globalAlpha = 1;
    if (!reducedMotion) frame = requestAnimationFrame(draw);
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    if (!frame) frame = requestAnimationFrame(draw);
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  function onVisibility() {
    cancelAnimationFrame(frame);
    frame = document.hidden ? 0 : requestAnimationFrame(draw);
  }
  document.addEventListener('visibilitychange', onVisibility);
  resize();

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
