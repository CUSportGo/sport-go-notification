FROM node

WORKDIR /app

COPY package.json .

RUN yarn  

COPY . .

EXPOSE 8084

CMD ["yarn", "start:dev"]

