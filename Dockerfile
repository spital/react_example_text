FROM node:24-bookworm-slim

WORKDIR /opt/my-first-app

COPY my-first-app/package.json my-first-app/package-lock.json ./
RUN npm ci

COPY my-first-app/ ./

EXPOSE 3000
CMD ["npm", "start"]
