# ---------- build ----------
FROM node:22-slim AS build

WORKDIR /app
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# Устанавливаем зависимости
COPY apps/website/package*.json ./apps/website/
RUN cd apps/website && npm ci || npm install

# Устанавливаем typescript, если не подтянулся
RUN cd apps/website && npm install typescript --save-dev

# Принудительно пересобираем esbuild и rollup
RUN cd apps/website && npm install esbuild@0.25.12 rollup@4.22.4 --force \
 && npm rebuild esbuild rollup \
 && npm cache clean --force

# Копируем код и общие конфиги
COPY tsconfig*.json ./ || true
COPY apps/website ./apps/website

# Собираем проект
RUN cd apps/website && npm run build --verbose || (echo "=== BUILD LOG ===" && cat /root/.npm/_logs/* || true)

# ---------- serve ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/apps/website/dist ./

RUN rm /etc/nginx/conf.d/default.conf \
 && cat <<'EOF' > /etc/nginx/conf.d/default.conf
server {
  listen 80;
  server_name localhost;
  root /usr/share/nginx/html;
  index index.html;

  types {
    text/css css;
    application/javascript js mjs;
    font/woff2 woff2;
    font/woff woff;
    font/otf otf;
  }

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
