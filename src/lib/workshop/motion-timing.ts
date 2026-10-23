/** Clips run within a position; they never select a position or gate navigation. */
export type CharacterPositionId = "default" | import("./sections").ObjectId;

export function sampleBreath(elapsedMs: number, durationsMs: readonly number[]): number {
  const total = durationsMs.reduce((sum, duration) => sum + duration, 0);
  let time = elapsedMs % total;
  for (let index = 0; index < durationsMs.length; index++) {
    const duration = durationsMs[index];
    if (time < duration) {
      const progress = time / duration;
      // A shorter inhale and a softer, longer exhale. Each cycle has a different depth.
      const phase = progress < .42 ? progress / .42 : 1 - (progress - .42) / .58;
      return (1 - Math.cos(Math.PI * phase)) / 2 * (1 - index % 3 * .08);
    }
    time -= duration;
  }
  return 0;
}

export function sampleBlink(elapsedMs: number, intervalsMs: readonly number[], durationMs: number): number {
  const total = intervalsMs.reduce((sum, interval) => sum + interval + durationMs, 0);
  let time = elapsedMs % total;
  for (const interval of intervalsMs) {
    if (time < interval) return 0;
    time -= interval;
    if (time < durationMs) {
      const progress = time / durationMs;
      return progress < .2 ? progress / .2 : progress < .65 ? 1 : (1 - progress) / .35;
    }
    time -= durationMs;
  }
  return 0;
}

/** Screen-space intent is bounded to one ellipse, so both eyes stay inside their sockets. */
export function boundedGaze(x: number, y: number, maxX: number, maxY: number): { x: number; y: number } {
  const length = Math.max(1, Math.hypot(x, y));
  return { x: x / length * maxX, y: y / length * maxY };
}

export function sampleHair(elapsedMs: number): number {
  return Math.sin(elapsedMs / 2300) * .72 + Math.sin(elapsedMs / 910) * .18;
}

export function sampleGestureFrame(elapsedMs: number, timeline: readonly { frame: number; durationMs: number }[]): number {
  const period = timeline.reduce((sum, step) => sum + step.durationMs, 0);
  let time = elapsedMs % period;
  for (const step of timeline) {
    if (time < step.durationMs) return step.frame;
    time -= step.durationMs;
  }
  return 0;
}

/** Continuous quiet head sway with two rhythms, avoiding long idle holds. */
export function sampleHeadTilt(elapsedMs: number): number {
  const sway = Math.sin(elapsedMs / 1350) * .78 + Math.sin(elapsedMs / 3300) * .22;
  return sway * Math.min(1, elapsedMs / 800);
}
