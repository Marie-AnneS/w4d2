// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user: settings.user,
      password: settings.password,
      hostname: settings.hostname,
      port: settings.port,
      ssl: settings.ssl,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user: settings.user,
      password: settings.password,
      hostname: settings.hostname,
      port: settings.port,
      ssl: settings.ssl,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
