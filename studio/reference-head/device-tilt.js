// Shared by the portrait and the illustrations that already follow the mouse.
export const deviceTilt = {x: 0, y: 0, active: false};

export function mountDeviceTilt(reducedMotion) {
  const orientation = window.DeviceOrientationEvent;
  const motion = window.DeviceMotionEvent;
  if (reducedMotion || !(matchMedia('(any-pointer: coarse)').matches || navigator.maxTouchPoints > 0)) return;
  if (!window.isSecureContext || !(orientation || motion)) return async () => 'unavailable';

  const listeners = new AbortController();
  const options = {passive: true, signal: listeners.signal};
  let neutral, current, firstReading;
  const reset = () => {
    neutral = current = undefined;
    deviceTilt.x = deviceTilt.y = 0;
    deviceTilt.active = false;
  };

  function read(beta, gamma, source) {
    const angle = window.screen.orientation?.angle ?? window.orientation ?? 0;
    current = {beta, gamma, angle, source};
    if (!neutral || neutral.angle !== angle || neutral.source !== source) neutral = current;
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

  window.addEventListener('deviceorientation', event => {
    const {beta, gamma} = event;
    if (document.hidden || !Number.isFinite(beta) || !Number.isFinite(gamma)) return;
    read(beta, gamma, 'orientation');
  }, options);
  window.addEventListener('devicemotion', event => {
    if (document.hidden || current?.source === 'orientation') return;
    const {x, y, z} = event.accelerationIncludingGravity ?? {};
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z) ||
        Math.hypot(x, y, z) < 4) return;
    const degrees = 180 / Math.PI;
    read(Math.atan2(y, z) * degrees, Math.atan2(-x, Math.hypot(y, z)) * degrees, 'motion');
  }, options);
  document.addEventListener('visibilitychange', reset, options);
  window.addEventListener('pagehide', () => listeners.abort(), {once: true, signal: listeners.signal});

  return async () => {
    if (current) {
      neutral = current;
      deviceTilt.x = deviceTilt.y = 0;
      return 'active';
    }
    // A permission prompt, when needed, must be triggered by the menu tap.
    const permissionApi = typeof orientation?.requestPermission === 'function' ? orientation : motion;
    if (typeof permissionApi?.requestPermission === 'function') {
      try {
        if (await permissionApi.requestPermission() !== 'granted') return 'blocked';
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
