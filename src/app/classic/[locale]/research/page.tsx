import { notFound } from "next/navigation";
import { ResearchDocument } from "@/components/research-document";
import { isLocale } from "@/lib/i18n";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return { title: (await params).locale === "en" ? "LLM security research" : "Исследование безопасности LLM" };
}
export default async function Research({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ResearchDocument locale={locale} />;
}
