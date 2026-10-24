import type { Locale } from "@/lib/i18n";

export const sectionIds = ["about", "services", "projects", "research", "blog", "experience", "process", "contact"] as const;
export type SectionId = typeof sectionIds[number];
export type ObjectId = SectionId;
export const telegramHref = "https://t.me/wr0ngn4m3";
export const emailHref = "mailto:wwr0ngn4m3@gmail.com";

const labels: Record<Locale, Record<ObjectId, { title: string; detail: string }>> = {
  ru: {
    about: { title: "Обо мне", detail: "Человек за мастерской" },
    services: { title: "Решения", detail: "Разработка, инфраструктура, автоматизация" },
    projects: { title: "Кейсы", detail: "Задачи, решения и результаты" },
    research: { title: "Исследования", detail: "Технические работы и R&D" },
    blog: { title: "Блог", detail: "Инженерные заметки" },
    experience: { title: "Резюме", detail: "Опыт, навыки и PDF" },
    process: { title: "Процесс", detail: "Как будем работать" },
    contact: { title: "Контакты", detail: "Telegram и электронная почта" },
  },
  en: {
    about: { title: "About me", detail: "The person behind the workshop" },
    services: { title: "Solutions", detail: "Development, infrastructure, automation" },
    projects: { title: "Cases", detail: "Challenges, decisions and outcomes" },
    research: { title: "Research", detail: "Technical studies and R&D" },
    blog: { title: "Journal", detail: "Engineering notes" },
    experience: { title: "Resume", detail: "Experience, skills and PDF" },
    process: { title: "Process", detail: "How we work together" },
    contact: { title: "Contact", detail: "Telegram and email" },
  },
};

export const getObjectLabel = (id: ObjectId, locale: Locale) => labels[locale][id];
export const sectionHref = (id: SectionId, locale: Locale) => `/${locale}/${id}`;

export const projectHref = (locale: Locale, id: string) => `/${locale}/projects/${id}`;

/** Rendering mode never enters the URL: desktop and mobile share these routes. */
export function sectionFromPath(pathname: string, locale: Locale): SectionId | null | undefined {
  const path = pathname.replace(/\/$/, "");
  if (path === `/${locale}`) return null;
  if (path.startsWith(`/${locale}/projects/`)) return "projects";
  return sectionIds.find(id => path === sectionHref(id, locale));
}

export const workshopCopy = {
  ru: {
    title: "WWN — инженерные решения",
    introduction: "Приложения. Инфраструктура. Автоматизация.",
    greeting: "Привет, я Иван.",
    boardIntro: "Разрабатываю сервисы и автоматизирую процессы. Помогаю с инфраструктурой, запуском и поддержкой.",
    invitation: "Обсудим проект?",
    hint: "Выбери предмет — откроется его история",
    directory: "Все разделы", back: "Назад", close: "Закрыть раздел",
    loading: "Загружается", missing: "Изображение недоступно", retry: "Попробовать снова",
  },
  en: {
    title: "WWN — engineering solutions",
    introduction: "Applications. Infrastructure. Automation.",
    greeting: "Hi! I'm Ivan.",
    boardIntro: "I build services and automate processes. I help with infrastructure, launch and ongoing support.",
    invitation: "Let's talk about your project.",
    hint: "Choose an object to explore its story",
    directory: "All sections", back: "Back", close: "Close section",
    loading: "Loading", missing: "Image unavailable", retry: "Try again",
  },
};
