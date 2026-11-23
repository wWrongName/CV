// Shared by the portrait and the illustrations that already follow the mouse.
export const deviceTilt = {x: 0, y: 0, active: false};

export function mountDeviceTilt(reducedMotion) {
  const orientation = window.DeviceOrientationEvent;
  if (reducedMotion || !matchMedia('(pointer: coarse)').matches) return;
  if (!window.isSecureContext || !orientation) return async () => 'unavailable';

  const listeners = new AbortController();
  const options = {passive: true, signal: listeners.signal};
  let neutral, current, firstReading;
  const reset = () => {
    neutral = current = undefined;
    deviceTilt.x = deviceTilt.y = 0;
    deviceTilt.active = false;
  };

  function read(event) {
    const {beta, gamma} = event;
    if (document.hidden || !Number.isFinite(beta) || !Number.isFinite(gamma)) return;
    const angle = window.screen.orientation?.angle ?? window.orientation ?? 0;
    current = {beta, gamma, angle};
    if (!neutral || neutral.angle !== angle) neutral = current;
    const pitch = ((beta - neutral.beta + 540) % 360) - 180;
    const roll = gamma - neutral.gamma;
    const radians = angle * Math.PI / 180;
    const cos = Math.cos(radians), sin = Math.sin(radians);
    const normalize = degrees => Math.sign(degrees) * Math.min(1, Math.max(0, Math.abs(degrees) - 1) / 11);
    deviceTilt.x = normalize(roll * cos - pitch * sin);
    deviceTilt.y = normalize(pitch * cos + roll * sin);
    deviceTilt.active = true;
    firstReading?.();
  }

  window.addEventListener('deviceorientation', read, options);
  document.addEventListener('visibilitychange', reset, options);
  window.addEventListener('pagehide', () => listeners.abort(), {once: true, signal: listeners.signal});

  return async () => {
    if (current) {
      neutral = current;
      deviceTilt.x = deviceTilt.y = 0;
      return 'active';
    }
    // A permission prompt, when needed, must be triggered by the menu tap.
    if (typeof orientation.requestPermission === 'function') {
      try {
        if (await orientation.requestPermission() !== 'granted') return 'blocked';
      } catch {
        return 'blocked';
      }
    }
    if (deviceTilt.active) return 'active';
    return new Promise(resolve => {
      const timeout = setTimeout(() => {
        firstReading = undefined;
        resolve('unavailable');
      }, 2200);
      firstReading = () => {
        clearTimeout(timeout);
        firstReading = undefined;
        resolve('active');
      };
    });
  };
}
