FROM node:12-alpine

ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/streamer/assets
COPY ./streamer /usr/src/streamer
WORKDIR /usr/src/streamer

RUN npm install

EXPOSE 3010
CMD ["npm", "run", "dev"]
