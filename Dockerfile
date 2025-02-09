FROM node:20.11.0-alpine
WORKDIR /home/backend
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
