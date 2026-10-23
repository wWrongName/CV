import { mobileScenes } from "./mobile-scenes";
import type { ObjectId } from "./sections";
export const mobileSlideIds: ObjectId[] = ["about", ...mobileScenes.map(scene => scene.id)];
export const mobileSlideAnchor = (index: number) => `mobile-${mobileSlideIds[index] || "about"}`;
export function mobileSlideFromHash(hash: string) {
  return Math.max(0, mobileSlideIds.findIndex(id => hash === `#mobile-${id}`));
}
