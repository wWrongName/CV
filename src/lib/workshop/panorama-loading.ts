import scenes from "@/lib/workshop/panorama-scenes.json";
import items from "@/lib/workshop/panorama-native-items.json";
import type { SectionId } from "@/lib/workshop/sections";

type Priority = "high" | "low";
const images = new Map<string, { image: HTMLImageElement; ready: Promise<HTMLImageElement> }>();

/** Foreground animation layers reuse the images decoded by the background queue. */
export function loadPanoramaImage(src: string, priority: Priority = "high"): Promise<HTMLImageElement> {
  const cached = images.get(src);
  if (cached) {
    if (priority === "high") cached.image.fetchPriority = "high";
    return cached.ready;
  }
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = priority;
  const ready = new Promise<HTMLImageElement>((resolve, reject) => {
    image.onload = () => image.decode().then(() => resolve(image), reject);
    image.onerror = () => reject(new Error(`Cannot load scene image: ${src}`));
  });
  images.set(src, { image, ready });
  // Failed transfers remain retryable when the visitor opens that section.
  void ready.catch(() => { if (images.get(src)?.image === image) images.delete(src); });
  image.src = src;
  return ready;
}

export function panoramaImageUrls(id: SectionId): string[] {
  const item = items[id];
  return [...new Set([
    scenes[id].files[0].src, item.original, item.plate, item.mask, item.blink, item.toolMask,
    ...(id === "about" ? ["/workshop/panorama-clouds-item-v1.webp", "/workshop/panorama-sky-mask-v1.webp"] : []),
    ...(id === "about" || id === "contact" ? ["/workshop/sleeping-cavalier-v1-512.webp"] : []),
  ].filter((url): url is string => Boolean(url)))];
}

const navigation: SectionId[] = ["about", "process", "services", "projects", "experience", "research", "blog", "contact"];

/** Start only after the first scene and page have loaded; never mount hidden animations. */
export function preloadPanoramaImages(initial: SectionId, onProgress: (loaded: number, total: number) => void): () => void {
  const remaining = navigation.filter(id => id !== initial);
  const current = new Set(panoramaImageUrls(initial));
  // All backgrounds first, followed by their animation textures, without duplicate URLs.
  const urls = [...new Set([
    ...remaining.map(id => scenes[id].files[0].src),
    ...remaining.flatMap(panoramaImageUrls),
  ])].filter(url => !current.has(url));
  let stopped = false, running = 0, next = 0, loaded = 0;
  let idle: number | undefined, timer: number | undefined;
  const schedule = () => {
    if (stopped || idle !== undefined || timer !== undefined || next === urls.length) return;
    if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(pump, { timeout: 1500 });
    else timer = window.setTimeout(pump, 100);
  };
  const pump = () => {
    idle = timer = undefined;
    if (stopped) return;
    while (running < 2 && next < urls.length) {
      running++;
      const url = urls[next++];
      void loadPanoramaImage(url, "low").then(() => {
        if (!stopped) onProgress(++loaded, urls.length);
      }, () => { /* A failed background fetch must not stop the remaining queue. */ }).finally(() => {
        running--;
        schedule();
      });
    }
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
  return () => {
    stopped = true;
    window.removeEventListener("load", schedule);
    if (idle !== undefined) window.cancelIdleCallback(idle);
    if (timer !== undefined) window.clearTimeout(timer);
    // In-flight requests are shared with visible sections; let them finish in the cache.
  };
}
