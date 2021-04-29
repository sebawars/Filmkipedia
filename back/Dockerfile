FROM node:12-alpine

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
COPY ./back /usr/src/app
WORKDIR /usr/src/app

RUN yarn global add typescript
RUN yarn install
RUN yarn run build

EXPOSE 3010
CMD ["yarn", "run", "start:prod"]
