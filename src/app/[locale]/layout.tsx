import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { siteName } from "@/lib/seo";
import { Analytics } from "@/components/analytics";
import { WorkshopShell } from "@/components/workshop/shell";
import "@/components/workshop/workshop.css";
import "@/components/workshop/mobile-workshop.css";

export const dynamicParams = false;
export function generateStaticParams() { return [{ locale: "ru" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const en = (await params).locale === "en";
  const title = siteName;
  const description = en
    ? "Web service development, infrastructure and automation. Projects, research and Ivan Velichko's experience."
    : "Разработка веб-сервисов, инфраструктура и автоматизация. Проекты, исследования и опыт Ивана Величко.";
  return {
    metadataBase: new URL("https://wwncv.tech"),
    title: { default: title, template: "%s · WWN" },
    description,
    openGraph: { title, description, siteName: title, type: "website", locale: en ? "en_US" : "ru_RU" },
    twitter: { card: "summary", title, description },
  };
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={locale}><body><WorkshopShell locale={locale}>{children}</WorkshopShell><Analytics /></body></html>;
}
