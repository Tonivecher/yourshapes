#!/usr/bin/env bash
# Launch the Timeweb MCP server with the required environment configuration.

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
ENV_FILE="${PROJECT_ROOT}/.env.timeweb"

if [[ -f "${ENV_FILE}" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "${ENV_FILE}"
  set +a
fi

if [[ -z "${TIMEWEB_TOKEN:-}" ]]; then
  cat <<'MSG' >&2
TIMEWEB_TOKEN is not set.
Create an .env.timeweb file based on .env.timeweb.example and add your Timeweb API token,
or export the TIMEWEB_TOKEN environment variable before running this script.
MSG
  exit 1
fi

exec npx --yes timeweb-mcp-server "$@"
