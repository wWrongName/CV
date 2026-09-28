export type Vector = [number, number, number];
export type SystemNode = { id: string; label: string; detail: string; symbol: string; position: Vector; layer: "app" | "delivery" | "infra" };
export type Metric = { value: string; label: string; detail: string };
export type Chapter = { label: string; title: string; text: string; note: string; focus: string[]; camera: Vector; target: Vector; metrics?: Metric[]; details?: { title: string; text: string } };
export type Journey = { id: string; index: string; name: string; category: string; title: string; summary: string; nodes: SystemNode[]; links: [string,string][]; chapters: Chapter[] };
export const journeys: Journey[] = [
  {
    "id": "paas",
    "index": "01",
    "name": "PaaS-платформа",
    "title": "Сервисы\nв одном интерфейсе",
    "summary": "Работа с сервисами через платформу, автоматизация облачных операций и повторяемая доставка изменений.",
    "category": "CLOUD-NATIVE ПЛАТФОРМА",
    "nodes": [
      {
        "id": "web",
        "label": "Next.js",
        "detail": "Интерфейс платформы",
        "symbol": "{ }",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "app"
      },
      {
        "id": "api",
        "label": "FastAPI",
        "detail": "Backend платформы",
        "symbol": "API",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "app"
      },
      {
        "id": "tasks",
        "label": "Celery",
        "detail": "Backend платформы",
        "symbol": "Q",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "app"
      },
      {
        "id": "git",
        "label": "Git",
        "detail": "Исходный код",
        "symbol": "</>",
        "position": [
          -8,
          -0.4,
          -11
        ],
        "layer": "delivery"
      },
      {
        "id": "ci",
        "label": "CI/CD",
        "detail": "Сборка и доставка ПО",
        "symbol": "CI",
        "position": [
          -2,
          -0.4,
          -13
        ],
        "layer": "delivery"
      },
      {
        "id": "argo",
        "label": "Argo CD",
        "detail": "GitOps",
        "symbol": "SYNC",
        "position": [
          4,
          -0.4,
          -15
        ],
        "layer": "delivery"
      },
      {
        "id": "kube",
        "label": "Kubernetes",
        "detail": "Общая DevOps-работа",
        "symbol": "K8S",
        "position": [
          1,
          -2,
          -4
        ],
        "layer": "infra"
      },
      {
        "id": "infra",
        "label": "Terraform · Ansible",
        "detail": "Инфраструктура как код",
        "symbol": "IaC",
        "position": [
          -7,
          -2,
          -5
        ],
        "layer": "infra"
      }
    ],
    "links": [
      [
        "web",
        "api"
      ],
      [
        "api",
        "tasks"
      ],
      [
        "git",
        "ci"
      ],
      [
        "ci",
        "argo"
      ],
      [
        "argo",
        "kube"
      ],
      [
        "infra",
        "kube"
      ]
    ],
    "chapters": [
      {
        "label": "ПРОБЛЕМА",
        "title": "Приложению нужна\nсреда для работы",
        "text": "Одного кода недостаточно для запуска сервиса: нужны интерфейс, backend, окружения и процесс доставки изменений. Когда инфраструктура и DevOps-процессы ещё не выстроены, эти части приходится собирать и согласовывать с нуля.",
        "note": "Запуск и сопровождение приложений",
        "focus": [
          "web",
          "api",
          "kube"
        ],
        "camera": [
          16,
          9,
          19
        ],
        "target": [
          -2,
          0,
          -6
        ]
      },
      {
        "label": "РЕШЕНИЕ",
        "title": "Работа с сервисами\nв одном месте",
        "text": "Интерфейс объединяет пользовательские сценарии платформы, а автоматизация берёт на себя повторяющиеся операции с облаком и окружениями. Работа с приложением и его инфраструктурой складывается в связанный процесс.",
        "note": "Next.js · TypeScript · автоматизация",
        "focus": [
          "web",
          "infra",
          "kube"
        ],
        "camera": [
          8,
          6,
          12
        ],
        "target": [
          0,
          2,
          -4
        ]
      },
      {
        "label": "КАК РАБОТАЕТ",
        "title": "От действия\nдо работы сервиса",
        "text": "Интерфейс связывает пользователя с сервисами платформы. Операции с облаком выполняются через скрипты, окружения описываются в коде, а изменения доставляются по общему процессу. Это позволяет повторять операции без ручного воспроизведения настроек.",
        "note": "Next.js · Terraform · Ansible · Kubernetes · Argo CD",
        "focus": [
          "git",
          "ci",
          "argo",
          "kube",
          "infra"
        ],
        "camera": [
          8,
          9,
          1
        ],
        "target": [
          -2,
          -0.4,
          -10
        ]
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Управление сервисами\nбез ручной рутины",
        "text": "Единый интерфейс для работы с сервисами, автоматизированные операции с облаком и повторяемый деплой. Меньше ручных действий при сопровождении — больше времени на развитие продукта.",
        "note": "Интерфейс и автоматизация платформы",
        "focus": [
          "web",
          "api",
          "tasks",
          "kube",
          "infra"
        ],
        "camera": [
          18,
          12,
          19
        ],
        "target": [
          0,
          0,
          -7
        ]
      }
    ]
  },
  {
    "id": "llmops",
    "index": "02",
    "name": "LLMOps",
    "category": "LLMOPS · РЕФЕРЕНСНАЯ АРХИТЕКТУРА",
    "title": "AI-сервис,\nготовый к сопровождению",
    "summary": "Корпоративный AI-ассистент в своём контуре: единый доступ к моделям, контроль нагрузки и проверка качества перед релизом. Референсная архитектура.",
    "nodes": [
      {
        "id": "app",
        "label": "Приложение",
        "detail": "AI-ассистент",
        "symbol": "APP",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "app"
      },
      {
        "id": "gateway",
        "label": "Kong Enterprise",
        "detail": "AI gateway · доступ и лимиты",
        "symbol": "API",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "delivery"
      },
      {
        "id": "inference",
        "label": "vLLM",
        "detail": "Инференс в Kubernetes",
        "symbol": "LLM",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "infra"
      },
      {
        "id": "observe",
        "label": "Prometheus / Grafana",
        "detail": "Метрики и алерты",
        "symbol": "OBS",
        "position": [
          -6,
          -1,
          -8
        ],
        "layer": "app"
      },
      {
        "id": "eval",
        "label": "Langfuse",
        "detail": "Трассировки и оценка",
        "symbol": "EVAL",
        "position": [
          1,
          -1,
          -12
        ],
        "layer": "delivery"
      },
      {
        "id": "config",
        "label": "Git / CI/CD",
        "detail": "Версии и релизы",
        "symbol": "GIT",
        "position": [
          5,
          -1,
          -3
        ],
        "layer": "app"
      }
    ],
    "links": [
      [
        "app",
        "gateway"
      ],
      [
        "gateway",
        "inference"
      ],
      [
        "inference",
        "observe"
      ],
      [
        "app",
        "eval"
      ],
      [
        "config",
        "eval"
      ],
      [
        "config",
        "inference"
      ]
    ],
    "chapters": [
      {
        "label": "ПРОБЛЕМА",
        "title": "Прототип работает.\nЧто дальше?",
        "text": "AI-ассистент отвечает на тестовые запросы, но для повседневной работы этого мало. Нужны доступы для приложений, лимиты нагрузки, диагностика ошибок и способ проверить, что новая модель или промпт не ухудшают ответы.",
        "note": "Внутренний AI-ассистент · типовой сценарий",
        "focus": [
          "app",
          "inference"
        ],
        "camera": [
          16,
          9,
          19
        ],
        "target": [
          -2,
          0,
          -6
        ]
      },
      {
        "label": "РЕШЕНИЕ",
        "title": "Общий контур\nдля работы с LLM",
        "text": "Команды подключают приложения через единый шлюз с идентификацией и правилами доступа. Модели работают в Kubernetes компании, конфигурации и промпты версионируются. Изменения проходят проверку до деплоя — подключение AI не превращается в набор отдельных сервисов без общих правил сопровождения.",
        "note": "Kubernetes · Kong Gateway Enterprise · AI Proxy Advanced · vLLM",
        "focus": [
          "gateway",
          "inference",
          "config"
        ],
        "camera": [
          8,
          6,
          12
        ],
        "target": [
          0,
          2,
          -4
        ]
      },
      {
        "label": "КАК РАБОТАЕТ",
        "title": "От запроса\nдо проверенного релиза",
        "text": "Шлюз проверяет доступ и направляет запрос к модели. Метрики показывают задержки, ошибки и нагрузку, трассировки помогают разобрать ответ. Перед релизом новая версия сравнивается с предыдущей на согласованном наборе запросов; пороги качества и скорости задаются под задачу.",
        "note": "OIDC · AI Rate Limiting Advanced · Langfuse · Prometheus · Grafana",
        "focus": [
          "app",
          "gateway",
          "inference",
          "observe",
          "eval"
        ],
        "camera": [
          8,
          9,
          1
        ],
        "target": [
          -2,
          -0.4,
          -8
        ]
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "AI под контролем\nкоманды",
        "text": "Целевая схема — AI-сервис с управляемым доступом, видимой нагрузкой и понятным порядком обновлений. Команда может оценивать изменения до выпуска и разбирать проблемы по данным. Это референсная архитектура: качество, производительность и стоимость подтверждаются на пилоте.",
        "note": "Критерии пилота · качество · задержки · ресурсы",
        "focus": [
          "app",
          "gateway",
          "inference",
          "observe",
          "eval",
          "config"
        ],
        "camera": [
          18,
          12,
          19
        ],
        "target": [
          0,
          0,
          -7
        ],
        "details": {
          "title": "Сценарий пилота",
          "text": "Типовой сценарий: текстовый ассистент на vLLM в Kubernetes, перед ним — самостоятельно размещённый Kong Gateway Enterprise с лицензируемыми AI-плагинами. Корпоративная идентификация и политики приложений задают доступ; прямой доступ к инференсу закрыт. Langfuse собирает трассировки приложения и результаты проверок внутри того же контура. На пилоте проверяются качество, p95 задержки, время до первого токена, использование GPU и восстановление после отказа. Лимиты токенов не заменяют расчёт стоимости GPU. До внедрения согласуются лицензия модели, доступность подписки шлюза, оборудование, маскирование данных и сроки хранения."
        }
      }
    ]
  },
  {
    "id": "operations",
    "index": "03",
    "name": "Kubernetes и CI/CD",
    "title": "Меньше ручного.\nСтабильнее сервисы.",
    "summary": "Изменения без повторяющейся ручной настройки, понятный деплой и контроль состояния сервисов.",
    "category": "КОММЕРЧЕСКАЯ ИНФРАСТРУКТУРА",
    "nodes": [
      {
        "id": "iac",
        "label": "Terraform · Ansible",
        "detail": "Конфигурации инфраструктуры",
        "symbol": "IaC",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "delivery"
      },
      {
        "id": "ci",
        "label": "GitLab CI · Jenkins",
        "detail": "Применение изменений",
        "symbol": "CI",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "delivery"
      },
      {
        "id": "kube",
        "label": "Kubernetes · Helm",
        "detail": "Приложения и окружения",
        "symbol": "K8S",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "infra"
      },
      {
        "id": "sentry",
        "label": "Sentry · Snuba",
        "detail": "Обработка ошибок",
        "symbol": "OBS",
        "position": [
          -6,
          -1,
          -8
        ],
        "layer": "app"
      },
      {
        "id": "grafana",
        "label": "Grafana · ELK",
        "detail": "Мониторинг, алерты и логи",
        "symbol": "MON",
        "position": [
          1,
          -1,
          -12
        ],
        "layer": "app"
      },
      {
        "id": "access",
        "label": "Vault · LDAP",
        "detail": "Секреты и доступ",
        "symbol": "KEY",
        "position": [
          5,
          -1,
          -3
        ],
        "layer": "infra"
      },
      {
        "id": "registry",
        "label": "Harbor",
        "detail": "Поддержка реестра образов",
        "symbol": "OCI",
        "position": [
          -7,
          -2,
          -5
        ],
        "layer": "delivery"
      }
    ],
    "links": [
      [
        "iac",
        "ci"
      ],
      [
        "ci",
        "kube"
      ],
      [
        "registry",
        "kube"
      ],
      [
        "kube",
        "sentry"
      ],
      [
        "sentry",
        "grafana"
      ],
      [
        "access",
        "kube"
      ]
    ],
    "chapters": [
      {
        "label": "ПРОБЛЕМА",
        "title": "Ручные операции\nтормозят изменения",
        "text": "Когда конфигурации применяются вручную, каждое изменение требует времени и внимания инженеров. Разрозненные настройки и повторяющиеся сбои увеличивают нагрузку на сопровождение и отвлекают команду от развития сервисов.",
        "note": "Эксплуатация без лишней ручной работы",
        "focus": [
          "iac",
          "kube",
          "sentry"
        ],
        "camera": [
          16,
          9,
          19
        ],
        "target": [
          -2,
          0,
          -6
        ]
      },
      {
        "label": "РЕШЕНИЕ",
        "title": "Инфраструктура\nкак управляемая система",
        "text": "Конфигурации инфраструктуры и сервисов описываются в коде, изменения проходят через CI/CD. Деплой, мониторинг и управление доступом складываются в общий процесс сопровождения.",
        "note": "IaC · CI/CD · Observability",
        "focus": [
          "iac",
          "ci",
          "kube",
          "registry"
        ],
        "camera": [
          8,
          6,
          12
        ],
        "target": [
          0,
          2,
          -4
        ]
      },
      {
        "label": "КАК РАБОТАЕТ",
        "title": "Изменение —\nпод контролем",
        "text": "Конфигурация задаётся в коде и применяется через пайплайн. Приложения развёртываются по общим правилам, а после деплоя их состояние отслеживается мониторингом. При сбое алерты привлекают внимание, логи помогают разобраться в причине.",
        "note": "Terraform · Ansible · GitLab CI · Kubernetes · Helm · Grafana · ELK",
        "focus": [
          "sentry",
          "grafana",
          "access"
        ],
        "camera": [
          8,
          9,
          1
        ],
        "target": [
          -2,
          -0.4,
          -10
        ],
        "details": {
          "title": "Пример: стабильность Sentry",
          "text": "Диагностика связала падения Snuba consumers с блокировкой диска при резервном копировании. Перезапуски, мониторинг и алерты Grafana помогли восстановить стабильную работу: прежние перебои перестали отвлекать разработчиков."
        }
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Меньше рутины.\nБольше контроля.",
        "text": "Конфигурации в коде, повторяемый деплой и видимость состояния сервисов. Меньше ручных действий при изменениях и понятный процесс сопровождения — чтобы развитие инфраструктуры не сводилось к постоянному устранению сбоев.",
        "note": "Автоматизация изменений · контроль эксплуатации",
        "focus": [
          "iac",
          "ci",
          "sentry",
          "grafana"
        ],
        "camera": [
          18,
          12,
          19
        ],
        "target": [
          0,
          0,
          -7
        ]
      }
    ]
  },
  {
    "id": "delivery-platform",
    "index": "04",
    "name": "Платформа разработки",
    "title": "От кода\nдо сервиса",
    "summary": "Общий процесс сборки, проверки качества и деплоя для команд на Python, .NET и Node.js.",
    "category": "РАЗРАБОТКА И CI/CD",
    "nodes": [
      {
        "id": "code",
        "label": "Python · .NET · Node.js",
        "detail": "Проекты команд",
        "symbol": "CODE",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "app"
      },
      {
        "id": "ci",
        "label": "GitLab CI · Jenkins",
        "detail": "Общие пайплайны",
        "symbol": "CI",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "delivery"
      },
      {
        "id": "quality",
        "label": "SonarQube",
        "detail": "Качество и синхронизация",
        "symbol": "QA",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "app"
      },
      {
        "id": "helm",
        "label": "Helm",
        "detail": "Стандарты развёртывания",
        "symbol": "HELM",
        "position": [
          -6,
          -1,
          -8
        ],
        "layer": "delivery"
      },
      {
        "id": "runtime",
        "label": "Kubernetes",
        "detail": "Окружения приложений",
        "symbol": "K8S",
        "position": [
          1,
          -1,
          -12
        ],
        "layer": "infra"
      },
      {
        "id": "observe",
        "label": "Логи и мониторинг",
        "detail": "Общие инструменты",
        "symbol": "OBS",
        "position": [
          5,
          -1,
          -3
        ],
        "layer": "app"
      }
    ],
    "links": [
      [
        "code",
        "ci"
      ],
      [
        "ci",
        "quality"
      ],
      [
        "ci",
        "helm"
      ],
      [
        "helm",
        "runtime"
      ],
      [
        "runtime",
        "observe"
      ]
    ],
    "chapters": [
      {
        "label": "ПРОБЛЕМА",
        "title": "Каждый сервис —\nотдельная инструкция",
        "text": "Разные пайплайны и способы деплоя усложняют подключение новых проектов. Без общих правил командам приходится заново разбираться в настройках доставки ПО и эксплуатации.",
        "note": "Разные стеки · разрозненные процессы",
        "focus": [
          "code",
          "ci",
          "runtime"
        ],
        "camera": [
          16,
          9,
          19
        ],
        "target": [
          -2,
          0,
          -6
        ]
      },
      {
        "label": "РЕШЕНИЕ",
        "title": "Общие правила,\nразные приложения",
        "text": "Новый сервис подключается к подготовленному процессу сборки, проверок и деплоя. Особенности стека учитываются в настройках, а порядок доставки и сопровождения остаётся понятным для всей команды.",
        "note": "GitLab CI · Jenkins · Helm · Python · .NET · Node.js",
        "focus": [
          "ci",
          "helm",
          "runtime",
          "observe"
        ],
        "camera": [
          8,
          6,
          12
        ],
        "target": [
          0,
          2,
          -4
        ]
      },
      {
        "label": "КАК РАБОТАЕТ",
        "title": "Изменения проходят\nпонятный маршрут",
        "text": "Изменение проходит сборку, проверку качества и деплой по общему сценарию. Новый проект подключается к существующим правилам доставки, а синхронизация с системой анализа кода выполняется автоматически. После деплоя логи и мониторинг помогают понять, как работает сервис и где искать причину проблемы.",
        "note": "GitLab CI · Jenkins · Helm · SonarQube",
        "focus": [
          "code",
          "ci",
          "quality"
        ],
        "camera": [
          8,
          9,
          1
        ],
        "target": [
          -2,
          -0.4,
          -10
        ]
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Новый сервис —\nзнакомый процесс",
        "text": "Готовый путь от кода до работающего сервиса: сборка, проверка качества и деплой по общим правилам. Меньше повторной настройки при запуске проектов — больше внимания разработке. Команды работают с разными стеками, сохраняя единый подход к доставке и сопровождению.",
        "note": "Общий процесс · меньше повторной работы",
        "focus": [
          "ci",
          "quality",
          "helm",
          "runtime",
          "observe"
        ],
        "camera": [
          18,
          12,
          19
        ],
        "target": [
          0,
          0,
          -7
        ]
      }
    ]
  },
  {
    "id": "resilience",
    "index": "05",
    "name": "Anti-DDoS и устойчивость",
    "title": "Понятные действия\nво время атаки",
    "summary": "Автоматизация работы с anti-DDoS-сервисами и подготовленные сценарии реагирования.",
    "category": "ЗАЩИТА ИНФРАСТРУКТУРЫ",
    "nodes": [
      {
        "id": "traffic",
        "label": "Входящий трафик",
        "detail": "Запросы к сервисам",
        "symbol": "NET",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "app"
      },
      {
        "id": "protection",
        "label": "Anti-DDoS",
        "detail": "Защитные сервисы",
        "symbol": "EDGE",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "infra"
      },
      {
        "id": "app",
        "label": "Приложения",
        "detail": "Коммерческая система",
        "symbol": "APP",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "infra"
      },
      {
        "id": "api",
        "label": "API и скрипты",
        "detail": "Автоматизация операций",
        "symbol": "API",
        "position": [
          -6,
          -1,
          -8
        ],
        "layer": "delivery"
      },
      {
        "id": "monitor",
        "label": "Мониторинг",
        "detail": "Алерты и диагностика",
        "symbol": "MON",
        "position": [
          1,
          -1,
          -12
        ],
        "layer": "app"
      },
      {
        "id": "runbook",
        "label": "Сценарии реагирования",
        "detail": "Порядок действий",
        "symbol": "DOC",
        "position": [
          5,
          -1,
          -3
        ],
        "layer": "app"
      }
    ],
    "links": [
      [
        "traffic",
        "protection"
      ],
      [
        "protection",
        "app"
      ],
      [
        "api",
        "protection"
      ],
      [
        "protection",
        "monitor"
      ],
      [
        "monitor",
        "runbook"
      ]
    ],
    "chapters": [
      {
        "label": "ПРОБЛЕМА",
        "title": "Атака добавляет\nручной работы",
        "text": "Во время сетевой атаки нужно одновременно следить за сервисом и работать с защитными инструментами. Ручные операции увеличивают нагрузку на инженеров именно тогда, когда важно действовать последовательно.",
        "note": "Нагрузка на команду во время инцидента",
        "focus": [
          "traffic",
          "protection",
          "app"
        ],
        "camera": [
          16,
          9,
          19
        ],
        "target": [
          -2,
          0,
          -6
        ]
      },
      {
        "label": "РЕШЕНИЕ",
        "title": "Автоматизация\nи порядок действий",
        "text": "Повторяющиеся операции с защитными сервисами перенесены в скрипты. Мониторинг, алерты и документированные сценарии связывают обнаружение проблемы с конкретными действиями.",
        "note": "Защитные сервисы · сценарии реагирования",
        "focus": [
          "api",
          "protection"
        ],
        "camera": [
          8,
          6,
          12
        ],
        "target": [
          0,
          2,
          -4
        ]
      },
      {
        "label": "КАК РАБОТАЕТ",
        "title": "От сигнала\nк действию",
        "text": "Алерт сообщает о проблеме, подготовленный сценарий задаёт порядок реагирования, а скрипты выполняют повторяющиеся операции с защитными сервисами. Инженеру проще перейти к действиям, не собирая процедуру заново во время атаки.",
        "note": "StormWall · Qrator Labs · API · мониторинг",
        "focus": [
          "monitor",
          "runbook",
          "protection"
        ],
        "camera": [
          8,
          9,
          1
        ],
        "target": [
          -2,
          -0.4,
          -10
        ]
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Меньше действий\nв критический момент",
        "text": "Подготовленные сценарии и автоматизированная работа с защитными сервисами снижают операционную нагрузку во время атаки. Больше внимания состоянию системы и решениям, меньше — повторяющимся действиям.",
        "note": "Автоматизация операций · сценарии реагирования",
        "focus": [
          "api",
          "protection",
          "monitor",
          "runbook"
        ],
        "camera": [
          18,
          12,
          19
        ],
        "target": [
          0,
          0,
          -7
        ]
      }
    ]
  }
];

