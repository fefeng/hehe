FORM nginx:latest
COPY dist.tar.gz /tmp
RUN tar xvf /tmp/dist.tar.gz -C /usr/share/nginx/html/ 