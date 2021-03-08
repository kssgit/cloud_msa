FROM ubuntu

RUN apt-get update
RUN apt-get install -y nodejs

ADD app.js /app.js

ENTRYPOINT ["node", "app.js"]