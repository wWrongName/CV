"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { CarvedChevron } from "./carved-chevron";
import { getObjectLabel, workshopCopy, type SectionId } from "@/lib/workshop/sections";

export function WorkshopPanel({ locale, section, onClose, children }: { locale: Locale; section: SectionId; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLAnchorElement>(null);
  const ui = workshopCopy[locale];
  useLayoutEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    // `open` supplies readable server-rendered content even without JavaScript.
    // Promote to a native modal after hydration for inert background + focus trap.
    dialog.close();
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    return () => { dialog.close(); document.documentElement.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={ref} open className="workshop-panel" data-section={section} aria-labelledby="workshop-panel-title"
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}>
    <header className="workshop-panel-header"><span className="workshop-panel-mark" aria-hidden="true">WWN</span><h2 id="workshop-panel-title">{getObjectLabel(section, locale).title}</h2>
      {section === "experience" && <a className="workshop-panel-pdf" href={locale === "ru" ? "/resume-ivan-velichko.pdf" : "/resume-ivan-velichko-en.pdf"} download>PDF ↓</a>}
      <Link ref={closeRef} href={`/${locale}`} scroll={false} className="workshop-panel-close" aria-label={ui.back}
        onClick={event => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onClose(); } }}><CarvedChevron direction="left" tone="text" className="workshop-back-chevron" /><span>{ui.back}</span><b aria-hidden="true">×</b></Link>
    </header>
    <div className="workshop-panel-body" key={section}>{children}</div>
  </dialog>;
}
