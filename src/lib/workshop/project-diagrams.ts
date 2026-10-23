// Logical routes for the dossier view. The classic scene's untyped 3D links
// describe proximity/association and must not be treated as a deployment graph.
type Copy = { ru: string; en: string };
export type DiagramStep = { node: string; label?: Copy; detail?: Copy };
export type DiagramRelation = { label: Copy; kind?: "context" };
export type DiagramRoute = { id: string; title: Copy; steps: DiagramStep[]; relations: DiagramRelation[] };
export type ProjectDiagram = { routes: DiagramRoute[]; note?: Copy };
const copy = (ru: string, en: string): Copy => ({ ru, en });
const node = (id: string, ru?: string, en?: string): DiagramStep => ({ node: id, ...(ru && en ? { detail: copy(ru, en) } : {}) });
const named = (id: string, ru: string, en: string, detailRu: string, detailEn: string): DiagramStep => ({ node: id, label: copy(ru, en), detail: copy(detailRu, detailEn) });
const edge = (ru: string, en: string): DiagramRelation => ({ label: copy(ru, en) });
const context = (ru: string, en: string): DiagramRelation => ({ label: copy(ru, en), kind: "context" });

export const projectDiagrams: Record<string, ProjectDiagram> = {
  paas: {
    routes: [
      { id: "requests", title: copy("Приложение", "Application"), steps: [node("web"), node("api"), node("tasks", "Фоновые задачи", "Background tasks")], relations: [edge("Запросы", "Requests"), edge("Задачи", "Tasks")] },
      { id: "build", title: copy("Сборка", "Build"), steps: [node("git"), node("ci")], relations: [edge("Исходный код", "Source code")] },
      { id: "gitops", title: copy("GitOps", "GitOps"), steps: [node("git", "Описание окружений", "Environment definitions"), node("argo"), node("kube", "Среда приложений", "Application environment")], relations: [edge("Целевое состояние", "Desired state"), edge("Синхронизация", "Reconciliation")] },
      { id: "environments", title: copy("Окружения", "Environments"), steps: [node("infra"), node("kube", "Среда приложений", "Application environment")], relations: [edge("Настройка среды", "Environment setup")] },
    ],
    note: copy("Argo CD сверяет кластер с конфигурацией в Git. Сборка CI и синхронизация GitOps — разные процессы.", "Argo CD reconciles the cluster with configuration in Git. CI builds and GitOps reconciliation are separate processes."),
  },
  llmops: {
    routes: [
      { id: "requests", title: copy("Запрос к модели", "Model request"), steps: [node("app"), node("gateway"), node("inference")], relations: [edge("Запрос", "Request"), edge("Доступ и лимиты", "Access and limits")] },
      { id: "metrics", title: copy("Нагрузка и ошибки", "Load and errors"), steps: [node("inference"), node("observe")], relations: [edge("Метрики", "Metrics")] },
      { id: "traces", title: copy("Диагностика ответов", "Response diagnostics"), steps: [node("app"), node("eval")], relations: [edge("Трассировки", "Traces")] },
      { id: "evaluation", title: copy("Проверка изменений", "Change evaluation"), steps: [node("config"), node("eval")], relations: [edge("Сравнение версий", "Version comparison")] },
      { id: "release", title: copy("Выпуск версии", "Release"), steps: [node("config"), node("inference")], relations: [edge("После проверок", "After evaluation")] },
    ],
    note: copy("Референсная архитектура. Запросы, телеметрия и релизы показаны отдельно. Стрелка метрик обозначает движение данных, а не инициатора сетевого запроса.", "Reference architecture. Requests, telemetry and releases are shown separately. The metrics arrow shows data flow, not which side initiates the network request."),
  },
  operations: {
    routes: [
      { id: "changes", title: copy("Изменения", "Changes"), steps: [named("iac", "Конфигурации IaC", "IaC configuration", "Terraform · Ansible", "Terraform · Ansible"), node("ci"), node("kube")], relations: [edge("Конфигурации", "Configuration"), edge("Применение", "Apply changes")] },
      { id: "images", title: copy("Образы приложений", "Application images"), steps: [node("registry"), named("kube", "Kubernetes", "Kubernetes", "Образы приложений", "Application images")], relations: [edge("Образы", "Images")] },
      { id: "errors", title: copy("Ошибки приложений", "Application errors"), steps: [named("kube", "Приложения", "Applications", "В Kubernetes", "In Kubernetes"), node("sentry")], relations: [edge("События ошибок", "Error events")] },
      { id: "observability", title: copy("Состояние системы", "System health"), steps: [named("kube", "Приложения и среда", "Apps and environment", "В Kubernetes", "In Kubernetes"), node("grafana")], relations: [edge("Метрики и логи", "Metrics and logs")] },
      { id: "access", title: copy("Секреты и доступ", "Secrets and access"), steps: [node("access"), named("kube", "Приложения", "Applications", "В Kubernetes", "In Kubernetes")], relations: [context("Обеспечение доступа", "Access management")] },
    ],
    note: copy("Sentry/Snuba и Grafana/ELK решают разные задачи наблюдаемости. Они не образуют последовательную цепочку обработки ошибок.", "Sentry/Snuba and Grafana/ELK serve different observability needs. They are not a sequential error-processing pipeline."),
  },
  "delivery-platform": {
    routes: [
      { id: "build", title: copy("Код и сборка", "Code and build"), steps: [node("code"), node("ci")], relations: [edge("Сборка", "Build")] },
      { id: "quality", title: copy("Проверка качества", "Quality analysis"), steps: [node("ci"), node("quality", "Анализ кода", "Code analysis"), node("ci")], relations: [edge("Анализ", "Analysis"), edge("Результат проверки", "Analysis result")] },
      { id: "deployment", title: copy("Развертывание", "Deployment"), steps: [node("ci"), node("helm"), node("runtime")], relations: [edge("Деплой", "Deploy"), edge("Ресурсы приложений", "Application resources")] },
      { id: "observability", title: copy("После деплоя", "After deployment"), steps: [node("runtime"), node("observe")], relations: [edge("Метрики и логи", "Metrics and logs")] },
    ],
    note: copy("SonarQube возвращает результат анализа в пайплайн. Развертыванием управляет CI/CD через Helm.", "SonarQube returns analysis results to the pipeline. CI/CD manages deployment through Helm."),
  },
  resilience: {
    routes: [
      { id: "traffic", title: copy("Трафик к сервисам", "Service traffic"), steps: [node("traffic"), node("protection"), node("app")], relations: [edge("Фильтрация", "Filtering"), edge("Очищенный трафик", "Filtered traffic")] },
      { id: "signals", title: copy("Обнаружение проблемы", "Detection"), steps: [node("protection"), node("monitor")], relations: [edge("Сигналы состояния", "Health signals")] },
      { id: "response", title: copy("Реагирование", "Response"), steps: [node("monitor"), node("runbook"), node("api")], relations: [edge("Алерт", "Alert"), edge("Действия инженера", "Engineer actions")] },
      { id: "control", title: copy("Управление защитой", "Protection management"), steps: [node("api"), node("protection")], relations: [edge("Операции через API", "API operations")] },
    ],
    note: copy("Трафик и управление защитой — разные контуры. Сценарий задает порядок действий инженера; автоматический запуск скриптов по алерту здесь не предполагается.", "Traffic and protection management are separate paths. Runbooks guide the engineer; this diagram does not imply automatic script execution on an alert."),
  },
};
