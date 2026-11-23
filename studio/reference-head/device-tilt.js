// Shared by the portrait and the illustrations that already follow the mouse.
export const deviceTilt = {x: 0, y: 0, active: false};

export function mountDeviceTilt(reducedMotion) {
  const orientation = window.DeviceOrientationEvent;
  if (reducedMotion || !window.isSecureContext || !orientation ||
      !matchMedia('(pointer: coarse)').matches) return;

  const listeners = new AbortController();
  const options = {passive: true, signal: listeners.signal};
  let neutral;
  const reset = () => {
    neutral = undefined;
    deviceTilt.x = deviceTilt.y = 0;
    deviceTilt.active = false;
  };

  function read(event) {
    const {beta, gamma} = event;
    if (document.hidden || !Number.isFinite(beta) || !Number.isFinite(gamma)) return;
    const angle = window.screen.orientation?.angle ?? window.orientation ?? 0;
    if (!neutral || neutral.angle !== angle) neutral = {beta, gamma, angle};
    const pitch = ((beta - neutral.beta + 540) % 360) - 180;
    const roll = gamma - neutral.gamma;
    const radians = angle * Math.PI / 180;
    const cos = Math.cos(radians), sin = Math.sin(radians);
    const normalize = degrees => Math.sign(degrees) * Math.min(1, Math.max(0, Math.abs(degrees) - 1.5) / 16);
    deviceTilt.x = normalize(roll * cos - pitch * sin);
    deviceTilt.y = normalize(pitch * cos + roll * sin);
    deviceTilt.active = true;
  }

  function start() {
    window.addEventListener('deviceorientation', read, options);
    document.addEventListener('visibilitychange', reset, options);
    window.addEventListener('pagehide', () => listeners.abort(), {once: true, signal: listeners.signal});
  }

  if (typeof orientation.requestPermission !== 'function') {
    start();
    return;
  }
  // Safari requires permission to be requested directly from a user gesture.
  return async button => {
    button.disabled = true;
    try {
      if (await orientation.requestPermission() !== 'granted') return;
      start();
      button.remove();
    } catch {
      // The figures keep their idle motion if motion access is unavailable.
    } finally {
      button.disabled = false;
    }
  };
}
