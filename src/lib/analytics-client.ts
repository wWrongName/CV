"use client";
export function trackEvent(kind: "page_view" | "project_open" | "pdf_download", value: string) {
  if (process.env.NODE_ENV !== "production" || navigator.doNotTrack === "1") return;
  void fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, value }), credentials: "omit", mode: "same-origin", keepalive: true }).catch(() => {});
}
