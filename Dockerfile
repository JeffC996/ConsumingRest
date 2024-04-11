FROM node:20.11.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x ./wait-for-it.sh
CMD ["node", "index.js"]
