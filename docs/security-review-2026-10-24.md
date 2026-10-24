# Dependency security review — 2026-10-24

Local source and dependency review; this is not a production incident investigation.

## Versions

| Component | Before | Resolved after update |
| --- | --- | --- |
| Node.js project runtime / Docker | 24.21.0 | 24.22.1 |
| Next.js | 16.3.6 | 16.4.3 |
| React / React DOM | 19.3.0 | 19.3.1 |
| sharp (Next.js dependency) | 0.35.4 | 0.35.5 |
| source-map-js (PostCSS dependency) | 1.2.1 | 1.2.2 |

The lockfile records the updated dependency graph. `.nvmrc`, package engines,
both Docker stages and README agree on Node.js 24.22.1. CI reads `.nvmrc`.
The host-wide Node.js installation and already-running processes were not upgraded.

## Advisories and applicability

- Node.js October 21 security release: CVE-2026-111497 permits memory corruption
  and potentially remote code execution when attacker-controlled Brotli input is
  decompressed. The release also fixes DNS NUL truncation (CVE-2026-105482), TLS
  hostname validation (CVE-2026-105483, CVE-2026-106069, CVE-2026-106072), HTTP
  connection reuse (CVE-2026-105481), snapshot entropy reuse (CVE-2026-106074),
  and a permission-model bypass (CVE-2026-106073) affecting the Node.js 24 line.
  Runtime updated to the patched Node.js 24 release.
  https://nodejs.org/en/blog/vulnerability/october-2026-security-releases
- Next.js October 14 security release: GHSA-673q-mjm6-r5xr (critical RCE in
  Cache Components returning multiple typed arrays), CVE-2026-96889 /
  GHSA-2464-fhr4-w9xw (critical SVG image-processing RCE on glibc Linux), and
  GHSA-p3m5-59mp-jv5r (Server Actions denial of service). Fixed starting at
  Next.js 16.4.1. This project uses App Router; no `use cache` or `use server`
  directives, Cache Components configuration, or `next/image` imports were found
  in application sources. Its Docker runtime uses Alpine/musl. These observations
  limit applicability of the documented exploit paths; upgrading remains required.
  https://nextjs.org/blog/nextjs-security-update-october-14-2026
- Audit additionally identified CVE-2026-93749 / GHSA-68fv-2mgg-jv7q in
  source-map-js 1.2.1 (event-loop denial of service). Updated the existing
  transitive dependency to 1.2.2, without adding a direct dependency or override.
  https://github.com/advisories/GHSA-68fv-2mgg-jv7q

## Verification

- `pnpm audit --json`: zero known vulnerabilities across all dependency classes.
- Official Node.js 24.22.1 macOS ARM64 archive SHA-256 checked against the
  official release checksum list before using that runtime for verification.
- `make check` under Node.js 24.22.1: passed, including TypeScript, navigation,
  project stories, desktop delivery, mobile scene/motion and shell checks.
- Isolated production build under Node.js 24.22.1 / Next.js 16.4.3: passed;
  generated 47 static pages.
- Docker registry manifest for `node:24.22.1-alpine`: available for the CI's
  linux/amd64 and linux/arm64 targets. A full Docker build was not run locally.

## Deployment boundary

These are local changes. Protection of the public site requires rebuilding and
deploying the container, then verifying the versions in the running container.
No deployment or server log investigation was performed. An affected dependency
version does not itself prove compromise; a clean dependency audit does not
prove absence of a prior incident or undisclosed vulnerabilities.
