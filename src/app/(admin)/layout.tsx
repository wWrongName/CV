import type { Metadata } from "next";
import "../globals.css";
import "./admin.css";

export const metadata: Metadata = { title: "Статистика сайта", robots: { index: false, follow: false } };
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ru" data-theme="dark"><body>{children}</body></html>;
}
