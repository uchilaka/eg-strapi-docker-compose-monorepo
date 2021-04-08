#!/usr/bin/env bash
# @IMPORTANT requires mongo.simple-app container!
# @IMPORTANT requires .env.local exists and sets DB env variables!

docker run -it --rm \
--name mongo-express.simple-app \
--network simple-app-network \
--link "mongo.simple-app:mongo" \
--env-file .env.local \
-p 8081:8081 mongo-express
