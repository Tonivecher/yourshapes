#!/usr/bin/env bash
# Build script for Timeweb deployments. Ensures a modern Node.js runtime is available
# before installing dependencies and running the Vite build for the website workspace.

set -euo pipefail

cd webapp-pure-form-7dzsf1/apps/website

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required on PATH" >&2
  exit 1
fi

export npm_config_cache="${npm_config_cache:-$(pwd)/.npm-cache}"

if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

# Ensure esbuild binary matches the expected version from the workspace lockfile
npm install esbuild@0.25.8 --no-save --package-lock=false

npm run build

rm -rf "${npm_config_cache}"
