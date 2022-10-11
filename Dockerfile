FROM node:14.20.0
WORKDIR /app
COPY . .
CMD ["node", "main.js"]