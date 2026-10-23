import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { Analytics } from "@/components/analytics";
import { WorkshopShell } from "@/components/workshop/shell";
import "@/components/workshop/workshop.css";
import "@/components/workshop/mobile-workshop.css";

export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: "ru" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const en = (await params).locale === "en";
  return {
    title: { default: en ? "WWN — Engineering Workshop" : "WWN — инженерная мастерская", template: "%s · WWN" },
    description: en ? "Ivan Velichko's independent engineering practice. Development, infrastructure, automation and technical research." : "Независимая инженерная практика Ивана Величко. Разработка, инфраструктура, автоматизация и технические исследования.",
  };
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body><WorkshopShell locale={locale}>{children}</WorkshopShell><Analytics /></body></html>;
}
