FROM node:10.14.2-alpine

RUN mkdir -p /sourcecode
WORKDIR /sourcecode

COPY . /sourcecode

RUN apk add mongodb=3.6.7-r0\
    && npm install -g yarn nodemon babel-cli\
    && yarn install && yarn build

ENV MONGOMS_SYSTEM_BINARY=/usr/bin/mongod