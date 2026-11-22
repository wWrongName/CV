const tierOffsets = [[-.34, -.42, .16], [.25, .14, -.14], [.49, .78, -.09]];
const bounds = {x: 1.55, y: .235, z: .93};
const surface = {
  side: [':', '#edeee56b'],
  front: [':', '#edeee59e'],
  slot: ['.', '#edeee56b'],
  vent: ['x', '#edeee59e'],
  top: ['x', '#edeee5cc'],
  topGrain: ['+', '#edeee5cc'],
  edge: ['+', '#edeee5'],
  indicator: ['*', '#edeee5'],
};

function soften(from, to, amount) {
  return from + (to - from) * amount;
}

function surfaceGlyph(axis, x, y, z) {
  const edge = .05;
  const nearX = Math.abs(x) > bounds.x - edge;
  const nearY = Math.abs(y) > bounds.y - edge;
  const nearZ = Math.abs(z) > bounds.z - edge;

  if ((axis === 0 && (nearY || nearZ)) || (axis === 1 && (nearX || nearZ)) ||
      (axis === 2 && (nearX || nearY))) return surface.edge;

  if (axis === 2) {
    if (Math.abs(y) < .095 && x > -.99 && x < .52) return surface.slot;
    if (Math.abs(y) < .13 && (Math.abs(x - .86) < .10 || Math.abs(x - 1.14) < .09)) return surface.indicator;
    return surface.front;
  }

  if (axis === 0) {
    const vent = Math.abs(y) < .10 && Math.abs(z) < .65 && Math.cos(z * 44) > -.45;
    return vent ? surface.vent : surface.side;
  }

  const vent = Math.abs(x) < 1.05 && Math.abs(z) < .61 && Math.cos(z * 41) > -.3;
  if (vent) return surface.vent;
  const grain = Math.floor((x + 2) * 12) * 7 + Math.floor((z + 1) * 16) * 13;
  return grain % 11 < 2 ? surface.topGrain : surface.top;
}

export function mountPaasLiveObject(canvas, reducedMotion, readStage) {
  const context = canvas?.getContext('2d');
  if (!context) return undefined;

  const launch = canvas.closest('[data-paas-launch]');
  const steps = [...(launch?.querySelectorAll('[data-launch-step-state]') ?? [])];
  const positions = tierOffsets.map(offset => [...offset]);
  const pointer = {x: 0, y: 0};
  const listeners = new AbortController();
  const listenerOptions = {signal: listeners.signal};
  let width = 0, height = 0, frame = 0, previous = -Infinity, visible = true;
  let yaw = .62, tilt = .38;

  function requestFrame() {
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    requestFrame();
  }

  function draw(time) {
    frame = 0;
    if (!canvas.isConnected || canvas.closest('[hidden]') || !width || !height) return;
    if (!reducedMotion && time - previous < 32) {
      requestFrame();
      return;
    }

    const movement = reducedMotion ? 1 : 1 - Math.exp(-Math.min(time - previous, 85) / 135);
    previous = time;
    const assembled = reducedMotion || launch?.dataset.launchState === 'ready';
    const completed = readStage?.() ?? (assembled ? 3 : steps.filter(step => step.dataset.launchStepState === 'done').length);
    for (let i = 0; i < positions.length; i++) {
      for (let axis = 0; axis < 3; axis++) {
        positions[i][axis] = soften(positions[i][axis], i < completed ? 0 : tierOffsets[i][axis], movement);
      }
    }

    if (!reducedMotion) {
      yaw = soften(yaw, .62 + Math.sin(time / 1900) * .18 + pointer.x * .24, movement * .55);
      tilt = soften(tilt, .38 + Math.sin(time / 2300) * .04 - pointer.y * .09, movement * .55);
    }
    const sx = Math.sin(yaw), cx = Math.cos(yaw);
    const sy = Math.sin(tilt), cy = Math.cos(tilt);
    const nx = sx * cy, ny = sy, nz = cx * cy;
    const horizontalRadius = cx * bounds.x + sx * bounds.z;
    const verticalRadius = sy * (sx * bounds.x + cx * bounds.z) + cy * bounds.y;
    let left = Infinity, right = -Infinity, bottom = Infinity, top = -Infinity;
    positions.forEach(([x, y, z], index) => {
      const across = cx * x - sx * z;
      const up = cy * (y + (index - 1) * .58) - sy * (sx * x + cx * z);
      left = Math.min(left, across - horizontalRadius);
      right = Math.max(right, across + horizontalRadius);
      bottom = Math.min(bottom, up - verticalRadius);
      top = Math.max(top, up + verticalRadius);
    });
    const centerX = (left + right) / 2, centerY = (bottom + top) / 2;
    const scale = Math.min(width / Math.max(4.2, right - left + .3),
      height / Math.max(3.32, top - bottom + .3));
    const cell = Math.max(4.5, width / 108, height / 78);

    context.clearRect(0, 0, width, height);
    context.font = `600 ${Math.max(5, cell * 1.11)}px ui-monospace, monospace`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    for (let py = cell / 2; py < height; py += cell) {
      const v = (height / 2 - py) / scale + centerY;
      const oy = ny * 7 + cy * v;
      for (let px = cell / 2; px < width; px += cell) {
        const u = (px - width / 2) / scale + centerX;
        const ox = nx * 7 + cx * u - sx * sy * v;
        const oz = nz * 7 - sx * u - cx * sy * v;
        let nearest = Infinity, mark;
        for (let i = 0; i < positions.length; i++) {
          const [offsetX, offsetY, offsetZ] = positions[i];
          const x = ox - offsetX, y = oy - offsetY - (i - 1) * .58, z = oz - offsetZ;
          const tx = (x - bounds.x) / nx, ty = (y - bounds.y) / ny, tz = (z - bounds.z) / nz;
          const depth = Math.max(tx, ty, tz);
          if (depth >= nearest || depth > (x + bounds.x) / nx ||
              depth > (y + bounds.y) / ny || depth > (z + bounds.z) / nz) continue;

          nearest = depth;
          mark = surfaceGlyph(depth === tx ? 0 : depth === ty ? 1 : 2,
            x - nx * depth, y - ny * depth, z - nz * depth);
        }
        if (!mark) continue;

        const [glyph, color] = mark;
        context.fillStyle = color;
        context.fillText(glyph, px, py);
      }
    }
    if (!reducedMotion) requestFrame();
  }

  if (!reducedMotion) {
    canvas.addEventListener('pointermove', event => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
      pointer.y = (event.clientY - rect.top) / rect.height * 2 - 1;
    }, listenerOptions);
    canvas.addEventListener('pointerleave', () => { pointer.x = pointer.y = 0; }, listenerOptions);
  }
  document.addEventListener('visibilitychange', requestFrame, listenerOptions);
  const sizeObserver = new ResizeObserver(resize);
  sizeObserver.observe(canvas);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    requestFrame();
  });
  visibilityObserver.observe(canvas);
  resize();

  return () => {
    cancelAnimationFrame(frame);
    sizeObserver.disconnect();
    visibilityObserver.disconnect();
    listeners.abort();
  };
}
