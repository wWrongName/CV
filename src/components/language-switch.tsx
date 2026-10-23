"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { messages, type Locale } from "@/lib/i18n";
export function LanguageSwitch({ locale, anchor }: { locale: Locale; anchor?: string }) {
  const pathname = usePathname();
  const prefix = pathname.startsWith("/classic/") ? "/classic" : "";
  const suffix = pathname.replace(/^\/(?:classic\/)?(ru|en)(?=\/|$)/, "");
  return <div className="language-switch" role="group" aria-label={messages[locale].language}>
    {(["ru", "en"] as const).map(language => <Link key={language} href={`${prefix}/${language}${suffix}${anchor ? `#${anchor}` : ""}`} scroll={anchor ? false : undefined} lang={language} hrefLang={language} aria-current={language === locale ? "page" : undefined}>{language.toUpperCase()}</Link>)}
  </div>;
}
