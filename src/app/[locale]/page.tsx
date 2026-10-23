import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  if (!isLocale((await params).locale)) notFound();
  // The persistent locale layout owns the scene; sections are URL-backed pages.
  return null;
}
