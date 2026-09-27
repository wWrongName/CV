import Link from "next/link";
export default function NotFound() {
  return (
    <main className="case-document">
      <span className="eyebrow">404 / ВНЕ КАРТЫ</span>
      <h1>Здесь пока нет системы.</h1>
      <Link className="dark-button" href="/">
        Вернуться к кейсам ↗
      </Link>
    </main>
  );
}
