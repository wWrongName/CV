import type { Locale } from "./i18n";

/** HTTP language preferences normally follow the browser/system language settings. */
export function preferredLocale(acceptLanguage: string | null): Locale {
  const preferences = (acceptLanguage || "").split(",").map((entry, index) => {
    const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
    const value = parameters.find(parameter => parameter.trim().startsWith("q="));
    const quality = value === undefined ? 1 : Number(value.trim().slice(2));
    return { language: tag.split("-")[0], quality, index };
  }).filter(({ quality }) => Number.isFinite(quality) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);
  return preferences.find(({ language }) => language === "ru" || language === "en")?.language as Locale | undefined || "en";
}
