const knex = require("knex");
//DADOS DO BANCO QUE SERÁ UTILIZADO
const database = knex({
    client: "pg", // pg is the database library for postgreSQL on knexjs
    connection: {
        host: "ec2-54-81-37-115.compute-1.amazonaws.com", // Your local host IP
        user: "hmwgbdqjflhaah", // Your postgres user name
        password: "820840ef265b538fa9792b28af5fcb6cacddffdb5cdcc2cd29aec98cecf1993b", // Your postgres user password
        database: "d5m7b5rk930bjm" // Your database name


    }
});

module.exports = database;