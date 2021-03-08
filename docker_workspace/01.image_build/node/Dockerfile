FROM ubuntu

RUN apt-get update && apt-get install -y nodejs && apt-get install -y vim

ADD  app.js /app.js

ENTRYPOINT ["node", "app.js"]
