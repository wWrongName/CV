"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { messages, type Locale } from "@/lib/i18n";
export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(ru|en)(?=\/|$)/, "");
  return <div className="language-switch" role="group" aria-label={messages[locale].language}>
    {(["ru", "en"] as const).map(language => <Link key={language} href={`/${language}${suffix}`} lang={language} hrefLang={language} aria-current={language === locale ? "page" : undefined}>{language.toUpperCase()}</Link>)}
  </div>;
}
