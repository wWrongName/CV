# Production readiness — 2026-10-23

Baseline local production audit passed. The native AMD64/ARM64 workflow and deployment subsequently passed for commit 16cdd1b. DNS and TLS were not separately audited. Actual phone GPU, battery usage and remote hosting were not measured.

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

## Follow-up delivery checks — 2026-10-23

- Updated city tiles, mobile sky/ivy layers, eager desktop pose preparation and link metadata/icon passed production build (35 pages), make test, TypeScript and diff checks.
- Current curated public delivery: 168 files / 19,593,575 bytes. The temporary preview HTML is excluded from runtime packaging. Superseded city tiles and welcome deliveries are archived locally and absent from public delivery.
- Desktop browser verified all eight positions prepared before hover, detailed city revision d00e825b7442, 22 distant windows with independent 12–21.6 second light cycles and 18 near windows at 10% modulation. Traffic, aircraft and SVG clouds are removed.
- Mobile clouds remain a separate upper-sky 220-second one-direction loop; the lower half preserves its original artwork. Blog ivy is an independent item loaded only for its active scene. Combined motion item assets: 388,190 bytes.
- Network and Docker measurements above describe the baseline audit, not this revised artwork/preload delivery. They were not repeated for this follow-up.

## Cached sky and loading-order fix — 2026-10-23

- Cloud readiness now checks the already-complete image at hydration, rather than relying only on a future load event. This fixes the paused cloud strip reproduced on wwncv.tech.
- Additional desktop positions enter an idle queue only after window load and room-image decoding. Only one background sprite is requested at a time; requested hover positions bypass the queue at high priority.
- Production build and make test passed. Browser checked both initial and cached reload: clouds playing, no desktop positions on mobile, all eight desktop sprite requests after loadEventEnd. In the cached local run, loadEventEnd was 54.2ms and first sprite request 301ms; these are ordering evidence on localhost, not a mobile-network benchmark.
- QA report/screenshots: output/wwn-workshop/clouds-preload-fixed.{json,png} in the task workspace.

## Live desktop weight audit and startup preview — 2026-10-23

Two cold browser runs per profile, 1280x800 CSS pixels / DPR 2.36, user window unchanged. Published wwncv.tech content was forwarded through a local HTTPS proxy with browser caching disabled. The constrained profile used a shared aggregate 10 Mbit/s pipe plus 100ms response latency. These include forwarding overhead and are controlled measurements, not a universal end-user guarantee.

| Profile | LCP | Room and default motion ready | All eight positions ready | Transfer |
| --- | --- | --- | --- | --- |
| Unthrottled | 0.96–1.18s | 2.00–2.10s | 3.20s | 7.22 MiB |
| 10 Mbit/s + 100ms | 4.55–4.81s | 6.30–6.50s | 9.60–10.32s | 7.22 MiB |

89 resource requests, including 69 workshop art requests. Artwork transferred 6.94 MiB, JavaScript 0.18 MiB. About 5.62 MiB was requested before background positions and 1.59 MiB afterward. All eight pose requests began after loadEventEnd in all four runs. No long tasks were recorded in this desktop browser; phone/GPU/battery behavior was not measured. A separate direct HTTP/2 HTML request gave TTFB 253ms, total 325ms, gzip transfer 13,312 bytes. The primary loading cost is artwork rather than HTML or JavaScript.

Largest deliveries: center room tile 1,106 KiB; blank chalkboard 483 KiB; left vine 337 KiB; counter 321 KiB; rug 252 KiB. These are candidates for responsive size/encoding reductions; this follow-up does not alter their quality.

Added a CSS spinner over the existing 9,466-byte room preview. The preview URL is shared with the environment, so no extra bitmap is downloaded. It covers partial room assembly until the initial room image decode pass finishes; background pose preparation is not part of this gate. A throttled local production QA showed the preview/spinner visible at about 0.32s, then hidden with aria-busy=false once the room was ready. Mobile picture sources remain 1px placeholders; reduced-motion disables the spinner and does not block readiness; no-JavaScript shows the original static scene. Production build and make test passed.

Raw reports: desktop-speed-{fast,fast-repeat,10mbps,10mbps-repeat}.json. Visual QA: desktop-startup-{loading,ready}.png. All stored in the task workspace output/wwn-workshop/, outside deployable public files.

## Default-scene prerender — 2026-10-23

The desktop startup spinner/empty-room placeholder is superseded by an art-only capture of the actual default composition. Runtime file: default-scene-preview-v1-768.webp, 768x512, 39,588 bytes. The lossless browser capture remains in ignored artwork/; the QA proxy/capture setup stays outside the repository. No generated replacement illustration was used.

The capture uses a 3072x2048 viewport with a fixed 1536x1024 stage at (768,512), displayed at 0.25 scale. Its edges therefore correspond to -50%, -50%, 200%, 200% on the live stage. A shared stage coordinate plane preserves object placement across aspect ratios and keeps a full room of overscan around the main composition. Board copy, badges and fixed language/classic UI are excluded from the capture and remain real HTML in the correct locale. Only underlying bitmap/motion layers are hidden until the initial room decode pass completes; the snapshot fades out over 250ms.

