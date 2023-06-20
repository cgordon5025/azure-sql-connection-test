// import express from 'express';
const express = require('express')
const path = require('path')
const swaggerUi = require('swagger-ui-express')
// import { join, dirname } from 'path';
// import swaggerUi from 'swagger-ui-express';
const yaml = require('yamljs')
// import yaml from 'yamljs';


// const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();
router.use(express.json());

const pathToSpec = path.join(__dirname, './openApiSchema.yml');
const openApiSpec = yaml.load(pathToSpec);

router.use('/', swaggerUi.serve, swaggerUi.setup(openApiSpec));

module.exports = router