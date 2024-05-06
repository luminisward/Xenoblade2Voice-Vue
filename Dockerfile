FROM node:14 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx:latest

COPY --from=builder /app/dist/ /usr/share/nginx/html/
