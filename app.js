/***
 *
 * Main Game / App File.
 *  
 ***/
// Setup config file.
require('dotenv').config();

// Including express and body parser.
const express = require('express');
const bodyParser = require('body-parser');

// Setting up the instance of the app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'pug');

// File utilized for routing.
const Routes = require('./app/routes/routes');
const routes = new Routes(app, express, __dirname);

// Setting up the server
const server = require('http').createServer(app);

/*
 * Game Server
 */
console.log('*** Starting Game Server Now! ***');
const GameServer = require('./app/gameServer');
global.gameServer = new GameServer(server);
