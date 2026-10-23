import type { NextConfig } from "next";
const config: NextConfig = { output: "standalone", distDir: process.env.CV_BUILD_DIR || ".next", poweredByHeader: false, serverExternalPackages: ["better-sqlite3"],
  async headers() {
    return process.env.NODE_ENV === "production" ? [{ source: "/workshop/:path*", headers: [
      { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
      { key: "X-Content-Type-Options", value: "nosniff" },
    ] }] : [];
  } };
export default config;
