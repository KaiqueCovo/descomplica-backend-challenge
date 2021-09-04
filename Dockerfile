FROM node:14-alpine as development

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

CMD npm run start:dev

FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --only=production

COPY . .

RUN npm run build

CMD npm run start