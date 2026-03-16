#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
APP_ROOT="${PROJECT_ROOT}/webapp-pure-form-7dzsf1"
APP_DIST_DIR="${APP_ROOT}/apps/website/dist"
OUTPUT_DIR="${PROJECT_ROOT}/dist"

build_with_bun() {
  echo "Installing workspace dependencies with Bun..."
  cd "${PROJECT_ROOT}"
  bun install --frozen-lockfile

  echo "Building website for Timeweb with Bun..."
  VITE_BASE_PATH=/ bun run build:website
}

build_with_npm() {
  if [[ ! -d "${PROJECT_ROOT}/node_modules" ]]; then
    echo "Root node_modules are missing. Installing dependencies with npm..."
    cd "${PROJECT_ROOT}"
    npm install
  fi

  echo "Bun is unavailable. Building website for Timeweb with npx..."
  cd "${APP_ROOT}/apps/website"
  npx tsc -b
  VITE_BASE_PATH=/ npx vite build
}

echo "Cleaning nested workspace node_modules to avoid mixed React type resolution..."
rm -rf "${APP_ROOT}/node_modules" "${APP_ROOT}/apps/website/node_modules"

if command -v bun >/dev/null 2>&1; then
  build_with_bun
else
  build_with_npm
fi

echo "Syncing build output to ${OUTPUT_DIR}..."
rm -rf "${OUTPUT_DIR}"
cp -R "${APP_DIST_DIR}" "${OUTPUT_DIR}"

echo "Timeweb build finished."
