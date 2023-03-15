FROM node:18

WORKDIR /home/list-emails

#Install dependencies
COPY package*.json ./

#For production run with --only=production
RUN npm install

#Only the files not included in the .dockerignore are going to be copied
COPY ./ ./

EXPOSE 9001
CMD ["npm","run","start:dev"]