#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

: "${DEPLOY_HOST:?Set DEPLOY_HOST}"
: "${DEPLOY_USER:?Set DEPLOY_USER}"
: "${SSH_PRIVATE_KEY:?Set SSH_PRIVATE_KEY}"
: "${SSH_KNOWN_HOSTS:?Set SSH_KNOWN_HOSTS}"
: "${DEPLOY_IMAGE:?Set DEPLOY_IMAGE}"
: "${GHCR_TOKEN:?Set GHCR_TOKEN}"
: "${GHCR_USER:?Set GHCR_USER}"
DEPLOY_PORT=${DEPLOY_PORT:-22}
DEPLOY_PATH=${DEPLOY_PATH:-/opt/resume-site}
APP_PORT=${APP_PORT:-3000}

# Restrict the values used in the remote command and scoping of release files.
[[ "$DEPLOY_HOST" =~ ^[a-zA-Z0-9][a-zA-Z0-9.:-]*$ ]]
[[ "$DEPLOY_USER" =~ ^[a-z_][a-z0-9_-]*$ ]]
[[ "$GHCR_USER" =~ ^[a-zA-Z0-9][a-zA-Z0-9_-]*$ ]]
[[ "$DEPLOY_PATH" =~ ^/[a-zA-Z0-9/_-]+$ && "$DEPLOY_PATH" != / ]]
[[ "$DEPLOY_PORT" =~ ^[0-9]+$ ]] && ((DEPLOY_PORT >= 1 && DEPLOY_PORT <= 65535))
[[ "$APP_PORT" =~ ^[0-9]+$ ]] && ((APP_PORT >= 1024 && APP_PORT <= 65535))
[[ "$DEPLOY_IMAGE" =~ ^ghcr\.io/[a-z0-9._/-]+@sha256:[a-f0-9]{64}$ ]]
release_id="${GITHUB_RUN_ID:?}-${GITHUB_RUN_ATTEMPT:?}"
[[ "$release_id" =~ ^[0-9]+-[0-9]+$ ]]
release="$DEPLOY_PATH/releases/$release_id"

ssh_dir=$(mktemp -d)
trap 'rm -rf "$ssh_dir"' EXIT
printf '%s\n' "$SSH_PRIVATE_KEY" > "$ssh_dir/key"
printf '%s\n' "$SSH_KNOWN_HOSTS" > "$ssh_dir/known_hosts"
unset SSH_PRIVATE_KEY
ssh_options=(-i "$ssh_dir/key" -p "$DEPLOY_PORT" -o BatchMode=yes -o IdentitiesOnly=yes
  -o StrictHostKeyChecking=yes -o "UserKnownHostsFile=$ssh_dir/known_hosts"
  -o ConnectTimeout=15 -o ServerAliveInterval=15 -o ServerAliveCountMax=4)
target="$DEPLOY_USER@$DEPLOY_HOST"
tar -czf - compose.prod.yaml scripts/deploy-server.sh |
  ssh "${ssh_options[@]}" "$target" "umask 077; mkdir -p '$release' && tar -xzf - -C '$release'"
printf '%s\n' "$GHCR_TOKEN" |
  ssh "${ssh_options[@]}" "$target" "bash '$release/scripts/deploy-server.sh' '$release' '$DEPLOY_IMAGE' '$GHCR_USER' '$APP_PORT'"
