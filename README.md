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

## Setup your (local) environment

> You're missing your `env.local` file!

### Step 1: Create the `.env.local` file

### Step 2: Customize your environment variables

Next, copy over the following contents and set your database credentials. You can leave in the defaults (`strapi:strapi` in basic auth notation) if you're just getting your local dev environment going.

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

The project's compose script for each service is setup to load [./.env](./env) first, and then your `.env.local` file - overwriting in the former any variables declared in the latter.

These environment variables are also loaded by [./scripts/mongo-express.sh](./scripts/mongo-express.sh) for running the database admin app.

## Starting your CMS

- Run `yarn up`
- To administer your mongo database(s), run `yarn db:admin` to run `mongo-express` as a standalone container in the same network (review the code to see how we do this with `docker run`)
