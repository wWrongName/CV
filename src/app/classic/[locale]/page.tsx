import { pageAlternates } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Universe } from "@/components/universe";
import { isLocale } from "@/lib/i18n";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { alternates: pageAlternates(locale, "home") };
}
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Universe locale={locale} />;
}
