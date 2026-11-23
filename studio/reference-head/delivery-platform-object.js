import { deviceTilt } from './device-tilt.js';
const sideCount = 7;
const sector = 2 * Math.PI / sideCount;
const frontZ = .24;
const backZ = -.36;
const apothem = Math.cos(sector / 2);
const bevel = .075;
const normals = Array.from({length: sideCount}, (_, i) => {
  const angle = (i + .5) * sector + Math.PI / 2;
  return [Math.cos(angle), Math.sin(angle)];
});

// Half-spaces describe the front, back, and beveled edges of the solid.
const planes = [
  {x: 0, y: 0, z: 1, limit: frontZ, face: 'front'},
  {x: 0, y: 0, z: -1, limit: -backZ, face: 'back'},
  ...normals.flatMap(([x, y]) => [
    {x, y, z: 0, limit: apothem, face: 'side'},
    {x, y, z: 1, limit: apothem + frontZ - bevel, face: 'bevel'},
    {x, y, z: -1, limit: apothem - backZ - bevel, face: 'bevel'},
  ]),
];

function wheel(x, y, inset = 0) {
  const radius = Math.hypot(x, y);
  if (radius > .74 - inset) return false;
  if (radius < .15 - inset || Math.abs(radius - .49) < .071 - inset) return true;
  const angle = (Math.atan2(y, x) + Math.PI * 1.5) % sector;
  const distance = radius * Math.sin(Math.min(angle, sector - angle));
  return distance < .059 - inset;
}

function depthAt(viewPlanes, u, v, hit) {
  let near = Infinity, far = -Infinity;
  let surface;
  for (const plane of viewPlanes) {
    const distance = plane.limit - plane.u * u - plane.v * v;
    if (Math.abs(plane.w) < .0001) {
      if (distance < 0) return false;
      continue;
    }
    const depth = distance / plane.w;
    if (plane.w > 0) {
      if (depth < near) {
        near = depth;
        surface = plane;
      }
    } else far = Math.max(far, depth);
    if (far > near) return false;
  }
  hit.depth = near;
  hit.surface = surface;
  return true;
}

function drawBadge(context, centerX, centerY, scale, size, view) {
  const {cosYaw, sinYaw, cosPitch, sinPitch} = view;
  const ray = [sinYaw * cosPitch, sinPitch, cosYaw * cosPitch];
  const viewPlanes = planes.map(plane => {
    const {x, y, z} = plane;
    const along = x * sinYaw + z * cosYaw;
    return {
      ...plane,
      u: x * cosYaw - z * sinYaw,
      v: y * cosPitch - along * sinPitch,
      w: x * ray[0] + y * ray[1] + z * ray[2],
      light: Math.max(0, (x * -.20 + y * .70 + z * .48) / Math.hypot(x, y, z)),
    };
  });
  const cell = Math.max(3, size / 59);
  const columns = Math.ceil(scale * 1.14 / cell);
  const hit = {};
  context.font = `700 ${cell * 1.21}px ui-monospace, monospace`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  for (let row = -columns; row <= columns; row++) {
    const v = -row * cell / scale;
    const baseY = v * cosPitch;
    for (let col = -columns; col <= columns; col++) {
      const u = col * cell / scale;
      if (!depthAt(viewPlanes, u, v, hit)) continue;

      const baseX = cosYaw * u - sinYaw * sinPitch * v;
      const baseZ = -sinYaw * u - cosYaw * sinPitch * v;
      const wheelDepth = (frontZ + .046 - baseZ) / ray[2];
      const wheelX = baseX + ray[0] * wheelDepth;
      const wheelY = baseY + ray[1] * wheelDepth;
      const rim = wheel(wheelX, wheelY);
      const isFront = hit.surface.face === 'front';
      const grain = ((row * 13 + col * 7) % 5 + 5) % 5;
      let glyph, alpha;

      if (rim) {
        glyph = grain < 2 ? '#' : '+';
        alpha = wheel(wheelX, wheelY, .018) ? 1 : .85;
      } else if (isFront) {
        glyph = grain < 2 ? ':' : '·';
        alpha = .32 + (grain % 2) * .08;
      } else {
        const lit = hit.surface.light;
        glyph = hit.surface.face === 'bevel' ? '+' : grain < 2 ? 'x' : ':';
        alpha = Math.min(1, (hit.surface.face === 'bevel' ? .53 : .63) + lit * .46);
      }

      context.globalAlpha = alpha;
      context.fillText(glyph, centerX + col * cell, centerY + row * cell);
    }
  }
  context.globalAlpha = 1;
}

