const express = require('express');
const http = require('http');

// ROUTERS
const DemoRouter = require('../components/Demo/router');

module.exports = {
    init(app) {
        const router = express.Router();

        app.all('/*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
            res.header(`Access-Control-Allow-Headers`, `Content-Type`);
            next();
          });

        app.use('/api', DemoRouter);
        app.use('/', function(req, res) {
            res.sendFile(__dirname + '/index.html');
          });

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
