export type ArticleVersion = {
  language: "ru" | "en";
  platform: "Хабр" | "DEV";
  title: string;
  href: string;
};
export type TechnicalArticle = {
  id: string;
  topics: string[];
  versions: ArticleVersion[];
};
export type ScientificPublication = {
  id: string;
  title: string;
  year: number;
  venue: string;
  authors: string[];
  pages: string;
  kind: "journal" | "conference";
  language: "ru" | "en";
  href: string;
  doi?: string;
  issue?: string;
  format?: "pdf";
};

// Language editions belong to one material; they are not separate articles.
export const technicalArticles: TechnicalArticle[] = [
  {
    id: "kubernetes-network",
    topics: ["Kubernetes", "kind", "Cilium"],
    versions: [{ language: "ru", platform: "Хабр", title: "Сеть kubernetes без магии: трассировка пакета на kind + Cilium", href: "https://habr.com/ru/articles/1073254/" }],
  },
  {
    id: "wildcard-certificates",
    topics: ["TLS", "DNS", "Автоматизация"],
    versions: [
      { language: "ru", platform: "Хабр", title: "Автоматизация wildcard-сертификатов", href: "https://habr.com/ru/articles/1071764/" },
      { language: "en", platform: "DEV", title: "Automating wildcard certificates: avoid complex NS servers", href: "https://dev.to/wwr0ngn4m3/automating-wildcard-certificates-avoid-complex-ns-servers-27n2" },
    ],
  },
  {
    id: "sentry-incident",
    topics: ["Sentry", "Observability"],
    versions: [{ language: "en", platform: "DEV", title: "Investigating a Sentry Incident. Shadowboxing", href: "https://dev.to/wwr0ngn4m3/investigating-a-sentry-incident-1hbl" }],
  },
  {
    id: "llm-vrf-lora",
    topics: ["LLM", "VRF", "LoRA"],
    versions: [{ language: "en", platform: "DEV", title: "Defending LLM Agents from Gradient-Based Adversarial Attacks: A VRF+LoRA Approach", href: "https://dev.to/wwr0ngn4m3/defending-llm-agents-from-gradient-based-adversarial-attacks-a-vrflora-approach-di4" }],
  },
  {
    id: "database-migration",
    topics: ["MariaDB", "PostgreSQL", "Debezium"],
    versions: [
      { language: "ru", platform: "Хабр", title: "Миграция MariaDB → PostgreSQL без даунтайма: почему обычные утилиты не подошли и как мы сделали это через Debezium", href: "https://habr.com/ru/articles/1061438/" },
      { language: "en", platform: "DEV", title: "Zero-Downtime MariaDB PostgreSQL Migration: Why the Usual Tools Fell Short, and How Debezium CDC Solved It", href: "https://dev.to/wwr0ngn4m3/zero-downtime-mariadb-postgresql-migration-why-the-usual-tools-fell-short-and-how-debezium-cdc-424f" },
    ],
  },
  {
    id: "diy-assistant",
    topics: ["LLM", "Python", "JavaScript"],
    versions: [{ language: "ru", platform: "Хабр", title: "DE-1. DIY ассистент на LLM", href: "https://habr.com/ru/articles/853708/" }],
  },
];

// Dissertation bibliography: journal articles 18–20, 22 and conference papers 24–25.
// Journal metadata verified on publishers’ sites; IEEE records verified with Crossref.
export const scientificPublications: ScientificPublication[] = [

  {
    id: "llm-defense-review-2025",
    kind: "journal",
    language: "ru",
    title: "От эксплуатации к защите: анализ методов защиты от атак на языковые модели",
    year: 2025,
    venue: "Проблемы информационной безопасности. Компьютерные системы",
    issue: "№ 3",
    authors: ["Величко И. С.", "Беззатеев С. В."],
    pages: "110–120",
    href: "https://jisp.spbstu.ru/article/2025.23.10/",
    doi: "10.48612/jisp/2nkk-unee-uuzv",
  },
  {
    id: "llm-attacks-review-2025",
    kind: "journal",
    language: "ru",
    title: "От эксплуатации к защите: анализ атак на большие языковые модели",
    year: 2025,
    venue: "Проблемы информационной безопасности. Компьютерные системы",
    issue: "№ 1",
    authors: ["Величко И. С.", "Беззатеев С. В."],
    pages: "43–58",
    href: "https://jisp.spbstu.ru/article/2025.20.4/",
    doi: "10.48612/jisp/mbvv-n1u7-z7be",
  },
  {
    id: "vrf-journal-2024",
    kind: "journal",
    language: "ru",
    title: "Распределенный протокол генерации псевдослучайных чисел на основе алгоритма проверяемой случайной функции",
    year: 2024,
    venue: "Информационно-управляющие системы",
    issue: "№ 3",
    authors: ["Величко И. С.", "Афанасьева А. В.", "Беззатеев С. В."],
    pages: "32–40",
    href: "https://i-us.ru/index.php/ius/article/view/16284",
    doi: "10.31799/1684-8853-2024-3-32-40",
  },
  {
    id: "vrf-optimized-2024",
    kind: "conference",
    language: "en",
    href: "https://doi.org/10.1109/ICCT62929.2024.10874948",
    title: "Optimized VRF-Driven Distributed Randomness Generation Protocol",
    year: 2024,
    venue: "2024 8th International Conference on Information, Control, and Communication Technologies (ICCT)",
    authors: ["Ivan Velichko", "Sergey Bezzateev", "Alexandra Afanasyeva"],
    pages: "1–5",
    doi: "10.1109/ICCT62929.2024.10874948",
  },
  {
    id: "vrf-distributed-2023",
    kind: "conference",
    language: "en",
    href: "https://doi.org/10.1109/ICSC60084.2023.10349973",
    title: "Distributed Pseudorandom Generation Protocol Based on VRF Algorithm",
    year: 2023,
    venue: "2023 3rd Intelligent Cybersecurity Conference (ICSC)",
    authors: ["Ivan Velichko", "Sergey Vanurin", "Alexandra Afanasyeva", "Sergey Bezzateev", "Mikhail Sayfullin", "Konstantin Zhidanov"],
    pages: "32–38",
    doi: "10.1109/ICSC60084.2023.10349973",
  },
  {
    id: "lora-certification-2026",
    kind: "journal",
    language: "ru",
    title: "Механизм сертификации и верификации LoRA адаптеров",
    year: 2026,
    venue: "Экономика и качество систем связи",
    issue: "№ 1 (39)",
    authors: ["Величко И. С."],
    pages: "87–94",
    href: "https://journal-ekss.ru/wp-content/uploads/2026/03/87-94-Величко.pdf",
    format: "pdf",
  },
];
