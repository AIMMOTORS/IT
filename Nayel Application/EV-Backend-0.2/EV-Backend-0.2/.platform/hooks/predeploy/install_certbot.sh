#!/bin/sh

# Installs certbot from EPEL repository
# https://certbot.eff.org/instructions

sudo amazon-linux-extras enable epel

sudo yum install -y epel-release

sudo yum -y update

sudo yum install -y certbot python2-certbot-nginx

# sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
# sudo yum-config-manager --enable epel
# sudo yum install -y certbot python3-certbot-nginx
certbot --version
