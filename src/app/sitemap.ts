import type { MetadataRoute } from "next";
import { sectionIds } from "@/lib/workshop/sections";
import { pageAlternates } from "@/lib/seo";
import { projectAlternates } from "@/lib/project-seo";
import { getJourneys } from "@/lib/localized-journeys";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["ru", "en"] as const).flatMap(locale => [
    ...(["home", ...sectionIds] as const).filter(section => section !== "projects").map(section => {
      const { canonical, languages } = pageAlternates(locale, section);
      return { url: canonical, alternates: { languages } };
    }),
    ...getJourneys(locale).map(project => {
      const { canonical, languages } = projectAlternates(locale, project.id);
      return { url: canonical, alternates: { languages } };
    }),
  ]);
}
