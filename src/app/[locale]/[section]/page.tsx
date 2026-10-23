import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { sectionIds, getObjectLabel, type SectionId } from "@/lib/workshop/sections";
import { WorkshopContent } from "@/components/workshop/content";

export const dynamicParams = false;
export function generateStaticParams() { return sectionIds.map(section => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !sectionIds.includes(section as SectionId)) notFound();
  return { title: getObjectLabel(section as SectionId, locale).title };
}
export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !sectionIds.includes(section as SectionId)) notFound();
  return <WorkshopContent locale={locale} section={section as SectionId} />;
}
