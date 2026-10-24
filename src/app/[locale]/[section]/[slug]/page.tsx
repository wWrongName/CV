import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getJourneys } from "@/lib/localized-journeys";
import { ProjectArchive } from "@/components/workshop/project-archive";
import { projectMetadata } from "@/lib/project-seo";

type Props = { params: Promise<{ locale: string; section: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return ["ru", "en"].flatMap(locale =>
    getJourneys("en").map(project => ({ locale, section: "projects", slug: project.id }))
  );
}
export async function generateMetadata({ params }: Props) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || section !== "projects" || !getJourneys(locale).some(p => p.id === slug)) notFound();
  return projectMetadata(locale, slug);
}
export default async function ProjectPage({ params }: Props) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || section !== "projects") notFound();
  const projects = getJourneys(locale);
  if (!projects.some(p => p.id === slug)) notFound();
  return <ProjectArchive projects={projects} locale={locale} initialProjectId={slug} />;
}
