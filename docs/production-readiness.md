# Production readiness — 2026-10-23

Local production checks passed. No remote deployment, push, DNS or TLS changes were performed. Actual phone GPU, battery usage and remote hosting were not measured.

- Runtime public delivery: 165 files, 19,358,748 bytes (previous public directory: 112,437,246 bytes). 183 superseded deliveries / 95,807,151 bytes are retained locally under ignored deprecated/workshop-assets/.
- Desktop background tiles: 26,798,180 -> 2,729,454 bytes, same native geometry and 4px bleed. WebP quality 95; measured PSNR 41.28–45.36 dB. Lossless masters remain local in artwork/.
- Cold mobile production browser, 390x780 iframe, simulated aggregate 10 Mbit/s and 100ms per response: load 1,028ms, LCP 944ms, transfer 697 KiB. No desktop art requested. This is a desktop browser with a mobile viewport, not a physical phone benchmark.
- Cold desktop, 1280x800 iframe on local network: load 178ms, LCP 180ms, transfer 6,079 KiB. The illustrated desktop scene still requires about 6 MiB initially; these timings must not be interpreted as mobile-network timings. No mobile art requested.
- Docker image cv:production-audit, arm64, 1 CPU / 512 MiB limit: ready in 0.448s; idle 53.3 MiB; peak under brief HTTP load 70.06 MiB. 7,505 requests / 5 seconds / 4 connections, zero errors; p95 5.31ms. This measures local HTTP serving, not browser animation cost. Container healthy, no OOM.
- HTTP smoke: 31 routes and all 165 assets passed; RU/EN, classic routes and both PDFs. Conditional cache requests return 304; archived/test URLs return 404. Native SQLite works under UID 1001. No source masters, archives, preview HTML or dotfiles in runtime public files.
- Production build generated 35 pages. TypeScript, make test, shell syntax and git diff checks passed. CI invokes the complete make test suite.
- Mobile dialog opening removes motion canvases; returning restores one active canvas and the same scene. Locale switching retains slide 8/8. Back/Назад and dark cards checked visually. Browser console had no errors or warnings in the cold mobile run.

Build with make docker-build or the existing delivery workflow. The Docker builder packages only referenced artwork via scripts/prepare-production-public.cjs. Source artwork and local verification outputs are excluded from the runtime image.

Measurements and browser screenshots are saved in the task workspace under output/wwn-workshop/ (production-mobile-cold.json, production-desktop-cold.json, docker-benchmark.json, http-smoke.json, production-mobile-cold.png).
