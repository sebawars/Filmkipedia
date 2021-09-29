# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10
 
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
RUN mkdir -p /usr/src/app

COPY ./front/package.json ./usr/src/app

WORKDIR /usr/src/app
# Installs all node packages
RUN npm install

COPY ./front ./

# Uses port which is used by the actual application
EXPOSE 3011
 
# Finally runs the application
CMD [ "npm", "start" ]
