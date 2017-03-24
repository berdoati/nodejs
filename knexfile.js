// Update with your config settings.
require('dotenv').config()
const path = require('path')

module.exports = {
  development: {
      client: 'mysql',
      connection: {
          host: process.env.MYSQL_HOST,
          database: process.env.MYSQL_DATABASE,
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          port: process.env.MYSQL_PORT
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations',
          directory: path.join(__dirname, 'migrations')
      }
  }
};
