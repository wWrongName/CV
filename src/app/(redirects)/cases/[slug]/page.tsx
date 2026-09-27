import { notFound, redirect } from "next/navigation";
const employers: Record<string, string> = { enecuum: "enecuum", codeburst: "codeburst", delivery: "zoloto585" };
export function generateStaticParams() { return Object.keys(employers).map(slug => ({ slug })); }
export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.hasOwn(employers, slug)) notFound();
  redirect(`/ru/experience#${employers[slug]}`);
}
