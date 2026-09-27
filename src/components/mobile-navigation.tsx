"use client";
import { useId, useRef, useState, type ReactNode } from "react";
import { messages, type Locale } from "@/lib/i18n";

export function MobileNavigation({ locale, className = "", children, open, onOpenChange }: {
  locale: Locale; className?: string; children: ReactNode;
  open?: boolean; onOpenChange?: (open: boolean) => void;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const expanded = open ?? localOpen;
  const setOpen = onOpenChange ?? setLocalOpen;
  const id = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  return <div className="header-navigation" onKeyDown={event => {
    if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); event.stopPropagation(); }
  }} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}>
    <button ref={toggle} type="button" className="mobile-menu-toggle" aria-label={locale === "ru" ? (expanded ? "Закрыть меню" : "Открыть меню") : (expanded ? "Close menu" : "Open menu")} aria-expanded={expanded} aria-controls={id} onClick={() => setOpen(!expanded)}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={expanded ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} /></svg>
    </button>
    <nav id={id} className={`mobile-navigation ${className}${expanded ? " is-open" : ""}`} aria-label={messages[locale].navigation} onClick={event => {
      if ((event.target as HTMLElement).closest("a")) setOpen(false);
    }}>{children}</nav>
  </div>;
}
