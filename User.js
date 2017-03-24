const { Model } = require('objection')
const path = require('path')

class User extends Model {
    static get tableName () {
        return 'users'
    }

    static get jsonSchema () {
        return {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                }
            }
        }
    }

    static get relationMappings () {
        return {
            passwords: {
                relation: Model.HasManyRelation,
                modelClass: path.join(__dirname, 'Password'),
                join: {
                    from: `users.id`,
                    to: 'passwords.userId'
                }
            }
        };
    }
}

module.exports = User
