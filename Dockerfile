FROM node:14-alpine

LABEL MAINTAINER Bharath Naik "bharath.vadithya@gmail.com"

ENV REFRESHED_AT 2021-07-16
ENV NODE_ENV=production
#create app working directory
WORKDIR /speakerSocket

#Install app dependencies
# A wildcard is used to ensure both package.json
COPY ["./speaker", "./"]

RUN npm install --production

CMD ["node", "socketioServer.js"] 

EXPOSE 8081
