export function SiteVersion() {
  const revision = process.env.NEXT_PUBLIC_GIT_SHA || "dev";
  const version = /^[a-f0-9]{7,40}$/.test(revision) ? revision.slice(0, 7) : "dev";
  return <span className="site-version" aria-label={`Version ${version}`}>{version}</span>;
}
