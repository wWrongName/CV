"use client";
import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n";

const key = "resume-theme";
type Theme = "dark" | "light";
const snapshot = (): Theme => document.documentElement.dataset.theme === "light" ? "light" : "dark";
const serverSnapshot = (): Theme => "dark";
function subscribe(notify: () => void) {
  const sync = (event: StorageEvent) => {
    if (event.key === key || event.key === null) {
      document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
      notify();
    }
  };
  window.addEventListener("resume-theme-change", notify);
  window.addEventListener("storage", sync);
  return () => {
    window.removeEventListener("resume-theme-change", notify);
    window.removeEventListener("storage", sync);
  };
}
export function useTheme() { return useSyncExternalStore(subscribe, snapshot, serverSnapshot); }
export function ThemeSwitch({ locale }: { locale: Locale }) {
  const theme = useTheme();
  const label = locale === "ru"
    ? theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"
    : theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(key, next); } catch { /* Theme still works when storage is unavailable. */ }
    window.dispatchEvent(new Event("resume-theme-change"));
  }
  return <button type="button" className="theme-switch" onClick={toggle} aria-label={label} title={label}>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {theme === "dark" ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="M20.5 14a8.6 8.6 0 0 1-10.5-10.5A8.7 8.7 0 1 0 20.5 14Z"/>}
    </svg>
  </button>;
}
