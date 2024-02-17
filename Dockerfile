FROM node:16


RUN mkdir transform

COPY . ./transform

WORKDIR ./transform

RUN yarn && yarn build

EXPOSE 3000

CMD [ "yarn", "start"]
