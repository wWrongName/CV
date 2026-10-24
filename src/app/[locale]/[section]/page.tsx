import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { sectionIds, type SectionId } from "@/lib/workshop/sections";
import { WorkshopContent } from "@/components/workshop/content";

import { getJourneys } from "@/lib/localized-journeys";
import { projectMetadata } from "@/lib/project-seo";
import { pageMetadata, siteUrl } from "@/lib/seo";
import russianResume from "@/lib/resume.json";
import englishResume from "@/lib/resume.en.json";

export const dynamicParams = false;
export function generateStaticParams() { return sectionIds.map(section => ({ section })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !sectionIds.includes(section as SectionId)) notFound();
  if (section === "projects") return projectMetadata(locale, getJourneys(locale)[0].id);
  return pageMetadata(locale, section as SectionId);
}
export default async function SectionPage({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !sectionIds.includes(section as SectionId)) notFound();
  const resume = locale === "en" ? englishResume : russianResume;
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/${locale}/experience#profile`,
    url: `${siteUrl}/${locale}/experience`,
    inLanguage: locale,
    mainEntity: {
      "@type": "Person", "@id": `${siteUrl}/#person`,
      name: resume.fullName, url: `${siteUrl}/${locale}/experience`,
    },
  };
  return <>
    {section === "experience" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />}
    <WorkshopContent locale={locale} section={section as SectionId} />
  </>;
}
