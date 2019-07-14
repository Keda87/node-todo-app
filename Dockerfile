FROM node:10.14.2-alpine

RUN mkdir -p /sourcecode
WORKDIR /sourcecode

COPY . /sourcecode

RUN npm install -g yarn nodemon babel-cli && yarn install && yarn build