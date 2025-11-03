# ---------- build ----------
FROM node:22-slim AS build

# ускоряем сборку и избегаем региональных зеркал
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

WORKDIR /app

# копируем только package.json и lockfile для кэширования зависимостей
COPY apps/website/package*.json ./

# устанавливаем зависимости
RUN npm ci || npm install

# пересобираем esbuild для текущей платформы, чтобы избежать ошибки Expected 0.25.x
RUN npm rebuild esbuild && npm cache clean --force

# копируем исходники и собираем проект
COPY apps/website/ ./
RUN npm run build

# ---------- serve ----------
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# копируем готовый билд
COPY --from=build /app/dist ./

# SPA fallback конфигурация
RUN rm /etc/nginx/conf.d/default.conf \
 && printf "server {\n\
  listen 80;\n\
  server_name localhost;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / {\n\
    try_files \$uri \$uri/ /index.html;\n\
  }\n\
}" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
