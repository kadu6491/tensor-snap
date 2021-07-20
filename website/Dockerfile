FROM node:latest AS builder

RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .

