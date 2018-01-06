FROM debian:stretch-slim

EXPOSE 80

RUN apt-get update \
    && apt-get dist-upgrade -y \
    && apt-get install -y nginx-light \
    && apt-get clean

COPY nginx.conf /etc/nginx/
COPY dist/ /var/www/frontend/

CMD ["nginx", "-g", "daemon off;"]