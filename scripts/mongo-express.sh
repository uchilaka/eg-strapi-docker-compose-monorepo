#!/usr/bin/env bash
# @Important requires mongo.simple-app container!

docker run -it --rm \
--name mongo-express.simple-app \
--network simple-app-network \
--link "mongo.simple-app:mongo" \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=Test1234 \
-p 8081:8081 mongo-express
