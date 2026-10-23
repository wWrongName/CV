import type { ObjectId, SectionId } from "./sections";

export type WorkshopState = {
  mode: "idle" | "attending" | "opening" | "reading";
  target: ObjectId | null;
};
export type WorkshopEvent =
  | { type: "pointer"; x: number; y: number }
  | { type: "pointer-leave" }
  | { type: "rest" }
  | { type: "attend"; target: ObjectId; source: "pointer" | "keyboard" }
  | { type: "leave"; target: ObjectId }
  | { type: "activate"; target: ObjectId }
  | { type: "route-opened"; target: SectionId }
  | { type: "route-closed" };

export const initialWorkshopState: WorkshopState = { mode: "idle", target: null };

/** Navigation always wins over hover/gaze. No animation can hold a link open. */
export function workshopReducer(state: WorkshopState, event: WorkshopEvent): WorkshopState {
  switch (event.type) {
    case "attend":
      return state.mode === "opening" || state.mode === "reading" ? state : { mode: "attending", target: event.target };
    case "rest":
      return state.mode === "opening" || state.mode === "reading" ? state : initialWorkshopState;
    case "leave":
      // Keep the last pose and board description until another object is attended.
      return state;
    case "activate":
      return { mode: "opening", target: event.target };
    case "route-opened":
      return { mode: "reading", target: event.target };
    case "route-closed":
      return state.target ? { mode: "attending", target: state.target } : initialWorkshopState;
    default:
      return state;
  }
}
