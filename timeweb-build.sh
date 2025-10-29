#!/usr/bin/env bash
set -euo pipefail

# Опционально: уважаем lock-файл
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Билдим по скрипту проекта
npm run build
