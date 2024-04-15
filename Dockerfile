FROM node:20-bookworm

WORKDIR /usr/src

COPY ./package.json .

RUN npm install