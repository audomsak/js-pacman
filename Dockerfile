FROM node:7
COPY . /usr/src/app
EXPOSE 8080

WORKDIR /usr/src/app
RUN ["npm", "install"]
ENTRYPOINT ["node", "app.js"]
