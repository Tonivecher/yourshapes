# ---------- build ----------
FROM node:22-slim AS build

WORKDIR /app
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# Устанавливаем зависимости
COPY webapp-pure-form-7dzsf1/apps/website/package*.json ./webapp-pure-form-7dzsf1/apps/website/
RUN cd webapp-pure-form-7dzsf1/apps/website && npm ci || npm install

# Принудительная пересборка esbuild и rollup
RUN cd webapp-pure-form-7dzsf1/apps/website && npm install esbuild@0.25.12 rollup@4.22.4 --force \
 && npm rebuild esbuild rollup \
 && npm cache clean --force

# Копируем исходники и билдим
COPY webapp-pure-form-7dzsf1/apps/website ./webapp-pure-form-7dzsf1/apps/website
RUN cd webapp-pure-form-7dzsf1/apps/website && npm run build

# ---------- serve ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/webapp-pure-form-7dzsf1/apps/website/dist ./

RUN rm /etc/nginx/conf.d/default.conf \
 && printf "server {\n\
  listen 80;\n\
  server_name localhost;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / {\n\
    try_files \\$uri \\$uri/ /index.html;\n\
  }\n\
  types {\n\
    text/html html htm shtml;\n\
    text/css css;\n\
    application/javascript js mjs;\n\
    application/wasm wasm;\n\
    font/woff2 woff2;\n\
    font/woff woff;\n\
    font/otf otf;\n\
    image/svg+xml svg;\n\
    image/png png;\n\
    image/jpeg jpg jpeg;\n\
    image/x-icon ico;\n\
  }\n\
}\n" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]

# ---------- Конец Dockerfile ----------
