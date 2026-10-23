import type { Locale } from "@/lib/i18n";
import { getObjectLabel, type ObjectId } from "./sections";

const descriptions: Record<Locale, Record<ObjectId, string>> = {
  ru: {
    about: "Мой опыт, подход к инженерным задачам и инструменты, с которыми я работаю.",
    services: "Разработка приложений, автоматизация и инфраструктура — от идеи до работающей системы.",
    projects: "Реальные задачи, принятые решения и результаты работы над проектами.",
    research: "Технические исследования, эксперименты и проверка инженерных идей на практике.",
    blog: "Заметки о разработке, инфраструктуре и находках из повседневной работы.",
    experience: "Профессиональный опыт, навыки и образование. Резюме можно скачать в PDF.",
    process: "От обсуждения задачи до запуска и дальнейшей поддержки: как строится работа над проектом.",
    contact: "Расскажите о своей задаче — обсудим ее в Telegram или по электронной почте.",
  },
  en: {
    about: "My experience, approach to engineering problems and the tools I work with.",
    services: "Applications, automation and infrastructure — from an idea to a working system.",
    projects: "Real challenges, engineering decisions and the results of project work.",
    research: "Technical research, experiments and engineering ideas put to the test.",
    blog: "Notes on development, infrastructure and discoveries from everyday work.",
    experience: "Professional experience, skills and education. Download my resume as a PDF.",
    process: "From understanding the problem to launch and ongoing support: how we work on a project together.",
    contact: "Tell me about your project — let's discuss it on Telegram or by email.",
  },
};

export function getBoardCopy(id: ObjectId, locale: Locale) {
  return {
    title: id === "contact" ? (locale === "ru" ? "Контакты" : "Contact") : getObjectLabel(id, locale).title,
    description: descriptions[locale][id],
  };
}
