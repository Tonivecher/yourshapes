# ---------- build ----------
FROM node:22-slim AS build
WORKDIR /app
COPY apps/website/package*.json ./
RUN npm ci
COPY apps/website/ ./
RUN npm run build

# ---------- serve ----------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./

RUN rm /etc/nginx/conf.d/default.conf
RUN printf "server {\n\
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
