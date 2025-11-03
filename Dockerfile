# ---------- build ----------
FROM node:22-slim AS build

WORKDIR /app
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# Устанавливаем зависимости
COPY apps/website/package*.json ./apps/website/
RUN cd apps/website && npm ci || npm install

# Принудительно пересобираем esbuild и rollup
RUN cd apps/website && npm install esbuild@0.25.12 rollup@4.22.4 --force \
 && npm rebuild esbuild rollup \
 && npm cache clean --force

# Копируем код и билдим
COPY apps/website ./apps/website
RUN cd apps/website && npm run build --verbose || (echo "=== BUILD LOG ===" && cat /root/.npm/_logs/* || true)

# ---------- serve ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Важно: теперь копируем из правильной папки
COPY --from=build /app/apps/website/dist ./

# Настройка SPA fallback для React Router
RUN rm /etc/nginx/conf.d/default.conf \
 && printf "server {\n\
  listen 80;\n\
  server_name localhost;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / { try_files \$uri \$uri/ /index.html; }\n\
}\n" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
