import type { Locale } from "@/lib/i18n";

type Copy = [string, string];
type Diagram = { title: Copy; nodes: [Copy, Copy, Copy]; detail: [string, string, string]; loop: Copy };
const diagrams: Record<string, Diagram> = {
  home: { title: ["От кода до работающего сервиса", "From code to a running service"], nodes: [["Репозиторий", "Repository"], ["Проверки", "Checks"], ["Сервис", "Service"]], detail: ["GIT", "BUILD / TEST", "RELEASE"], loop: ["Логи · метрики · обратная связь", "Logs · metrics · feedback"] },
  services: { title: ["Разработка и инфраструктура", "Development & infrastructure"], nodes: [["Интерфейс", "Interface"], ["Приложение", "Application"], ["Среда", "Runtime"]], detail: ["WEB", "API / LOGIC", "INFRASTRUCTURE"], loop: ["Наблюдаемость и поддержка", "Observability & support"] },
  projects: { title: ["Проектные решения", "Project work"], nodes: [["Задача", "Problem"], ["Решение", "Solution"], ["Результат", "Outcome"]], detail: ["CONTEXT", "DESIGN / BUILD", "REVIEW"], loop: ["Контекст задачи и принятые решения", "Problem context & engineering decisions"] },
  paas: { title: ["Запуск проекта в облаке", "Launching a project in the cloud"], nodes: [["Репозиторий", "Repository"], ["Подготовка", "Preparation"], ["Приложение", "Application"]], detail: ["GITHUB / GITLAB", "STACK / DEPENDENCIES", "URL / LOGS"], loop: ["От исходного кода до доступного приложения", "From source code to an accessible application"] },
  llmops: { title: ["Рабочий контур AI-сервиса", "AI service architecture"], nodes: [["Приложение", "Application"], ["Шлюз", "Gateway"], ["Модель", "Model"]], detail: ["REQUEST", "ACCESS / LIMITS", "INFERENCE"], loop: ["Мониторинг · трассировки · оценка ответов", "Monitoring · traces · evaluation"] },
  operations: { title: ["Инфраструктура как код", "Infrastructure as code"], nodes: [["Конфигурация", "Configuration"], ["GitLab", "GitLab"], ["Среда", "Runtime"]], detail: ["VERSION CONTROL", "PIPELINE", "INFRASTRUCTURE"], loop: ["Повторяемые изменения и контроль состояния", "Repeatable changes & state monitoring"] },
  "delivery-platform": { title: ["Доставка изменений", "Software delivery"], nodes: [["Код", "Code"], ["Сборка", "Build"], ["Релиз", "Release"]], detail: ["COMMIT", "ARTIFACT", "DEPLOY"], loop: ["Единый порядок выпуска приложений", "A shared release process for applications"] },
  resilience: { title: ["Обработка инцидента", "Incident response"], nodes: [["Сигнал", "Signal"], ["Диагностика", "Diagnosis"], ["Действие", "Action"]], detail: ["ALERT", "RUNBOOK", "RESPONSE"], loop: ["Проверка восстановления и разбор причин", "Verify recovery & investigate the cause"] },
  about: { title: ["Инженерный подход", "Engineering approach"], nodes: [["Контекст", "Context"], ["Решение", "Solution"], ["Практика", "Practice"]], detail: ["UNDERSTAND", "DESIGN", "BUILD"], loop: ["Понятные решения и проверяемый результат", "Clear decisions & verifiable results"] },
  experience: { title: ["Опыт и инструменты", "Experience & tools"], nodes: [["Разработка", "Development"], ["Автоматизация", "Automation"], ["Эксплуатация", "Operations"]], detail: ["SERVICES", "CI / CD", "INFRASTRUCTURE"], loop: ["От реализации до поддержки в работе", "From implementation to ongoing support"] },
  research: { title: ["Проверка гипотезы", "Testing a hypothesis"], nodes: [["Гипотеза", "Hypothesis"], ["Эксперимент", "Experiment"], ["Измерения", "Measurements"]], detail: ["QUESTION", "TEST BENCH", "EVIDENCE"], loop: ["Условия эксперимента и границы выводов", "Experiment conditions & limits of the findings"] },
  blog: { title: ["Инженерные заметки", "Engineering notes"], nodes: [["Наблюдение", "Observation"], ["Проверка", "Verification"], ["Заметка", "Note"]], detail: ["PROBLEM", "EXPERIMENT", "FINDINGS"], loop: ["Практика → выводы → следующий вопрос", "Practice → findings → next question"] },
  process: { title: ["Рабочий процесс", "Working process"], nodes: [["Задача", "Scope"], ["Реализация", "Implementation"], ["Проверка", "Validation"]], detail: ["SCOPE", "BUILD", "REVIEW"], loop: ["Обратная связь на каждом этапе", "Feedback at every stage"] },
  contact: { title: ["Начинаем с задачи", "Starting with the problem"], nodes: [["Контекст", "Context"], ["Обсуждение", "Discussion"], ["План", "Plan"]], detail: ["GOAL", "CONSTRAINTS", "NEXT STEPS"], loop: ["Цель · ограничения · ожидаемый результат", "Goal · constraints · expected outcome"] },
};

export function StudioBoard({ locale, diagramKey, drawing }: { locale: Locale; diagramKey: string; drawing: boolean }) {
  const diagram = diagrams[diagramKey] || diagrams.home;
  const language = locale === "ru" ? 0 : 1;
  return <div className="studio-board" role="status" aria-live="polite" aria-atomic="true">
    <div className="studio-board-content" key={`${locale}-${diagramKey}`} data-drawing={drawing}>
      <div className="studio-board-caption"><span>WWN / ENGINEERING</span><span>{locale === "ru" ? "СХЕМА РАБОТЫ" : "WORKFLOW"}</span></div>
      <p className="studio-board-title">{diagram.title[language]}</p>
      <svg className="studio-board-diagram" viewBox="0 0 600 190" role="img" aria-label={diagram.nodes.map(node => node[language]).join(" → ")}>
        <g className="studio-board-lines" fill="none" stroke="currentColor" strokeWidth="1.25">
          {[0, 218, 436].map(x => <rect key={x} x={x + 1} y="30" width="162" height="64" rx="1"/>)}
          <path d="M163 62h54m-7-4 7 4-7 4"/>
          <path className="studio-board-drawn-link" d="M381 62h54m-7-4 7 4-7 4"/>
          <path className="studio-board-feedback-line" d="M518 94v29H82V94m-4 7 4-7 4 7"/>
        </g>
        {diagram.nodes.map((node, i) => <g key={i} textAnchor="middle" fill="currentColor"><text className="studio-board-node-title" x={82 + i * 218} y="57">{node[language]}</text><text className="studio-board-node-detail" x={82 + i * 218} y="79">{diagram.detail[i]}</text></g>)}
        <text className="studio-board-feedback" x="300" y="158" textAnchor="middle" fill="currentColor">{diagram.loop[language]}</text>
      </svg>
    </div>
  </div>;
}
