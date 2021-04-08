# Simple App Monorepo

With Sean!

## Filesystem

```shell
.
├── README.md
├── docker-compose.yml
├── packages
│   └── apps
│       └── hello-simple-app
└── sam.code-workspace
```

## Environment variables

Review the comments in the [./.env](./env) file for notes on environment variables to get this example running.

Here's what my `.env.local` looked like

```shell
# file: .env.local

############################
# strapi/strapi
############################
NODE_ENV=development
DATABASE_NAME=local
# @IMPORTANT You need to set this
DATABASE_USERNAME=strapi
# @IMPORTANT You need to set this
DATABASE_PASSWORD=strapi

############################
# mongo
############################
MONGO_INITDB_ROOT_USERNAME="${DATABASE_USERNAME}"
MONGO_INITDB_ROOT_PASSWORD="${DATABASE_PASSWORD}"


############################
# mongo-express
############################
ME_CONFIG_MONGODB_ADMINUSERNAME="${DATABASE_USERNAME}"
ME_CONFIG_MONGODB_ADMINPASSWORD="${DATABASE_PASSWORD}"

```
