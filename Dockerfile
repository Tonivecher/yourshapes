# ---------- build ----------
FROM node:22-slim AS build
WORKDIR /app

# отключаем автообновления и шум npm
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# копируем package.json и lockfile
COPY apps/website/package*.json ./

# ставим зависимости
RUN npm ci || npm install

# гарантированно синхронизируем esbuild бинарь
RUN npm install esbuild@0.25.12 --force && npm rebuild esbuild && npm cache clean --force

# копируем исходники и собираем проект
COPY apps/website/ ./
RUN npm run build

# ---------- serve ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist ./

# конфиг для SPA
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
