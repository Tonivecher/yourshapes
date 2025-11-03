FROM node:22-alpine AS build
WORKDIR /app/apps/website

# Install dependencies first to leverage Docker layer caching.
COPY webapp-pure-form-7dzsf1/apps/website/package.json ./
RUN npm install --no-audit --no-fund

# Copy source and build the production bundle.
COPY webapp-pure-form-7dzsf1/apps/website ./
RUN npm run build

FROM nginx:1.27-alpine AS serve
ENV NODE_ENV=production
WORKDIR /usr/share/nginx/html

COPY --from=build /app/apps/website/dist ./

RUN rm /etc/nginx/conf.d/default.conf \
 && cat <<'EOF' > /etc/nginx/conf.d/default.conf
server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
