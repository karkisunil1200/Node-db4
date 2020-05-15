const express = require('express');
const recipesRouter = require('../recipes/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/recipes', recipesRouter);

module.exports = server;
