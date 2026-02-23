FROM ubuntu:22.04

RUN apt update
RUN apt -y install sudo
RUN sudo apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
RUN sudo apt-get -y install nodejs gcc g++ make  # npm -v 6.10.2 node -v v12.8.0

COPY ./my-first-app/ /opt/

WORKDIR /opt/my-first-app
# EXPOSE 3000
CMD cd /opt/my-first-app && npm start
