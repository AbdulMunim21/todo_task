FROM node:alpine

WORKDIR /app

COPY ./server/package.json package.json .

RUN npm install

COPY . .

EXPOSE 5000
EXPOSE 3000

CMD ["npm","start"]
CMD ["npm","run", "start-server"]