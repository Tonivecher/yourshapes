FROM node:22-slim AS build
WORKDIR /app
ENV NODE_ENV=production
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
COPY apps/website/package*.json ./
RUN npm ci || npm install
RUN npm install esbuild@0.25.12 --force && npm rebuild esbuild && npm cache clean --force
COPY apps/website/ ./
RUN npm run build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
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
