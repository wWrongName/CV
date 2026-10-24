import type { MetadataRoute } from "next";
import { sectionIds } from "@/lib/workshop/sections";
import { pageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["ru", "en"] as const).flatMap(locale =>
    (["home", ...sectionIds] as const).map(section => {
      const { canonical, languages } = pageAlternates(locale, section);
      return { url: canonical, alternates: { languages } };
    }),
  );
}
