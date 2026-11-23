import {deviceTilt} from './device-tilt.js';

const neutral = Object.freeze({x: 0, y: 0});
const clamp = value => Math.max(-1, Math.min(1, value));

export function mountSceneInput(surface, reducedMotion, frame = surface) {
  if (reducedMotion) return {read: () => neutral, stop() {}};

  const listeners = new AbortController();
  const options = {passive: true, signal: listeners.signal};
  const pointer = {x: 0, y: 0};
  const position = {x: 0, y: 0};
  let previous;

  surface.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const bounds = frame.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    pointer.x = clamp((event.clientX - bounds.left) / bounds.width * 2 - 1);
    pointer.y = clamp((event.clientY - bounds.top) / bounds.height * 2 - 1);
  }, options);
  surface.addEventListener('pointerleave', () => { pointer.x = pointer.y = 0; }, options);

  return {
    read(now) {
      const target = deviceTilt.active ? deviceTilt : pointer;
      const elapsed = previous === undefined ? 32 : Math.max(0, Math.min(90, now - previous));
      previous = now;
      const gain = 1 - Math.exp(-elapsed / 155);
      position.x += (target.x - position.x) * gain;
      position.y += (target.y - position.y) * gain;
      return position;
    },
    stop() { listeners.abort(); },
  };
}
