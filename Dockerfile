FROM node:14-alpine

WORKDIR /Home

COPY . /var/lib/jenkins/workspace/works


RUN npm start


EXPOSE 3000


CMD ["node", "app.js"]





