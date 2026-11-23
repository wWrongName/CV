const TIERS = Object.freeze([
  Object.freeze({name: 'high', index: 0, fps: 60, dpr: 1.5, glyphBudget: 64000, sampleScale: 2, brushLimit: 16}),
  Object.freeze({name: 'balanced', index: 1, fps: 60, dpr: 1.5, glyphBudget: 18000, sampleScale: 1, brushLimit: 12}),
  Object.freeze({name: 'light', index: 2, fps: 60, dpr: 1, glyphBudget: 10000, sampleScale: 1, brushLimit: 8}),
  Object.freeze({name: 'minimum', index: 3, fps: 30, dpr: 1, glyphBudget: 6000, sampleScale: 1, brushLimit: 6}),
]);

const WARMUP_MS = 1500;
const WINDOW_MS = 1200;
const MIN_SAMPLES = 20;
const RECOVERY_MS = 3600;
const DOWN_COOLDOWN_MS = 4000;
const UP_COOLDOWN_MS = 6000;
const FAILED_UPGRADE_COOLDOWN_MS = 15000;

function percentile95(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.max(0, Math.ceil(sorted.length * .95) - 1)];
}

// All timestamps and durations use milliseconds, matching performance.now().
// Observe only frames from an active render run; wake() starts a new run after
// idle without treating that idle interval as a low frame rate.
export function createAdaptiveQuality({coarse = false, fixed} = {}) {
  const fixedNames = {high: 0, balanced: 1, light: 2, low: 2, minimum: 3};
  const isFixed = Object.prototype.hasOwnProperty.call(fixedNames, fixed);
  const memory = Number(globalThis.navigator?.deviceMemory);
  const threads = Number(globalThis.navigator?.hardwareConcurrency);
  const limitedDevice = memory > 0 && memory <= 4 && threads > 0 && threads <= 4;
  let index = isFixed ? fixedNames[fixed] : coarse ? (limitedDevice ? 2 : 1) : limitedDevice ? 1 : 0;
  let qualityReason = isFixed ? `fixed:${fixed}` : coarse ? 'coarse-pointer' : limitedDevice ? 'limited-device' : 'auto-default';
  let warmUntil = NaN, lastObserved = NaN, lastChange = -Infinity, lastUpgrade = -Infinity, retryUpgradeAfter = -Infinity;
  let elapsed = 0, callbackElapsed = 0, samples = 0, costs = [], badWindows = 0, stableMs = 0, measuredFps = NaN;

  function resetWindow() {
    elapsed = callbackElapsed = 0; samples = 0; costs = [];
  }

  function wake(now) {
    if (!Number.isFinite(now)) now = globalThis.performance?.now?.() ?? Date.now();
    warmUntil = now + WARMUP_MS;
    lastObserved = now;
    badWindows = 0; stableMs = 0;
    resetWindow();
  }

  function change(next, now, reason) {
    if (next < index) lastUpgrade = now;
    else if (now - lastUpgrade < UP_COOLDOWN_MS) retryUpgradeAfter = now + FAILED_UPGRADE_COOLDOWN_MS;
    index = next; qualityReason = reason; lastChange = now;
    badWindows = 0; stableMs = 0;
    // Ignore the short allocation / shader warm-up after changing a tier.
    warmUntil = now + 500;
    resetWindow();
    return TIERS[index];
  }

  return {
    current() {return TIERS[index];},
    wake,
    observe(now, elapsedMs, cpuMs, callbackMs = elapsedMs) {
      if (!Number.isFinite(now) || !Number.isFinite(elapsedMs) || elapsedMs <= 0) return null;
      if (!Number.isFinite(warmUntil)) wake(now);
      // A missed lifecycle wake must not turn a hidden/idle gap into bad FPS.
      if (Number.isFinite(lastObserved) && now - lastObserved > 1500 && elapsedMs > 750) {
        wake(now); return null;
      }
      lastObserved = now;
      if (now < warmUntil) return null;
      elapsed += elapsedMs;
      callbackElapsed += callbackMs > 0 && Number.isFinite(callbackMs) ? callbackMs : elapsedMs;
      samples++;
      costs.push(Number.isFinite(cpuMs) && cpuMs >= 0 ? cpuMs : Infinity);
      if (elapsed < WINDOW_MS || samples < MIN_SAMPLES) return null;

      measuredFps = samples * 1000 / elapsed;
      // The 30 FPS tier intentionally skips renders. Check the browser's callbacks
      // separately so a display still capped at 30 FPS cannot trigger an upgrade.
      const callbackFps = samples * 1000 / callbackElapsed;
      const cpu95 = percentile95(costs);
      const activeWindowMs = elapsed;
      const target = TIERS[index].fps;
      resetWindow();
      if (isFixed) return null;

      if (measuredFps < target * .75) {
        badWindows++; stableMs = 0;
        if (badWindows >= 2 && index < TIERS.length - 1 && now - lastChange >= DOWN_COOLDOWN_MS) {
          return change(index + 1, now, 'sustained-low-fps');
        }
      } else {
        badWindows = 0;
        const nextTier = TIERS[index - 1];
        const hasHeadroom = nextTier && callbackFps >= nextTier.fps * .90 &&
          measuredFps >= target * .90 && cpu95 < 660 / nextTier.fps;
        stableMs = hasHeadroom ? stableMs + activeWindowMs : 0;
        if (stableMs >= RECOVERY_MS && now - lastChange >= UP_COOLDOWN_MS && now >= retryUpgradeAfter) {
          return change(index - 1, now, 'sustained-headroom');
        }
      }
      return null;
    },
    getReport() {
      const report = {quality: TIERS[index].name, qualityReason};
      if (Number.isFinite(measuredFps)) report.measuredFps = Math.round(measuredFps * 10) / 10;
      return report;
    },
  };
}
