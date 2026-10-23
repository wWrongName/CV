"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { sectionFromPath, type ObjectId } from "@/lib/workshop/sections";
import { DesktopWorkshop } from "./desktop-scene";
import { MobileWorkshopIndex } from "./mobile-index";
import { WorkshopPanel } from "./panel";
import { WorkshopInteractionProvider, useWorkshopInteraction } from "./interaction-provider";

function WorkshopShellContent({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const section = sectionFromPath(pathname, locale);
  const { send } = useWorkshopInteraction();
  const scene = useRef<HTMLDivElement>(null);
  const origin = useRef<ObjectId | null>(null);
  const onEnter = useCallback((id: ObjectId) => {
    origin.current = id;
  }, []);

  useEffect(() => {
    if (section) send({ type: "route-opened", target: section });
    else {
      send({ type: "route-closed" });
      if (origin.current) {
        const candidates = scene.current?.querySelectorAll<HTMLElement>(`[data-object="${origin.current}"]`);
        const visibleCandidates = candidates && Array.from(candidates).filter(element => {
          if (!element.getClientRects().length) return false;
          const bounds = element.getBoundingClientRect();
          return bounds.right > 0 && bounds.left < window.innerWidth && bounds.bottom > 0 && bounds.top < window.innerHeight;
        });
        const visible = visibleCandidates?.find(element => element.classList.contains("workshop-contact-plaque")) || visibleCandidates?.[0];
        visible?.focus({ preventScroll: true });
        origin.current = null;
      }
    }
  }, [section, pathname, locale, send]);

  const onClose = useCallback(() => {
    // Chapter anchors add history entries; closing must leave the section,
    // rather than stepping back through those entries.
    router.replace(`/${locale}`, { scroll: false });
  }, [locale, router]);

  if (section === undefined) return children;
  return <div className="workshop-shell" data-panel-open={Boolean(section)}>
    <div ref={scene} className="workshop-scene-root"><DesktopWorkshop locale={locale} onEnter={onEnter} /><MobileWorkshopIndex locale={locale} onEnter={onEnter} paused={Boolean(section)} /></div>
    {section ? <WorkshopPanel key={section} section={section} locale={locale} onClose={onClose}>{children}</WorkshopPanel> : children}
  </div>;
}

export function WorkshopShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <WorkshopInteractionProvider><WorkshopShellContent locale={locale}>{children}</WorkshopShellContent></WorkshopInteractionProvider>;
}
