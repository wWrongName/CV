import type { ObjectId } from "./sections";

export type ArtId = "about" | "services" | "cases" | "research" | "blog" | "resume" | "process" | "character";
export type SceneObject = {
  id: ObjectId; art: ArtId;
  /** Bottom-centre on the shared 1536 × 1024 reference plane. */
  x: number; y: number; width: number;
  label?: { x: number; bottom: number };
  reaction: "point" | "approach" | "greet";
};

// Furniture, props and labels use the same reference coordinates at every size.
export const desktopObjects: readonly SceneObject[] = [
  { id: "about", art: "about", x: 19.25, y: 29.69, width: 4.8, label: { x: 19.25, bottom: 36.2 }, reaction: "point" },
  { id: "services", art: "services", x: 24.3, y: 61.9, width: 13.7, label: { x: 24.3, bottom: 49.2 }, reaction: "point" },
  { id: "projects", art: "cases", x: 37.4, y: 61.6, width: 11.6, label: { x: 37.4, bottom: 55.5 }, reaction: "approach" },
  { id: "contact", art: "character", x: 54.5, y: 61.6, width: 22.2, reaction: "greet" },
  { id: "research", art: "research", x: 78.1, y: 62.3, width: 12.5, label: { x: 78.1, bottom: 58.3 }, reaction: "approach" },
  { id: "blog", art: "blog", x: 79.87, y: 35.41, width: 3.15, label: { x: 79.87, bottom: 28.2 }, reaction: "point" },
  { id: "experience", art: "resume", x: 21.9401041667, y: 79.1015625, width: 8.984375, label: { x: 21.9401041667, bottom: 70.1 }, reaction: "approach" },
  { id: "process", art: "process", x: 75.5, y: 79.296875, width: 13.5, label: { x: 75.5, bottom: 73.6 }, reaction: "point" },
];
