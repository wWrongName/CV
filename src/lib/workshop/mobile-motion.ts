import type { SectionId } from "./sections";

// Coordinates use the 480px artwork. Outer mesh vertices never move: furniture,
// paws, paper clamps and the robot base keep their original contact points.
export type MotionKind = "leaves" | "spindle";
export type MotionPatch = { box: [number, number, number, number]; kind: MotionKind; amplitude: number; period: number; phase?: number };
const p = (kind: MotionKind, box: MotionPatch["box"], amplitude: number, period: number, phase = 0): MotionPatch => ({ kind, box, amplitude, period, phase });
export const mobileMotion: Record<SectionId, MotionPatch[]> = {
  about: [p("leaves", [0, 0, 314, 312], 5, 6), p("leaves", [0, 566, 262, 274], 4, 7, 1), p("leaves", [419, 535, 61, 225], 4, 6.5, 2)],
  services: [p("spindle", [295, 418, 35, 92], 4, 6.4)],
  projects: [p("leaves", [0, 0, 249, 352], 4, 6.5), p("leaves", [0, 726, 242, 312], 3.5, 7.2, 2)],
  process: [],
  blog: [],
  research: [p("leaves", [270, 10, 151, 230], 12, 5.5)],
  experience: [],
  contact: [p("leaves", [0, 0, 162, 408], 4, 6), p("leaves", [299, 146, 181, 420], 4, 7, 1)],
};
export function patchOffset(patch: MotionPatch, u: number, v: number, seconds: number, leafWeight = 1): [number, number] {
  if (u <= 0 || u >= 1 || v <= 0 || v >= 1) return [0, 0];
  const pin = Math.sin(Math.PI * u) * Math.sin(Math.PI * v);
  const phase = seconds * Math.PI * 2 / patch.period + (patch.phase || 0);
  const a = patch.amplitude * pin;
  switch (patch.kind) {
    case "leaves": return [a * leafWeight * Math.sin(phase + v * 1.2), a * leafWeight * .24 * Math.sin(phase + u)];
    // Only the telescoping tool below the fixed wrist moves, along its axis.
    case "spindle": return [0, a * Math.sin(phase) * Math.sin(phase)];
  }
}
export function motionBudget(width: number, dpr: number, saveData: boolean) {
  return { width: Math.min(640, Math.ceil(width * Math.min(dpr, 1.5))), fps: saveData ? 12 : 16 };
}
export function coverTransform(width: number, height: number, imageHeight: number) {
  const scale = Math.max(width / 480, height / imageHeight);
  return { scale, x: (width - 480 * scale) * .5, y: (height - imageHeight * scale) * .45 };
}

/** Slow unequal window cycles; each lamp visibly dims and brightens independently. */
export function cityWindowLevel(seconds: number, index: number) {
  const phase = seconds * 2 * Math.PI / (3.2 + index % 4 * .55) + index * 1.73;
  return .08 + .92 * Math.pow(.5 + .5 * Math.sin(phase), 2);
}
/** Two short voltage dips in a slow cycle, also reflected on the tabletop. */
export function processLampLevel(seconds: number) {
  const cycle = seconds % 4.6;
  return Math.max(.2, .94 - .66 * Math.exp(-Math.pow((cycle - 1.15) / .14, 2)) - .4 * Math.exp(-Math.pow((cycle - 1.5) / .09, 2)));
}

/** Sprite order is left/front/right; return to front between the two turns. */
export function resumePortraitFrame(seconds: number) {
  const cycle = seconds % 6;
  return cycle < 1.2 ? 1 : cycle < 2.5 ? 0 : cycle < 3.2 ? 1 : cycle < 4.5 ? 2 : 1;
}

export function sleepingDogScale(seconds: number, scene: "about" | "contact") {
  const inhale = .5 - .5 * Math.cos(seconds * Math.PI * 2 / 4.3);
  return 1 + (scene === "about" ? .035 : .025) * inhale;
}

export type MobileLampItem = { box: [number,number,number,number]; plate: [number,number,number,number]; pivot: [number,number]; period: number; angle: number };
export const mobileLampItems: Partial<Record<SectionId,MobileLampItem>> = {
  about: { box:[43,168,62,126], plate:[32,159,85,143], pivot:[74,168], period:5.8, angle:.65 },
  services: { box:[226,69,121,104], plate:[213,57,147,128], pivot:[287,69], period:5.5, angle:1.2 },
  experience: { box:[367,133,132,112], plate:[354,121,126,137], pivot:[433,133], period:5.8, angle:1.2 },
  contact: { box:[172,149,72,132], plate:[159,141,98,151], pivot:[207,149], period:6, angle:1.2 },
};
export function lampItemAngle(seconds: number, period: number, degrees = 1.2) { return Math.sin(seconds * Math.PI * 2 / period) * Math.PI * degrees / 180; }

export const mobileDogItems = {
  about: { src:"/workshop/sleeping-cavalier-v1-256.webp", plateSrc:"/workshop/mobile-about-pet-plate-v1.webp", x:302, bottom:534, width:134, plate:[296,466,150,72] as [number,number,number,number] },
  contact: { src:"/workshop/sleeping-cavalier-v1-512.webp", plateSrc:"/workshop/mobile-contact-pet-plate-v2.webp", x:35, bottom:671, width:292, plate:[23,516,317,165] as [number,number,number,number] },
};
export function dogItemLayout(scene: keyof typeof mobileDogItems, sourceWidth: number, sourceHeight: number, seconds = 0) {
  const item = mobileDogItems[scene];
  const height = item.width * sourceHeight / sourceWidth * sleepingDogScale(seconds,scene);
  return { x:item.x, y:item.bottom-height, width:item.width, height };
}

/** A separate hanging ivy item swings from its fixed upper stem. */
export function blogVineAngle(seconds: number) {
  const phase = seconds * 2 * Math.PI / 7.2;
  return (Math.sin(phase) + .18 * Math.sin(phase * 2)) * Math.PI * 1.1 / 180;
}
