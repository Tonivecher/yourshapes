# -------- build stage --------
FROM node:20-slim AS build
WORKDIR /app

# copy only website package first to leverage layer caching
COPY apps/website/package*.json ./ 
RUN npm ci

# now copy the website sources and build
COPY apps/website/ ./
RUN npm run build

# -------- run stage --------
FROM nginx:alpine
# copy built static into nginx html root
COPY --from=build /app/dist /usr/share/nginx/html
# optional: basic SPA fallback
RUN printf "try_files \$uri /index.html;\n" > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
