#!/usr/bin/env bash
# @IMPORTANT requires mongo.simple-app container!
# @IMPORTANT requires .env.local exists and sets DB env variables!

REPO_ROOT=$(realpath "$(dirname ${BASH_SOURCE[0]})/../")

ENV_FILE="${REPO_ROOT}/.env"
ENV_LOCAL_FILE="${REPO_ROOT}/.env.local"

# Load environment variables from file(s)
[ -f $ENV_FILE ] && export $(egrep -v '^#' $ENV_FILE | xargs)
[ -f $ENV_LOCAL_FILE ] && export $(egrep -v '^#' $ENV_LOCAL_FILE | xargs)

docker run -it --rm \
--name mongo-express.simple-app \
--network simple-app-network \
--link "mongo.simple-app:mongo" \
-e ME_CONFIG_MONGODB_ADMINUSERNAME="${DATABASE_USERNAME}" \
-e ME_CONFIG_MONGODB_ADMINPASSWORD="${DATABASE_PASSWORD}" \
-p 8081:8081 mongo-express
