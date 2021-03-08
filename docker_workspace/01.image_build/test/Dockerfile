FROM ubuntu

RUN apt-get update && apt-get install -y -q nginx

COPY  index.html /user/share/nginx/html

CMD nginx -g daemon off

