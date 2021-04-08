module.exports = ({ env }) => ({
  defaultConnection: 'sqlite',
  connections: {
    sqlite: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
    // // Configure mongodb: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#_5-update-and-replace-your-existing-database-js-config-file-for-the-appropriate-environment-development-production
    // mongoose: {
    //   connector: 'mongoose',
    //   settings: {
    //     uri: env('DATABASE_URI'),
    //     srv: env.bool('DATABASE_SRV', true),
    //     port: env.int('DATABASE_PORT', 27017),
    //     database: env('DATABASE_NAME'),
    //   },
    //   options: {
    //     authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
    //     ssl: env.bool('DATABASE_SSL', true),
    //   },
    // }
  },
});
