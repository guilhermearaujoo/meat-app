"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
// Use default router
server.use(router);
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running on https://localhost:3001');
});
