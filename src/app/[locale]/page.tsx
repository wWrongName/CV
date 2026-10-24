import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  if (!isLocale((await params).locale)) notFound();
  // The persistent locale layout owns the scene; sections are URL-backed pages.
  return null;
}
