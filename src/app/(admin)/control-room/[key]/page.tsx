import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import { adminConfig, allowedAdminRequest, sessionCookie, validSession } from "@/lib/server/admin-auth";
import { readMetrics, type EventKind, type EventRow } from "@/lib/server/storage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
const projectNames: Record<string, string> = { paas: "PaaS-платформа", operations: "Kubernetes и CI/CD", "delivery-platform": "Платформа разработки", resilience: "Anti-DDoS и устойчивость", "llm-security": "AI" };
function Breakdown({ title, kind, rows }: { title: string; kind: EventKind; rows: EventRow[] }) {
  const totals = new Map<string, number>();
  rows.filter(row => row.kind === kind).forEach(row => totals.set(row.value, (totals.get(row.value) || 0) + row.count));
  return <section className="admin-panel"><h2>{title}</h2>{totals.size ? <table><thead><tr><th>Раздел</th><th>Количество</th></tr></thead><tbody>{[...totals].sort((a, b) => b[1] - a[1]).map(([value, count]) => <tr key={value}><td>{projectNames[value] || value}</td><td>{count.toLocaleString("ru-RU")}</td></tr>)}</tbody></table> : <p className="admin-muted">Пока нет событий.</p>}</section>;
}
export default async function AdminPage({ params, searchParams }: { params: Promise<{ key: string }>; searchParams: Promise<{ days?: string; error?: string }> }) {
  const config = adminConfig();
  if (!config || (await params).key !== config.key || !allowedAdminRequest(new Headers(await headers()), config)) notFound();
  const base = `/control-room/${config.key}`;
  const query = await searchParams;
  if (!validSession((await cookies()).get(sessionCookie)?.value, config)) {
    return <main className="admin-login"><div className="eyebrow">ИВАН ВЕЛИЧКО / САЙТ</div><h1>Вход в статистику</h1><p className="admin-muted">Доступ владельца сайта</p>
      <form method="post" action={`${base}/login`}>
        <label htmlFor="username">Логин</label><input id="username" name="username" autoComplete="username" required maxLength={64} />
        <label htmlFor="password">Пароль</label><input id="password" name="password" type="password" autoComplete="current-password" required maxLength={128} />
        {query.error && <p className="admin-error" role="alert">Неверный логин или пароль.</p>}
        <button type="submit" className="admin-button">Войти</button>
      </form><a className="admin-muted" href="/ru">← На сайт</a></main>;
  }
  const days = [7, 30, 90].includes(Number(query.days)) ? Number(query.days) : 30;
  const rows = readMetrics(days);
  const total = (kind: EventKind) => rows.filter(row => row.kind === kind).reduce((sum, row) => sum + row.count, 0);
  const daily = Array.from({ length: days }, (_, index) => {
    const day = new Date(Date.now() - (days - index - 1) * 86400000).toISOString().slice(0, 10);
    return { day, count: rows.filter(row => row.day === day && row.kind === "page_view").reduce((sum, row) => sum + row.count, 0) };
  });
  const peak = Math.max(1, ...daily.map(day => day.count));
  return <main className="admin-dashboard">
    <header className="admin-header"><div><div className="eyebrow">ИВАН ВЕЛИЧКО / САЙТ</div><h1>Статистика</h1></div><nav><a href="/ru">Открыть сайт ↗</a><form method="post" action={`${base}/logout`}><button className="admin-button secondary" type="submit">Выйти</button></form></nav></header>
    <div className="admin-toolbar"><p>События за последние {days} дней · UTC</p><form method="get"><label htmlFor="days">Период</label><select id="days" name="days" defaultValue={days}><option value="7">7 дней</option><option value="30">30 дней</option><option value="90">90 дней</option></select><button type="submit" className="admin-button secondary">Показать</button></form></div>
    {process.env.ANALYTICS_ENABLED !== "true" && <p className="admin-notice">Сбор статистики выключен в настройках сервера.</p>}
    <section className="admin-totals" aria-label="Основные показатели">{([ ["Просмотры страниц", "page_view"], ["Открытия проектов", "project_open"], ["Нажатия «Скачать PDF»", "pdf_download"] ] as const).map(([label, kind]) => <div key={kind}><span>{label}</span><strong>{total(kind).toLocaleString("ru-RU")}</strong></div>)}</section>
    <section className="admin-panel"><h2>Просмотры по дням</h2><div className="admin-days">{daily.map(({ day, count }) => <div key={day}><time dateTime={day}>{day.slice(5).split("-").reverse().join(".")}</time><progress max={peak} value={count} aria-label={`${day}: ${count} просмотров`} /><span>{count}</span></div>)}</div></section>
    <div className="admin-grid"><Breakdown title="Страницы" kind="page_view" rows={rows}/><Breakdown title="Проекты" kind="project_open" rows={rows}/><Breakdown title="PDF по языкам" kind="pdf_download" rows={rows}/></div>
    <footer className="admin-footnote">Считаются события, а не уникальные люди. PDF — нажатия кнопки, не подтверждение загрузки файла. Без tracking cookies и хранения IP; данные хранятся 365 дней. Сессия завершается после 30 минут бездействия или через 8 часов после входа.</footer>
  </main>;
}
