import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { SectionId } from "@/lib/workshop/sections";

export const siteUrl = "https://wwncv.tech";
export const siteName = "WWN - IT solutions";
type PageId = SectionId | "home";
const copy: Record<Locale, Record<PageId, [string, string]>> = {
  en: {
    home: ["Ivan Velichko — DevOps, infrastructure & web development", "Web development, DevOps and automation. Projects and contact details."],
    about: ["About Ivan Velichko — independent engineer", "Meet Ivan Velichko: fullstack development, DevOps, infrastructure automation and team process management. Explore experience and engineering projects."],
    services: ["DevOps consulting, Kubernetes & CI/CD services", "Project-based infrastructure and platform engineering, Kubernetes, CI/CD automation, monitoring and web service development with Ivan Velichko."],
    projects: ["Engineering projects — Kubernetes, CI/CD & platforms", "Explore Ivan Velichko's engineering projects: PaaS, Kubernetes delivery workflows, developer platforms, LLMOps and infrastructure reliability."],
    research: ["LLM security research — Ivan Velichko", "Research into language model security: LoRA parameter shifts, attack evaluation and computation auditing. Methods, measured results and limitations."],
    blog: ["Engineering publications & notes — Ivan Velichko", "Technical publications and engineering notes by Ivan Velichko. Explore published work, research and practical engineering experience."],
    experience: ["Ivan Velichko CV — DevOps & fullstack experience", "Ivan Velichko's experience with Kubernetes, GCP, Terraform, GitLab CI, Argo CD and observability, alongside fullstack development. Read the CV or download the PDF."],
    process: ["Project delivery & support — how I work", "How engineering engagements work: discuss the challenge, agree scope and acceptance criteria, implement, validate, hand over and arrange ongoing support."],
    contact: ["Contact Ivan Velichko — discuss an engineering project", "Contact Ivan Velichko by Telegram or email to discuss infrastructure, DevOps automation or web service development for your project."],
  },
  ru: {
    home: ["Иван Величко — DevOps, инфраструктура и веб-разработка", "Разработка сервисов, DevOps и автоматизация. Проекты и контакты."],
    about: ["Иван Величко — независимый инженер", "Fullstack-разработка, DevOps, автоматизация инфраструктуры и управление процессами команды. Опыт и инженерные проекты Ивана Величко."],
    services: ["Услуги DevOps: Kubernetes, CI/CD и инфраструктура", "Проектная работа с инфраструктурой и платформами, Kubernetes, автоматизацией CI/CD, мониторингом и разработкой веб-сервисов. Иван Величко."],
    projects: ["Инженерные кейсы — Kubernetes, CI/CD и платформы", "Проекты Ивана Величко: PaaS, доставка приложений в Kubernetes, платформы разработки, LLMOps и надёжность инфраструктуры. Задачи, решения и результаты."],
    research: ["Исследование безопасности LLM — Иван Величко", "Исследование безопасности языковых моделей: сдвиги параметров LoRA, оценка атак и аудит вычислений. Методика, измеренные результаты и ограничения."],
    blog: ["Инженерные публикации и заметки — Иван Величко", "Технические публикации и инженерные заметки Ивана Величко. Опубликованные работы, исследования и практический опыт."],
    experience: ["Резюме Ивана Величко — DevOps и fullstack", "Опыт Ивана Величко: Kubernetes, GCP, Terraform, GitLab CI, Argo CD, мониторинг и fullstack-разработка. Полное резюме и PDF для скачивания."],
    process: ["Как я работаю — реализация и сопровождение проектов", "Этапы инженерного проекта: обсуждение задачи, согласование объёма и критериев, реализация, проверка, передача результата и сопровождение."],
    contact: ["Связаться с Иваном Величко — обсудить проект", "Telegram и электронная почта Ивана Величко. Обсудить инфраструктуру, автоматизацию DevOps или разработку веб-сервиса для вашего проекта."],
  },
};

export function pageAlternates(locale: Locale, section: PageId = "home") {
  const suffix = section === "home" ? "" : `/${section}`;
  return { canonical: `${siteUrl}/${locale}${suffix}`, languages: {
    ru: `${siteUrl}/ru${suffix}`, en: `${siteUrl}/en${suffix}`,
  } };
}

export function pageMetadata(locale: Locale, section: PageId = "home"): Metadata {
  const [title, description] = copy[locale][section];
  const alternates = pageAlternates(locale, section);
  const shareTitle = section === "home" ? siteName : title;
  return {
    title: { absolute: `${title} · WWN` }, description, alternates,
    openGraph: { title: shareTitle, description, url: alternates.canonical, siteName, type: "website", locale: locale === "en" ? "en_US" : "ru_RU", alternateLocale: locale === "en" ? "ru_RU" : "en_US" },
    twitter: { card: "summary", title: shareTitle, description },
  };
}
