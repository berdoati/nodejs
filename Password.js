const { Model } = require('objection')
const path = require('path')

class Password extends Model {
    static get tableName () { return 'passwords' }

    static get jsonSchema () {
      return {
          type: 'object',
          properties: {
              value: {
                  type: 'string'
              },
              userId: {
                  type: 'integer'
              }
          }
      }
    }

  static get relationMappings () {
    return {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: path.resolve(__dirname, './User'),
            join: {
                from: 'passwords.userId',
                to: `users.id`
            }
        }
    }
  }
}

module.exports = Password
