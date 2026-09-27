#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

# Linux server entry point. The short-lived GHCR token arrives on stdin.
release=$(cd "${1:?Release directory required}" && pwd)
image=${2:?Image digest required}
registry_user=${3:?Registry user required}
app_port=${4:-3000}
[[ "$image" =~ ^ghcr\.io/[a-z0-9._/-]+@sha256:[a-f0-9]{64}$ ]] || { echo "Invalid image digest" >&2; exit 1; }
[[ "$app_port" =~ ^[0-9]+$ ]] && ((app_port >= 1024 && app_port <= 65535)) || { echo "Invalid app port" >&2; exit 1; }
[[ $(basename "$(dirname "$release")") == releases ]] || { echo "Expected a releases directory" >&2; exit 1; }
root=$(dirname "$(dirname "$release")")
command -v flock >/dev/null
exec 9>"$root/.deploy.lock"
flock -w 300 9

compose() {
  local folder=$1
  shift
  docker compose --project-name resume-site --env-file "$folder/.env" -f "$folder/compose.prod.yaml" "$@"
}

previous=""
if [[ -L "$root/current" ]]; then
  previous=$(readlink -f "$root/current")
  [[ -f "$previous/.env" && -f "$previous/compose.prod.yaml" ]] || { echo "Previous release is incomplete" >&2; exit 1; }
fi
printf 'IMAGE=%s\nAPP_PORT=%s\nRUNTIME_ENV_FILE=%s/runtime.env\n' "$image" "$app_port" "$root" > "$release/.env"
compose "$release" config --quiet
if [[ -z "$previous" && -n $(compose "$release" ps -aq) ]]; then
  echo "Existing resume-site containers are not managed by this release directory; refusing to replace them." >&2
  exit 1
fi

auth_dir=$(mktemp -d)
trap 'rm -rf "$auth_dir"' EXIT
export DOCKER_CONFIG="$auth_dir"
IFS= read -r registry_token
printf '%s' "$registry_token" | docker login ghcr.io --username "$registry_user" --password-stdin
unset registry_token

# Pull completes while the old release is still running.
compose "$release" pull website
if compose "$release" up -d --wait --wait-timeout 90; then
  if [[ -n "$previous" ]]; then
    ln -sfn "$previous" "$root/previous"
  fi
  ln -s "$release" "$root/.current-$$"
  mv -Tf "$root/.current-$$" "$root/current"
  printf 'Deployed %s\n' "$image"
else
  compose "$release" logs --tail 80 website >&2 || true
  if [[ -n "$previous" ]]; then
    echo "Health check failed; restoring previous release." >&2
    if ! compose "$previous" up -d --pull never --wait --wait-timeout 90; then
      echo "ROLLBACK FAILED: manual intervention required." >&2
      exit 2
    fi
  else
    compose "$release" down
    echo "First deployment failed; no previous release exists." >&2
  fi
  exit 1
fi
