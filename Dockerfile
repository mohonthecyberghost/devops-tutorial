# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "roll1604@yahoo.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://172.18.0.2:8080 || exit 1

# tell docker what port to expose
EXPOSE 8080