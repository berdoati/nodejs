class Migration {
  static up (knex) {
    const createUsersTable = knex.schema.createTable('users', (table) => {
      table.increments()
      table.string('name')
    })
    const createPasswordsTable = knex.schema.createTableIfNotExists('passwords', (table) => {
        table.increments()
        table.string('value')
        table.integer('userId')
          .unsigned()
          .references('id')
          .inTable('users')
      })

    console.log(createUsersTable.toString())
    console.log(createPasswordsTable.toString())

    return createUsersTable
    .then(() => {
      return createPasswordsTable
    })
  }

  static down (knex) {
    return knex.schema.dropTableIfExists('passwords')
      .then(() => {
        return knex.schema.dropTableIfExists('users')
      })
  }
}

module.exports = Migration
