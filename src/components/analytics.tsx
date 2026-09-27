"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics-client";

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => { trackEvent("page_view", pathname); }, [pathname]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[download]");
      if (!anchor) return;
      const path = new URL(anchor.href).pathname;
      if (path === "/resume-ivan-velichko.pdf") trackEvent("pdf_download", "ru");
      if (path === "/resume-ivan-velichko-en.pdf") trackEvent("pdf_download", "en");
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
