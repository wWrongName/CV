// A stroke has a fixed lifetime. Later pointer events may add a new stroke,
// but may never shorten an existing one by replacing its history slot.
export const SCATTER_DURATION = .55;
const ATTACK = .035;
const smoothstep = value => value * value * (3 - 2 * value);

export function scatterEnvelope(age) {
  if (age < 0 || age >= SCATTER_DURATION) return 0;
  const attack = smoothstep(Math.min(1, age / ATTACK));
  const release = 1 - smoothstep(Math.max(0, (age - ATTACK) / (SCATTER_DURATION - ATTACK)));
  return .71 * attack * release;
}

export function createScatterHistory(capacity = 16) {
  const items = Array.from({length: capacity}, () => ({x: 0, y: 0, fromX: 0, fromY: 0, time: -100, strength: 0}));
  let limit = capacity, next = 0, lastStamp = -Infinity;
  const alive = (item, time) => item.strength > 0 && time >= item.time && time - item.time < SCATTER_DURATION;
  return {
    items,
    setLimit(value) {limit = Math.max(0, Math.min(capacity, Math.floor(value)));},
    hasLive(time) {return items.some(item => alive(item, time));},
    add(stroke) {
      if (!limit || !Number.isFinite(stroke.x + stroke.y + stroke.time + stroke.strength)) return false;
      // Spread admissions across the lifetime even during a fast pointer move.
      if (stroke.time - lastStamp < Math.max(.035, SCATTER_DURATION / limit)) return false;
      let live = 0, free = -1;
      for (let offset = 0; offset < capacity; offset++) {
        const index = (next + offset) % capacity;
        if (alive(items[index], stroke.time)) live++;
        else if (free < 0) free = index;
      }
      if (live >= limit || free < 0) return false;
      Object.assign(items[free], stroke);
      next = (free + 1) % capacity;
      lastStamp = stroke.time;
      return true;
    },
  };
}
