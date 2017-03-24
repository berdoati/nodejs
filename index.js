const faker = require('faker')
const { Model } = require('objection')
const User = require('./User')

const knex = require('./db');

Model.knex(knex);

User
    .query()
    .select('name', 'id')
    .eager('passwords')
    .limit(10)
    .then((people) => {
        console.log(people, 'people');
    })
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.log(err, 'err')
        process.exit(1)
    })
