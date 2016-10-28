#!/bin/bash
docker run -ti -v `pwd`:/src node-build:3.0 ./script/build.sh
