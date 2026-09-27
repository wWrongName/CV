import { notFound } from "next/navigation";
import { Universe } from "@/components/universe";
import { isLocale } from "@/lib/i18n";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Universe locale={locale} initialView="projects" />;
}
