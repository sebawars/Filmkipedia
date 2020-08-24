FROM node:12-alpine

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
COPY ./back /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 3010
CMD ["npm", "run", "start:prod"]
