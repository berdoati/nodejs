// mysql://admin:PCKFHSYEYWWRTISQ@aws-eu-west-1-portal.2.dblayer.com:16026/compose

const createKnex = require('knex');
const path = require('path');
const faker = require('faker');

const knex = createKnex({
    client: 'mysql',
    connection: {
        host:     '127.0.0.1', // aws-eu-west-1-portal.2.dblayer.com,
        port:     '3306', //'16026',
        database: 'training', //'compose',
        user:     'root', //'admin',
        password: '' // 'PCKFHSYEYWWRTISQ'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.join(__dirname, 'migrations')
    }
});


let promiseChain = Promise.resolve();
for (let i = 0; i < 20; i++) {
    promiseChain = promiseChain
        .then(() => {
            return knex('users')
                .insert({
                    name: faker.name.firstName()
                })
                .then((id) => {
                    return knex('passwords')
                        .insert({
                            value: faker.internet.password(),
                            user_id: id
                        })
                })
        })
        // .then((id) => {
        //     return knex('passwords')
        //         .insert({
        //             value: faker.internet.password(),
        //             user_id: id
        //         })
        // })
}

promiseChain
    .then(() => {
        console.log('success');
        process.exit(0);
    })
    .catch((err) => {
        console.log(err);
        process.exit(1); // volt hiba
    });