#!/usr/bin/env bash
set -Eeuo pipefail
set +x
cd "$(dirname "$0")/.."
# Serialize setup with deployments when running in /opt/resume-site/current.
release=$(pwd -P)
if [[ $(basename "$(dirname "$release")") == releases ]]; then
  exec 9>"$(dirname "$(dirname "$release")")/.deploy.lock"
  flock -w 300 9
fi
compose=(docker compose --project-name resume-site -f compose.prod.yaml)
"${compose[@]}" exec -T website test -f /app/scripts/create-admin-config.mjs || {
  echo 'Deploy an image containing the admin setup script first.' >&2; exit 1;
}
if "${compose[@]}" exec -T website test -e /app/data/admin.env; then
  echo 'Admin is already configured in the volume; existing credentials were not changed.' >&2
  exit 1
fi
read -r -p 'Admin username: ' username
read -r -p 'Site origin [https://wwncv.tech]: ' origin
origin=${origin:-https://wwncv.tech}
read -r -s -p 'Password (16–128 characters): ' password
printf '\n'
read -r -s -p 'Repeat password: ' confirmation
printf '\n'
[[ "$password" == "$confirmation" ]] || { echo 'Passwords do not match.' >&2; exit 1; }
printf '%s' "$password" | "${compose[@]}" exec -T website node scripts/create-admin-config.mjs \
  --username "$username" --origin "$origin" --output /app/data/admin.env
unset password confirmation
printf '%s\n' 'Admin is ready. Credentials are read from the persistent volume; no restart needed.'
