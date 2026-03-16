#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
APP_ROOT="${PROJECT_ROOT}/webapp-pure-form-7dzsf1"
APP_DIST_DIR="${APP_ROOT}/apps/website/dist"
OUTPUT_DIR="${PROJECT_ROOT}/dist"

ensure_bun() {
  if command -v bun >/dev/null 2>&1; then
    return
  fi

  echo "Bun is not installed. Installing Bun..."
  curl -fsSL https://bun.sh/install | bash
  export BUN_INSTALL="${HOME}/.bun"
  export PATH="${BUN_INSTALL}/bin:${PATH}"
}

ensure_bun

echo "Cleaning nested workspace node_modules to avoid mixed React type resolution..."
rm -rf "${APP_ROOT}/node_modules" "${APP_ROOT}/apps/website/node_modules"

echo "Installing workspace dependencies with Bun..."
cd "${PROJECT_ROOT}"
bun install --frozen-lockfile

echo "Building website for Timeweb..."
VITE_BASE_PATH=/ bun run build:website

echo "Syncing build output to ${OUTPUT_DIR}..."
rm -rf "${OUTPUT_DIR}"
cp -R "${APP_DIST_DIR}" "${OUTPUT_DIR}"

echo "Timeweb build finished."