export const projectMap: Journey = {
  "id": "project-map",
  "index": "00",
  "name": "Проекты",
  "category": "",
  "title": "",
  "summary": "",
  "nodes": [
    {
      "id": "paas",
      "label": "PaaS-платформа",
      "detail": "Открыть проект",
      "symbol": "PaaS",
      "position": [
        -6,
        6,
        -6
      ],
      "layer": "app"
    },
    {
      "id": "llmops",
      "label": "LLMOps",
      "detail": "Референсная архитектура",
      "symbol": "LLM",
      "position": [
        5,
        6,
        -6
      ],
      "layer": "app"
    },
    {
      "id": "operations",
      "label": "Kubernetes и CI/CD",
      "detail": "Открыть проект",
      "symbol": "K8S",
      "position": [
        -6,
        -2.3,
        -6
      ],
      "layer": "infra"
    },
    {
      "id": "delivery-platform",
      "label": "Платформа разработки",
      "detail": "Открыть проект",
      "symbol": "DEV",
      "position": [
        5,
        -3,
        -6
      ],
      "layer": "delivery"
    },
    {
      "id": "resilience",
      "label": "Anti-DDoS и устойчивость",
      "detail": "Открыть проект",
      "symbol": "DDoS",
      "position": [
        0,
        1.5,
        -6
      ],
      "layer": "infra"
    }
  ],
  "links": [],
  "chapters": []
};
