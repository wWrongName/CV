import { notFound } from "next/navigation";
import { ResumeDocument } from "@/components/resume-document";
import { isLocale } from "@/lib/i18n";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { return { title: (await params).locale === "en" ? "Resume" : "Резюме" }; }
export default async function Experience({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ResumeDocument locale={locale} />;
}
