import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { caseStories } from "@/lib/workshop/case-stories";
import { projectHref } from "@/lib/workshop/sections";
import { pageMetadata, siteUrl } from "@/lib/seo";

export function projectAlternates(locale: Locale, id: string) {
  return { canonical: `${siteUrl}${projectHref(locale, id)}`, languages: {
    ru: `${siteUrl}${projectHref("ru", id)}`, en: `${siteUrl}${projectHref("en", id)}`,
  } };
}
export function projectMetadata(locale: Locale, id: string): Metadata {
  const story = caseStories[id];
  const title = story.title[locale];
  const description = [story.summary[locale], story.context?.[locale]].filter(Boolean).join(" ");
  const base = pageMetadata(locale, "projects");
  const alternates = projectAlternates(locale, id);
  return { ...base, title: { absolute: `${title} · WWN` }, description, alternates,
    openGraph: { ...base.openGraph, title, description, url: alternates.canonical },
    twitter: { card: "summary", title, description },
  };
}
