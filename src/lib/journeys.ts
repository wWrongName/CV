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
    "title": "PaaS-\nплатформа",
    "summary": "Интерфейс для работы с сервисами и автоматизация инфраструктуры. Разработка в команде.",
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
        "detail": "Backend · работа коллег",
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
        "detail": "Backend · работа коллег",
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
        "label": "ЗАДАЧА",
        "title": "Платформа\nдля сервисов",
        "text": "Проект начинался без готовой инфраструктуры и DevOps-процессов. Команде требовалась платформа для запуска и сопровождения приложений: интерфейс, backend и среда исполнения.",
        "note": "Командная разработка",
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
        "label": "МОЙ ВКЛАД",
        "title": "Frontend\nи автоматизация",
        "text": "Писал frontend на Next.js и TypeScript и координировал его разработку. Создавал скрипты для работы с облаком и инфраструктурой backend. DevOps-задачи решали вместе; backend разрабатывали и координировали коллеги.",
        "note": "Личная зона ответственности: frontend",
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
        "label": "ТЕХНОЛОГИИ",
        "title": "Код\nи окружения",
        "text": "В платформе использовались Kubernetes, Argo CD, Terraform и Ansible. Frontend — Next.js с SSR; backend команды — FastAPI и Celery. Мой инфраструктурный вклад — автоматизация операций с облаком и окружениями.",
        "note": "GitOps · IaC · CI/CD",
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
        "title": "Интерфейс\nи инструменты",
        "text": "Разработан frontend платформы. Для работы с облаком и инфраструктурой backend появились автоматизированные скрипты. В общей инфраструктуре команды был организован повторяемый процесс доставки изменений через CI/CD и GitOps.",
        "note": "Результат совместной работы",
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
    "id": "operations",
    "index": "02",
    "name": "Kubernetes и CI/CD",
    "title": "Kubernetes\nи эксплуатация",
    "summary": "Автоматизация конфигураций и стабильная работа сервисов коммерческой системы.",
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
        "label": "БЫЛО",
        "title": "Ручные действия\nи перебои",
        "text": "Конфигурации применяли вручную. Требовалось упростить эксплуатацию инфраструктуры и сервисов. Отдельная проблема — периодические сбои Sentry: при бэкапе блокировался диск и падали Snuba consumers.",
        "note": "Автоматизация и надёжность",
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
        "label": "МОЙ ВКЛАД",
        "title": "Конфигурации\nкак код",
        "text": "Автоматизировал конфигурации инфраструктуры и сервисов через IaC, включая ecom и Grafana. Для ecom организовал деплой из GitLab вместо ручного деплоя. Сопровождал Kubernetes, Helm, CI/CD и существующий Harbor.",
        "note": "Terraform · Ansible · GitLab CI · Helm",
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
        "label": "ЭКСПЛУАТАЦИЯ",
        "title": "Стабильная\nработа Sentry",
        "text": "Выявил связь падений Snuba consumers с бэкапом и блокировкой диска. Настроил перезапуски, мониторинг и алерты в Grafana. Также работал с ELK, Vault и LDAP для логирования, секретов и доступа.",
        "note": "Диагностика · восстановление · Observability",
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
        ]
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Быстрее деплоймент.\nМеньше сбоев.",
        "text": "Применение конфигураций ecom ускорилось: вместо ручных действий — запуск из GitLab. После изменений Sentry работает стабильно, прежние перебои перестали отвлекать разработчиков. Конфигурации инфраструктуры и сервисов автоматизированы через IaC.",
        "note": "Применение конфигураций · стабильность Sentry",
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
    "index": "03",
    "name": "Платформа разработки",
    "title": "Платформа\nразработки",
    "summary": "Общие процессы сборки, доставки и проверки качества для команд на разных стеках.",
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
        "label": "ЗАДАЧА",
        "title": "Разные стеки.\nОбщие процессы.",
        "text": "Несколько команд работали с разными стеками без единого подхода к доставке ПО и эксплуатации. Требовалось унифицировать сборку, развёртывание и проверку новых сервисов.",
        "note": "Python · .NET · Node.js",
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
        "label": "МОЙ ВКЛАД",
        "title": "Повторяемая\nдоставка ПО",
        "text": "Разрабатывал и сопровождал пайплайны GitLab CI и Jenkins. Работал со стандартами Helm-чартов, общими инструментами логирования и мониторинга, документацией инфраструктурных практик.",
        "note": "CI/CD · Helm · Kubernetes",
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
        "label": "АВТОМАТИЗАЦИЯ",
        "title": "Проверка\nкачества кода",
        "text": "Развернул и сопровождал SonarQube. Автоматизировал синхронизацию проектов через API GitLab и SonarQube, связав проекты команд с общей системой проверки качества.",
        "note": "GitLab API · SonarQube API",
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
        "title": "Проще подключать\nновые сервисы",
        "text": "Общие пайплайны и стандарты развёртывания упростили подключение проектов. Синхронизация с SonarQube автоматизирована. Команды получили единый процесс поставки и общие инструменты диагностики.",
        "note": "Общие практики для нескольких стеков",
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
    "index": "04",
    "name": "Anti-DDoS и устойчивость",
    "title": "Anti-DDoS\nи устойчивость",
    "summary": "Автоматизация работы с защитными сервисами и сокращение ручных действий при инцидентах.",
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
        "label": "ЗАДАЧА",
        "title": "Реакция\nна сетевые атаки",
        "text": "Production-система сталкивалась с сетевыми атаками. Во время инцидентов требовалось сократить ручные операции и обеспечить понятный порядок действий.",
        "note": "Устойчивость коммерческих сервисов",
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
        "label": "МОЙ ВКЛАД",
        "title": "Работа\nчерез API",
        "text": "Автоматизировал взаимодействие с anti-DDoS-сервисами StormWall и Qrator Labs. Операции с защитными сервисами перенёс в скрипты.",
        "note": "Интеграции anti-DDoS API",
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
        "label": "ЭКСПЛУАТАЦИЯ",
        "title": "Мониторинг\nи реагирование",
        "text": "Настраивал мониторинг и алерты, документировал сценарии реагирования. Это связало обнаружение проблем с конкретными действиями инженеров.",
        "note": "Мониторинг · алерты · документация",
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
        "title": "Меньше\nручных операций",
        "text": "Автоматизация снизила объём ручной работы с защитными сервисами и нагрузку на инженеров во время атак. Описанные сценарии сделали порядок реагирования более предсказуемым.",
        "note": "Автоматизированные операции и порядок действий",
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
  },
  {
    "id": "llm-security",
    "index": "05",
    "name": "AI",
    "category": "AI SECURITY · ИССЛЕДОВАНИЕ",
    "title": "Безопасность\nLLM",
    "summary": "Защита языковых моделей и проверка LoRA-адаптеров. Диссертационное исследование с программным прототипом и экспериментами.",
    "nodes": [
      {
        "id": "input",
        "label": "Внешний ввод",
        "detail": "Запросы и состязательные воздействия",
        "symbol": "IN",
        "position": [
          -6,
          2,
          0
        ],
        "layer": "app"
      },
      {
        "id": "inference",
        "label": "LLM + LoRA",
        "detail": "Генерация с сеансовым сдвигом",
        "symbol": "LLM",
        "position": [
          0,
          2,
          -4
        ],
        "layer": "infra"
      },
      {
        "id": "vrf",
        "label": "VRF-схема",
        "detail": "Проверяемая параметризация сдвига",
        "symbol": "VRF",
        "position": [
          6,
          2,
          -7
        ],
        "layer": "app"
      },
      {
        "id": "audit",
        "label": "Аудитор",
        "detail": "Эталонная модель и сверка логитов",
        "symbol": "VERIFY",
        "position": [
          -6,
          -1,
          -8
        ],
        "layer": "app"
      },
      {
        "id": "eval",
        "label": "Эксперименты",
        "detail": "Атаки, качество, время проверки",
        "symbol": "EVAL",
        "position": [
          1,
          -1,
          -12
        ],
        "layer": "delivery"
      },
      {
        "id": "adapter",
        "label": "LoRA-адаптер",
        "detail": "Проверка версии и подлинности",
        "symbol": "LoRA",
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
        "input",
        "inference"
      ],
      [
        "vrf",
        "inference"
      ],
      [
        "adapter",
        "inference"
      ],
      [
        "inference",
        "audit"
      ],
      [
        "vrf",
        "audit"
      ],
      [
        "audit",
        "eval"
      ]
    ],
    "chapters": [
      {
        "label": "ЗАДАЧА",
        "title": "Устойчивость\nязыковой модели",
        "text": "Если LLM работает с внешним контентом или вызывает инструменты, манипуляция входом может изменить её поведение. В диссертации исследовал устойчивость к состязательным атакам и проверку подлинности подключаемых LoRA-адаптеров.",
        "note": "Диссертационное исследование · AI security",
        "focus": [
          "input",
          "inference",
          "adapter"
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
        "label": "МОЙ ВКЛАД",
        "title": "Прототип\nVRF + LoRA",
        "text": "Разработал метод сеансового сдвига LoRA-параметров и программную реализацию: генерацию проверяемого сдвига, моделирование атак, аудит вычислений и измерение качества. Собрал стенд на Python, PyTorch, Transformers и PEFT.",
        "note": "Python · PyTorch · Transformers · PEFT",
        "focus": [
          "vrf",
          "inference",
          "audit",
          "eval"
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
        ],
        "details": {
          "title": "Что реализовано",
          "text": "В прототипе проверяемый сдвиг формируется с использованием Ed25519 и SHAKE-256. Сервер инференса и аудитор могут работать в независимых процессах: аудитор воспроизводит сдвиг на эталонной модели и сравнивает логиты. Модуль защиты зарегистрирован как программа для ЭВМ, № 2025665020."
        }
      },
      {
        "label": "РЕЗУЛЬТАТ",
        "title": "Результаты\nэксперимента",
        "text": "На TinyLlama-1.1B-Chat проверил GCG на 10 запросах AdvBench. Сдвиг увеличил потери атаки при том же бюджете оптимизации. Найденные суффиксы не сработали при переносе; прямая оптимизация со сдвигом также дала 0 успешных атак в этой выборке.",
        "note": "Исследовательский стенд · ограниченная выборка",
        "focus": [
          "inference",
          "vrf",
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
        ],
        "metrics": [
          {
            "value": "2/10 → 0/10",
            "label": "успешных атак в тесте",
            "detail": "Без сдвига → с VRF-сдвигом"
          },
          {
            "value": "×3,20",
            "label": "среднее отношение потерь GCG",
            "detail": "Одинаковый бюджет: 500 шагов"
          }
        ],
        "details": {
          "title": "Условия и ограничения",
          "text": "Успех определялся по целевой утвердительной фразе в начале ответа. Выборка — 10 запросов AdvBench; LoRA r=8, амплитуда сдвига 0,1. На 8 вопросах MT-Bench разнообразие длинных ответов снизилось (distinct-2: 0,91 → 0,62), поэтому амплитуда требует настройки. Измерение проверки аудитором: в среднем 0,772 с на TinyLlama-1.1B-Chat, Apple MPS, 10 контрольных запросов. Эти результаты относятся к описанному стенду; они не означают универсальную защиту от промпт-инъекций."
        }
      },
      {
        "label": "ПРИМЕНЕНИЕ",
        "title": "Оценка рисков\nAI-систем",
        "text": "Практическое продолжение работы — пилотные проверки устойчивости LLM, воспроизводимые стенды оценки и контроль компонентов инференса. Для команды это возможность проверить защиту, влияние на качество ответов и вычислительные затраты до внедрения в продукт.",
        "note": "Исследовательская основа для прикладных AI-задач",
        "focus": [
          "input",
          "inference",
          "audit",
          "eval",
          "adapter"
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
          "title": "Границы применения",
          "text": "Подход требует доступа к весам модели и LoRA-адаптеру. Для промышленного применения в диссертации рекомендована стандартизированная ECVRF вместо экспериментальной схемы. Незначительное искажение логитов может не обнаруживаться при выбранном пороге. Промпт-инъекции на естественном языке требуют дополнительных механизмов обнаружения и ограничения полномочий агента."
        }
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
      "id": "operations",
      "label": "Kubernetes и CI/CD",
      "detail": "Открыть проект",
      "symbol": "K8S",
      "position": [
        5,
        6,
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
        -6,
        -2.3,
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
        5,
        -3,
        -6
      ],
      "layer": "infra"
    },
    {
      "id": "llm-security",
      "label": "AI",
      "detail": "Исследование и прототип",
      "symbol": "AI",
      "position": [
        0,
        1.5,
        -6
      ],
      "layer": "app"
    }
  ],
  "links": [],
  "chapters": []
};
