FROM node:20-slim

WORKDIR /app
COPY . .

RUN npm install esbuild@0.25.8
RUN npm install
RUN npm run build

CMD ["npm", "start"]
