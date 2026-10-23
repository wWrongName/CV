import type { ObjectId } from "./sections";

/** A pending sprite keeps the last visible position; only an explicit rest returns home. */
export function visiblePosition(requested: ObjectId | null, previous: ObjectId | null, decoded: Partial<Record<ObjectId, boolean>>): ObjectId | null {
  if (!requested) return null;
  return decoded[requested] ? requested : previous;
}
