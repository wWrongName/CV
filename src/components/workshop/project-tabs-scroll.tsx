"use client";

import { createContext, useContext, useRef, type MutableRefObject, type ReactNode } from "react";

// This provider lives in the persistent panel, above the changing project route.
const ProjectTabsScroll = createContext<MutableRefObject<number> | null>(null);
export function ProjectTabsScrollProvider({ children }: { children: ReactNode }) {
  const position = useRef(0);
  return <ProjectTabsScroll.Provider value={position}>{children}</ProjectTabsScroll.Provider>;
}
export function useProjectTabsScroll() {
  const position = useContext(ProjectTabsScroll);
  const fallback = useRef(0);
  return position || fallback;
}
