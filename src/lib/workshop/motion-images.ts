/** Keep decoded pose images shared between prefetch and first GPU upload. */
const images = new Map<string, HTMLImageElement>();
export function rememberMotionImage(image: HTMLImageElement): void {
  images.set(image.currentSrc || image.src, image);
}
export function motionImage(src: string): HTMLImageElement {
  const existing = images.get(src);
  if (existing) return existing;
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";
  image.addEventListener("error", () => { if (images.get(src) === image) images.delete(src); }, { once: true });
  images.set(src, image);
  image.src = src;
  return image;
}
