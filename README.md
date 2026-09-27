# Иван Величко · резюме и проекты

Next.js, TypeScript, React Three Fiber, Three.js. Полноэкранная 3D-сцена с четырьмя проектами из проектного CV: PaaS-платформа, Kubernetes и CI/CD, платформа разработки и delivery, anti-DDoS и устойчивость. Пятый проект — исследовательский кейс «AI» по диссертации.

## Запуск

```sh
make install
make dev
```

Текущий стек: Node.js 22 (как в Docker и CI), pnpm 11.19.0 и GNU Make. Версия pnpm зафиксирована в `package.json`, зависимости — в `pnpm-lock.yaml`.

Локальный адрес: http://127.0.0.1:3000. Production: `make build`, затем `make start`. Проверки: `make check`. Полный список команд: `make`.

| Команда | Что делает |
| --- | --- |
| `make install` | Устанавливает зависимости строго по lock-файлу |
| `make dev` | Запускает разработку |
| `make build` / `make start` | Собирает / запускает production-версию |
| `make check` | Проверяет типы, навигацию и синтаксис deploy-скриптов |
| `make test-deploy` | Проверяет сценарии выкладки и отката в Linux-контейнере с имитацией Docker |
| `make docker-build` | Собирает образ `cv:local` |
| `make docker-up` / `make docker-down` | Запускает / останавливает локальный Compose |
| `make docker-logs` / `make docker-stats` | Показывает логи / CPU и RAM контейнера Compose |
| `make bench` | Короткий замер уже собранного образа: нагрузка 5 секунд, простой по 2 секунды до и после |
| `make pdf FONT_DIR=/path/to/fonts` | Пересобирает RU и EN PDF |

Перед `make bench` выполните `make docker-build`. Замер использует отдельный временный контейнер с лимитами 1 CPU / 512 MiB и случайным локальным портом. Длительность задаётся через `BENCH_SECONDS`, параллелизм — через `BENCH_CONCURRENCY`, образ — через `IMAGE`.

`make dev`, `make start` и `make docker-up` используют порт 3000: запускайте один вариант за раз. Команды Docker требуют работающего Docker Engine и Compose v2. Путь к Python при необходимости задаётся через `PYTHON`, например `make pdf PYTHON=/path/to/python3 FONT_DIR=/path/to/fonts`. Также доступны переменные `PNPM`, `NODE` и `DOCKER`.

Production-выкладка остаётся в GitHub Actions; команды `docker-up` и `docker-down` предназначены для локальной разработки.

## Контент

- `src/lib/journeys.ts` — пять проектов, их схемы, главы и экспериментальные результаты AI-кейса.
- `src/lib/resume.json` — полное резюме по компаниям; общий источник для веб-страницы и PDF.
- `/experience` — резюме одной страницей, прокрутка по всем трём компаниям и скачивание PDF.
- `/cases/<slug>` — совместимость со старыми ссылками, переход к компании в резюме.
- `public/resume-ivan-velichko.pdf` — готовый PDF для скачивания.

Тексты основаны на двух CV и уточнениях владельца. Его актуальные пояснения имеют приоритет: frontend и координация frontend в CodeBurst, общий DevOps, поддержка Harbor, IaC для инфраструктуры и сервисов, договор ГПХ в Zoloto585. Коммерческий запуск CodeBurst и неподтверждённые числа не заявлены.

## Пересборка PDF

Нужны Python, ReportLab и шрифты Noto Sans (NotoSans-Regular.ttf, NotoSans-Bold.ttf) и Rubik (Rubik-Bold.ttf). PDF создаётся из того же JSON, что и веб-страница. Обе локали оформлены на двух страницах A4: первая — профиль, Enecuum и CodeBurst; вторая — Zoloto585, компетенции и образование. Текст выделяется, контакты кликабельны. Экспорт проверяет количество страниц, чтобы изменение текста не создало незаметный перенос на третью страницу.

```sh
make pdf FONT_DIR=/path/to/fonts
```

После изменения `resume.json` пересоздайте PDF. Чтобы обновлённый файл попал в контейнер, пересоберите образ.

## Docker

```sh
make docker-up
```

Порт публикуется на localhost:3000. Для сервера подключить reverse proxy и TLS. Публичное развёртывание не выполнялось.

## Навигация

Кнопки «Назад»/«Далее», стрелки клавиатуры и колесо мыши непрерывно проходят все этапы и проекты. В начале первого и в конце последнего проекта навигация останавливается. Длинный текст сначала прокручивается до края; затем прокрутка переключает этап. Escape возвращает к карте. Проверка границ переходов: `node scripts/check-navigation.cjs`.

## Языки

Полные версии: `/ru` и `/en`; резюме: `/ru/experience` и `/en/experience`. Переключатель сохраняет раздел сайта. Основной URL перенаправляет на RU. Английские данные: `journeys.en.json` и `resume.en.json`. PDF на английском пересобирается через `python3 scripts/export_resume.py --locale en --font-dir /path/to/fonts`.
