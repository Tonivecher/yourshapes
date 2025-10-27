#!/usr/bin/env bash
# Ensure Bun is available for the build so Timeweb Cloud deployments succeed.

set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

if command -v apt-get >/dev/null 2>&1; then
  apt-get update
  apt-get install -y curl ca-certificates unzip
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required for installing Bun. Ensure it is available before running this script." >&2
  exit 1
fi

if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
fi

export BUN_INSTALL="${HOME}/.bun"
export PATH="${BUN_INSTALL}/bin:${PATH}"

bun install --frozen-lockfile
bun run build:website
