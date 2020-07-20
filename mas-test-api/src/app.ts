const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
const demodata = require('./db.json')
const middlewares = jsonServer.defaults()

const router = jsonServer.router(demodata) // Express router
const server = jsonServer.create()       // Express server

server.use(middlewares)
server.use('/api/v1', router)

server.use('/static', express.static(path.join(__dirname, 'public')))

server.use(jsonServer.bodyParser);

// Avoid CORS issue

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Total-Count");
  next();
 
});

server.use(router)

server.listen(3000)

