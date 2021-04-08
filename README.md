# Simple App Monorepo

> All commands should be run from the monorepo root.

This came out of an awesome jam session with [Sean](https://github.com/seannemann21)!

This example uses a simple app use case (frontend app + backend CMS) to demonstrate how docker + docker-compose can level up your local development game. **Strapi is simply something I'm quite familiar with. This is not an endorsement**.

> Opinion alert

If you're a budding engineer looking to learn about orchestration, it's probably more valuable to explore accomplishing this demo with Kubernetes instead (hint: minikube makes it easy to do kubernetes things locally). Perhaps we'll do a future example repo where we replicate this example solution in Kubernetes 🤞🏾

That said, `docker` + `docker-compose` makes it pretty easy. I'll have to revisit this "easy" claim once I've looked into doing same with Kubernetes (I'd be learning when I do - just like you!).

## Libraries / Tooling

- React
- Strapi
- Docker Desktop (not required, but your life would be much easier)
  - Docker (required)
  - Docker Compose (required)

## Monorepo filesystem

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

> PS: You're missing your `env.local` file!

### Step 1: Create the `.env.local` file

### Step 2: Define / customize your environment variables

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


############################
# sendgrid
############################
SENDGRID_API_KEY=
SENDGRID_DEFAULT_FROM=
SENDGRID_DEFAULT_REPLYTO=

```

The project's compose script for each service is setup to load [./.env](./.env) first, and then your `.env.local` file - overwriting in the former any variables declared in the latter.

These environment variables are also loaded by [./scripts/mongo-express.sh](./scripts/mongo-express.sh) for running the database admin app.

## Starting your CMS

- Run `yarn up`. **The first time you do this will take a coffee break to run - installing node dependencies etc.**. Once that's done, it will be incremental for future stuff like installing a new Strapi plugin.
- Visit <http://localhost:1337/admin> to get started setting up Strapi
- To administer your mongo database(s), run `yarn db:admin` to run `mongo-express` as a standalone container in the same network (review the code to see how we do this with `docker run`)

### Setup other plugins

You can checkout a directory of plugins available for Strapi [here](https://github.com/strapi/awesome-strapi#CommunityPlugins).

#### GraphQL

- Visit <http://localhost:1337/admin/marketplace>
- Download and install the GraphQL plugin

### Sendgrid

- Run `yarn debug:cms` to console into your strapi instance
- Run `yarn add strapi-provider-email-sendgrid` in your instance
- Configure the plugin: <https://github.com/strapi/strapi/tree/master/packages/strapi-provider-email-sendgrid#example> (the [plugin config file](./packages/apps/cms/config/plugins.js) is in source control, so it should already exist)
- Now you can email! Visit <http://localhost:1337/admin/settings/email> to test your mailer.

## (Related) Cool Stuff

- <https://github.com/strapi/awesome-strapi>

## (Unrelated) Cool Stuff

- <https://github.com/sindresorhus/awesome>
