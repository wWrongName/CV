import type { SectionId } from "./sections";

type Copy = { ru: string; en: string };
const c = (ru: string, en: string): Copy => ({ ru, en });
/** About is the first slide. Every other section has one scene and one route. */
export const mobileScenes: { id: Exclude<SectionId, "about">; title: Copy; description: Copy }[] = [
  { id: "services", title: c("Решения", "Solutions"), description: c("Разработка сервисов, инфраструктура и автоматизация под конкретную задачу.", "Service development, infrastructure and automation for a specific challenge.") },
  { id: "projects", title: c("Кейсы", "Cases"), description: c("Реальные задачи, выбранные решения и результаты проектов.", "Real challenges, the solutions and the project outcomes.") },
  { id: "process", title: c("Процесс", "Process"), description: c("От первого разговора до запуска и поддержки.", "From the first conversation to launch and support.") },
  { id: "blog", title: c("Блог", "Journal"), description: c("Инженерные заметки и статьи из практики.", "Engineering notes and articles from practice.") },
  { id: "research", title: c("Исследования", "Research"), description: c("Технические работы, эксперименты и научные публикации.", "Technical studies, experiments and scientific publications.") },
  { id: "experience", title: c("Резюме", "Resume"), description: c("Опыт работы, навыки и резюме в PDF.", "Work experience, skills and a PDF resume.") },
  { id: "contact", title: c("Есть задача?", "Have a project in mind?"), description: c("Напиши в Telegram или по почте — обсудим.", "Get in touch through Telegram or email.") },
];
