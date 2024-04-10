FROM node:lts-alpine
WORKDIR /code

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ENV NODE_ENV development
ARG PORT=3000
ENV PORT $PORT

EXPOSE $PORT

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY yarn.lock yarn.lock
COPY node_modules node_modules

RUN apk update && apk add bash
RUN yarn install

COPY src src

RUN yarn run build

CMD ["node", "./dist/index.js"]
