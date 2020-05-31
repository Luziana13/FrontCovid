const knex = require("knex");
//DADOS DO BANCO QUE SERÁ UTILIZADO
const database = knex({
    client: "pg", // pg is the database library for postgreSQL on knexjs
    connection: {
        host: "127.0.0.1", // Your local host IP
        user: "postgres", // Your postgres user name
        password: "postgres", // Your postgres user password
        database: "FrontCovid" // Your database name
    }
});

module.exports = database;