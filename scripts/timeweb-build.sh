#!/usr/bin/env bash
# Build script for Timeweb deployments. Ensures a modern Node.js runtime is available
# before installing dependencies and running the Vite build for the website workspace.

set -euo pipefail

cd webapp-pure-form-7dzsf1/apps/website

NODE_VERSION="${NODE_VERSION:-20.18.0}"
NODE_BIN_DIR="$(pwd)/node_modules/node/bin"

if [[ ! -x "${NODE_BIN_DIR}/node" ]]; then
  npm install --no-save "node@${NODE_VERSION}"
fi

export PATH="${NODE_BIN_DIR}:${PATH}"
export npm_config_cache="${npm_config_cache:-$(pwd)/.npm-cache}"

if [[ -f package-lock.json ]]; then
  "${NODE_BIN_DIR}/npm" ci
else
  "${NODE_BIN_DIR}/npm" install
fi

"${NODE_BIN_DIR}/npm" run build

rm -rf "${npm_config_cache}"
