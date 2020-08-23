FROM node:12-alpine

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./

RUN npm install && npm run build

EXPOSE 3000
CMD ["npm", "start:prod"]