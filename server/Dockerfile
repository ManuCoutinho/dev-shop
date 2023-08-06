FROM node:lts-slim

WORKDIR /home/node/app

COPY package*.json ./

# Copy environments from your .env file
COPY .env ./

COPY . .

RUN npm install
EXPOSE 4242

CMD ["npm", "start"]
