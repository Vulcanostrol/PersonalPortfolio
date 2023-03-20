FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npx tailwindcss init -p

COPY . .

EXPOSE 3000

CMD npm run dev