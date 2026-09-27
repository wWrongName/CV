import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@/components/analytics";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import "../globals.css";
export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: "ru" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? { title: { default: "Ivan Velichko — development, infrastructure and management", template: "%s · Ivan Velichko" }, description: "Fullstack development, frontend coordination and infrastructure automation. Engineering projects, applied AI research and a full resume." } : { title: { default: "Иван Величко — разработка, инфраструктура и менеджмент", template: "%s · Иван Величко" }, description: "Fullstack-разработка, координация frontend и автоматизация инфраструктуры. Проекты, AI-исследование и полное резюме Ивана Величко." };
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale} data-theme="dark" suppressHydrationWarning><head><Script id="resume-theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('resume-theme')==='light'?'light':'dark'}catch{}` }} /></head><body>{children}<Analytics /></body></html>;
}
