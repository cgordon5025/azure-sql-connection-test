var Sequelize = require('sequelize')

require("dotenv").config()
const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;
const user = process.env.AZURE_SQL_USER
const password = process.env.AZURE_SQL_PASS

var sequelize = new Sequelize(database, user, password, {
    host: server,
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        idle: 100000
    },
    dialectOptions: {
        encrypt: true
    }
})

// var config = {
//     user: process.env.AZURE_SQL_USER,
//     password: process.env.AZURE_SQL_PASS,
//     server: process.env.AZURE_SQL_SERVER,
//     port: 1433,
//     database: process.env.AZURE_SQL_DATABASE,
//     authentication: {
//         type: 'default'
//     },
//     options: {
//         encrypt: true
//     }
// };

module.exports = sequelize