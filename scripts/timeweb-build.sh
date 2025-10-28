#!/usr/bin/env bash
# Build script for Timeweb deployments. Ensures a modern Node.js runtime is available
# before installing dependencies and running the Vite build for the website workspace.

set -euo pipefail

NODE_VERSION="${NODE_VERSION:-20.18.0}"
NODE_ARCHIVE="node-v${NODE_VERSION}-linux-x64"
NODE_URL="https://nodejs.org/dist/v${NODE_VERSION}/${NODE_ARCHIVE}.tar.xz"
NODE_DIR="$(pwd)/.timeweb-node"

if [[ ! -x "${NODE_DIR}/bin/node" ]]; then
  mkdir -p "${NODE_DIR}"
  tmp_archive="$(mktemp)"
  curl -fsSL "${NODE_URL}" -o "${tmp_archive}"
  tar -xJf "${tmp_archive}" -C "${NODE_DIR}" --strip-components=1
  rm -f "${tmp_archive}"
fi

export PATH="${NODE_DIR}/bin:${PATH}"

cd webapp-pure-form-7dzsf1/apps/website

if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

npm run build
