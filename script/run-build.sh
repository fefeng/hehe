#!/bin/bash
docker run -ti -v `pwd`:/data  192.168.18.250:5002/guest/node:4.4 /data/script/build.sh