import { projectAlternates } from "@/lib/project-seo";
import { getJourneys } from "@/lib/localized-journeys";
import { notFound } from "next/navigation";
import { Universe } from "@/components/universe";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { alternates: projectAlternates(locale, getJourneys(locale)[0].id) };
}
export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Universe locale={locale} initialView="projects" />;
}
