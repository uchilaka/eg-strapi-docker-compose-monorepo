module.exports = ({ env }) => {
  const mongoose = {
    connector: 'mongoose',
    settings: {
      srv: env.bool('DATABASE_SRV', false),
      port: env.int('DATABASE_PORT', 27017),
      host: env('DATABASE_HOST'),
      username: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      database: env('DATABASE_NAME', 'local'),
    },
    options: {
      authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  }

  // The default DB configuration that Strapi uses (informative - not needed by this example)
  const sqlite = {
    connector: 'bookshelf',
    settings: {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    options: {
      useNullAsDefault: true,
    },
  }
  
  // console.debug({ mongoose })

  return {
    defaultConnection: 'mongoose',
    connections: {
      sqlite,
      // Configure mongodb: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#_5-update-and-replace-your-existing-database-js-config-file-for-the-appropriate-environment-development-production
      mongoose,
    },
  }
};