Browser first-frame QA (JavaScript responses intentionally held, preserving SSR state) verified 1280x800 RU, 900x1100 EN and 2560x1080 RU. In every case the snapshot bounds were exactly twice the stage dimensions with a -0.5 origin on each axis; all seven object badges remained live. Proof: prerender-aspect-qa.{json,png} in the task workspace. Mobile is unchanged: the desktop snapshot uses a 1px source below 900px and is hidden by CSS. The no-JavaScript fallback restores the existing static art layers. Production build, TypeScript, make test and public packaging checks passed. Current public delivery: 169 files / 19,633,163 bytes.

## Chalkboard readiness and optimization candidates — 2026-10-23

Board copy now mounts only after the initial room is decoded, the chalkboard image itself has decoded successfully, and the chalk font has been requested/resolved. Cached images follow the same path. A missing/failed board never displays floating text. Production browser QA injected a 3-second chalkboard delay and a separate 503: before load there was no board-copy node; success produced one; failure retained zero despite the rest of the scene being ready. Normal direct production-server rendering was also checked. Build, TypeScript, make test and diff checks passed. QA: board-load-gate.json and board-ready-final.png in the task workspace.

Optimization candidates (not applied):
- Five heavy current deliveries total 2,557,076 bytes. Re-encoding at WebP q85 without resizing produced 1,300,864 bytes, a 1,256,212-byte reduction (~1.20 MiB). q90 produced 1,781,090 bytes. Alpha pixels were preserved exactly for every candidate. Visual acceptance remains necessary; PSNR alone is not a quality guarantee. Raw per-file results are saved in desktop-compression-candidates.json in the task workspace.
- Desktop prop `sizes` currently advertises 16vw for all non-character art although actual about/blog widths are 4.8% / 3.15% of the stage. Correct scene-based sizes plus smaller responsive variants can avoid large deliveries for tiny books/frames. Furniture and reaction sizes should likewise follow the bounded stage rather than unrestricted viewport width.
- Center environment tile has a single native 3592px delivery even on 1x screens. Responsive tile variants can reduce traffic while retaining the existing native file for Retina/large screens.
- Eight hidden position components currently initialize their motion renderers after their images decode. Separating texture prefetch from first-use renderer allocation can lower GPU memory/context pressure while retaining instant static pose switches. This requires interaction/performance QA before changing behavior.

## Desktop delivery optimization and comparison — 2026-10-23

Implemented the candidates above. Every desktop image now advertises its real width on the bounded stage, with smaller responsive prop/furniture deliveries and responsive background tiles. Native image geometry, tile bleed, layer positions, alpha, desktop character art and mobile artwork are preserved. Native re-encodes have measured PSNR >=40.03 dB against the previous accepted delivery; resized variants use a >=33.5 dB gate against the resized reference. An existing delivery is retained when cheaper. Exact alpha is preserved by encoding. City, board and vine crops were visually compared at equal pixel scale. Originals remain in the ignored archive. Per-variant evidence is in desktop-encoding-report.json.

Baseline 4d1dbf9 and optimized production builds were measured with the same 1280x800 iframe / DPR 2.36, shared 10 Mbit/s pipe, 100ms response latency and disabled browser cache:

| Metric | Before | After (two runs) |
| --- | --- | --- |
| Window load | 5.01s | 3.28–3.33s |
| Room and default motion ready | 5.40s | 3.70–3.90s |
| Pose images/textures prepared | 7.80s | 6.20–6.50s |
| Total transfer including background poses | 7,431 KiB | 5,377 KiB (-27.6%) |
| Pose GPU renderers before first interaction | 8 | 0 |

All eight poses still prefetch after the initial room pass. Decoded images are shared in memory between prefetch and first renderer setup, avoiding duplicate requests even with HTTP caching disabled. GPU renderers are allocated on first visit and retained for revisits; only the active position animates. Visiting all eight positions and returning to default added zero art requests and left total transfer at 5,377 KiB. Research hand layering and default return were checked visually; browser console had no errors/warnings. Two identical vine layers share URLs rather than downloading the same pixels twice.

Mobile viewport 390x780 requested zero desktop artwork/poses. Production build (35 pages), make check, explicit public packaging and diff checks passed. Curated public output is 277 files / 20,234,735 bytes: more responsive variants slightly increase stored delivery inventory while substantially reducing the bytes selected by an individual browser. Superseded deliveries and QA pages are excluded. Added delivery checks validate variant metadata, stage sizing, texture selection and decoded-image reuse/failure retries. Raw before/after/repeat measurements and screenshots remain in the task workspace output/wwn-workshop/; compact results are in desktop-loading-comparison.json. Actual phone GPU/battery and production-network timings were not measured in this comparison.

Final HTTP smoke of this build: all 277 packaged assets and 18 RU/EN section pages returned successfully; zero failures. Evidence: optimization-http-smoke.json in the task workspace.