function drawConnections(context, labels, centerX, centerY, scale, view, elapsed, stage, reducedMotion) {
  const {cosYaw, sinYaw, cosPitch, sinPitch} = view;

  labels.forEach(({left, x, y, row, stages}, index) => {
    const active = stage === undefined || stages.includes(stage);
    const angle = left ? Math.PI + (row - 1) * .62 : (1 - row) * .62;
    const facet = ((angle - Math.PI / 2 + Math.PI * 4) % sector) - sector / 2;
    const radius = (apothem - bevel * .82) / Math.cos(facet);
    const localX = radius * Math.cos(angle);
    const localY = radius * Math.sin(angle);
    const endX = centerX + (localX * cosYaw - frontZ * sinYaw) * scale;
    const endY = centerY - (localY * cosPitch - (localX * sinYaw + frontZ * cosYaw) * sinPitch) * scale;
    const bend = x + (endX - x) * .32;

    context.strokeStyle = active ? '#edeee57f' : '#edeee52d';
    context.lineWidth = 1;
    context.setLineDash([2, 3]);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(bend, y);
    context.lineTo(endX, endY);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = active ? '#edeee5bd' : '#edeee549';
    context.fillRect(endX - 1, endY - 1, 2, 2);

    if (reducedMotion || !active) return;
    const progress = ((elapsed + index * 453) % 3400) / 1050;
    if (progress >= 1) return;
    const t = progress ** 1.55;
    context.globalAlpha = Math.sin(progress * Math.PI) * .85;
    context.fillStyle = '#edeee5';
    const signalX = x + (endX - x) * t;
    const signalY = y + (endY - y) * Math.max(0, (t - .32) / .68);
    context.fillRect(signalX - 1, signalY - 1, 2, 2);
    context.globalAlpha = 1;
  });
}

export function mountDeliveryObject(hub, reducedMotion, readStage) {
  const canvas = hub.querySelector('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  const center = hub.querySelector('.platform-hub__mark');
  const labelElements = [...hub.querySelectorAll('[data-hub-stages]')].map(item => ({
    item,
    text: item.querySelector('span'),
    stages: item.dataset.hubStages.split(' ').map(Number),
  }));
  const listeners = new AbortController();
  const start = performance.now();
  const pointer = {x: 0, y: 0};
  let width = 0, height = 0, centerX = 0, size = 0, labels = [];
  let frame = 0, previous = -Infinity, visible = true;
  let yaw = .56, pitch = .32;
  let shownStage, stageStarted = start;

  function schedule() {
    if (!frame && width && height && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function draw(now) {
    frame = 0;
    if (!canvas.isConnected || canvas.closest('[hidden]')) return;
    const delta = now - previous;
    if (!reducedMotion && delta < (size < 160 ? 36 : 30)) {
      schedule();
      return;
    }
    previous = now;
    const elapsed = now - start;
    const stage = readStage?.();
    if (stage !== shownStage) {
      shownStage = stage;
      stageStarted = now;
      for (const {item, stages} of labelElements) {
        item.toggleAttribute('data-hub-dimmed', !stages.includes(stage));
      }
    }
    if (!reducedMotion) {
      const ease = 1 - Math.exp(-Math.min(delta, 100) / 155);
      const input = deviceTilt.active ? deviceTilt : pointer;
      yaw += (.56 + Math.sin(elapsed / 1770) * .10 + input.x * .10 - yaw) * ease;
      pitch += (.32 + Math.sin(elapsed / 2210) * .043 - input.y * .065 - pitch) * ease;
    }
    const view = {cosYaw: Math.cos(yaw), sinYaw: Math.sin(yaw), cosPitch: Math.cos(pitch), sinPitch: Math.sin(pitch)};
    const centerY = height * .50;
    const scale = size * .465;

    context.clearRect(0, 0, width, height);
    drawConnections(context, labels, centerX, centerY, scale, view, now - stageStarted, stage, reducedMotion);
    context.fillStyle = '#edeee5';
    drawBadge(context, centerX, centerY, scale, size, view);
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

    const bounds = canvas.getBoundingClientRect();
    const centerBounds = center.getBoundingClientRect();
    centerX = center.offsetWidth / 2 + centerBounds.left - bounds.left;
    size = center.clientWidth;
    labels = labelElements.map(({text, stages}, index) => {
      const label = text.getBoundingClientRect();
      const left = index < 3;
      return {
        left,
        stages,
        row: index % 3,
        x: (left ? label.right + 6 : label.left - 6) - bounds.left,
        y: label.top + label.height / 2 - bounds.top,
      };
    });
    schedule();
  }

  const options = {signal: listeners.signal};
  if (!reducedMotion) {
    hub.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width * 2 - 1;
      pointer.y = (event.clientY - bounds.top) / bounds.height * 2 - 1;
    }, options);
    hub.addEventListener('pointerleave', () => {pointer.x = pointer.y = 0;}, options);
  }

  document.addEventListener('visibilitychange', schedule, options);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  });
  visibilityObserver.observe(canvas);
  resize();
  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    listeners.abort();
  };
}
