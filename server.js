//old imports from tutorial
// import express from 'express';
// import { config } from './config.js';
// import Database from './database.js';
const express = require('express')
const sql = require('mssql')
const sequelize = require('./config/connection')
// Import App routes
const person = require('./person-route.js')
const openapi = require('./openapi.js')
// import person from './person.js';
// import openapi from './openapi.js';

const port = process.env.PORT || 3000;

const app = express();

// Development only - don't do in production
// Run this to create the table in the database
// if (process.env.NODE_ENV === 'development') {
//     const database = sql.connect(connection)
//     database
//         .executeQuery(
//             `CREATE TABLE Person (id int NOT NULL IDENTITY, firstName varchar(255), lastName varchar(255));`
//         )
//         .then(() => {
//             console.log('Table created');
//         })
//         .catch((err) => {
//             // Table may already exist
//             console.error(`Error creating table: ${err}`);
//         });
// }

// Connect App routes
app.use('/api-docs', openapi);
app.use('/persons', person);
app.use('*', (_, res) => {
    res.redirect('/api-docs');
});

// Start the server
// sequelize.sync({ force: true }).then(async () => {
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// })
