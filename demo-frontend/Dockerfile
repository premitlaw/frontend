#IMAGE FOR DEPLOYMENT
FROM node:10

WORKDIR /demo/
COPY package.json ./package.json
COPY dist ./dist
RUN npm i --only=production
CMD ["npm", "start"]