const knex = require("knex");

//DADOS DO BANCO QUE SERÁ UTILIZADO
const database = knex({
    client: "pg", // pg is the database library for postgreSQL on knexjs
    connection: {
        host: process.env.DB_HOST, // Your local host IP
        user: process.env.DB_USER, // Your postgres user name
        password: process.env.DB_PASS, // Your postgres user password
        database: process.env.DB_DATABASE// Your database name


    }
});

module.exports = database;