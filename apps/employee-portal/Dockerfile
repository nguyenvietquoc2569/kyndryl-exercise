# production environment
# FROM nginx:stable-alpine
# FROM node:14
FROM nguyenvietquoc2569/node-beta-athena:latest
WORKDIR /usr/src/app
EXPOSE 3000

COPY dist/apps/employee-portal /usr/src/app
COPY package.json ./
RUN yarn install
# new
CMD [ "yarn", "start-prod" ]
