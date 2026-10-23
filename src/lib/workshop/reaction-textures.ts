import about from "./about-motion.json";
import blog from "./blog-motion.json";
import contact from "./contacts-motion.json";
import experience from "./resume-motion.json";
import process from "./process-motion.json";
import projects from "./projects-motion.json";
import research from "./research-motion.json";
import services from "./services-motion.json";
import type { ObjectId } from "./sections";

const blink = { about, blog, contact, experience, process, projects, research, services };
/** Match each renderer's real texture choice without allocating a WebGL context. */
export function reactionTextureFiles(target: ObjectId, displayedWidth: number, pixelRatio: number): string[] {
  const files = [blink[target].blink.src];
  if (target === "services") {
    const variants = services.gesture.image.files;
    const width = displayedWidth * services.canvas.width / services.baseWidth * pixelRatio;
    files.push(variants[width > variants[0].width ? 1 : 0].src);
  }
  if (target === "research") files.push(research.hand.foregroundSrc);
  return files;
}
