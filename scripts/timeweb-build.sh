#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
APP_ROOT="${PROJECT_ROOT}/webapp-pure-form-7dzsf1"
APP_DIST_DIR="${APP_ROOT}/apps/website/dist"
OUTPUT_DIR="${PROJECT_ROOT}/dist"

build_with_bun() {
  echo "Installing website dependencies with Bun..."
  cd "${APP_ROOT}"
  bun install --frozen-lockfile

  echo "Building website for Timeweb with Bun..."
  VITE_BASE_PATH=/ bun run build:website
}

build_with_npm() {
  echo "Installing website dependencies with npm..."
  cd "${APP_ROOT}/apps/website"
  npm install --no-audit --no-fund

  echo "Bun is unavailable. Building website for Timeweb with npm..."
  VITE_BASE_PATH=/ npm run build
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
