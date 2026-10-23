"use client";

import { createContext, useCallback, useContext, useMemo, useReducer, useRef, type ReactNode, type RefObject } from "react";
import { initialWorkshopState, workshopReducer, type WorkshopEvent, type WorkshopState } from "@/lib/workshop/interaction";

type EventListener = (event: WorkshopEvent) => void;
type InteractionContext = {
  state: WorkshopState;
  pointer: RefObject<{ x: number; y: number } | null>;
  send: (event: WorkshopEvent) => void;
  subscribe: (listener: EventListener) => () => void;
};
const Context = createContext<InteractionContext | null>(null);

export function WorkshopInteractionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(workshopReducer, initialWorkshopState);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const listeners = useRef(new Set<EventListener>());
  const send = useCallback((event: WorkshopEvent) => {
    // Gaze data must not rerender the React scene on every mouse movement.
    if (event.type === "pointer") pointer.current = { x: event.x, y: event.y };
    else if (event.type === "pointer-leave") pointer.current = null;
    else dispatch(event);
    listeners.current.forEach(listener => listener(event));
  }, []);
  const subscribe = useCallback((listener: EventListener) => {
    listeners.current.add(listener);
    return () => { listeners.current.delete(listener); };
  }, []);
  const value = useMemo(() => ({ state, pointer, send, subscribe }), [state, send, subscribe]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useWorkshopInteraction() {
  const context = useContext(Context);
  if (!context) throw new Error("Workshop interaction provider is missing");
  return context;
}
