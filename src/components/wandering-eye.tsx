"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CuriousEye } from "./curious-eye";

export function WanderingEye() {
  const pathname = usePathname();
  const [visit, setVisit] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const schedule = () => {
      timer = setTimeout(() => {
        if (document.hidden || motion.matches || document.querySelector('[data-eye-paused="true"]')) {
          schedule();
          return;
        }
        setVisit(Math.random() < .5 ? "left" : "right");
        timer = setTimeout(() => {
          setVisit(null);
          schedule();
        }, 2600);
      }, 35000 + Math.random() * 35000);
    };
    const restart = () => {
      clearTimeout(timer);
      setVisit(null);
      if (!document.hidden && !motion.matches) schedule();
    };
    restart();
    document.addEventListener("visibilitychange", restart);
    motion.addEventListener("change", restart);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", restart);
      motion.removeEventListener("change", restart);
    };
  }, [pathname]);

  return visit && <div className={`wandering-eye from-${visit}`} aria-hidden="true"><CuriousEye reduced={false} /></div>;
}
