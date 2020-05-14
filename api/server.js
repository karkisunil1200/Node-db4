const express = require('express');

const server = express();

server.use('/', (req, res) => {
  res.send({server: 'up'});
});

module.exports = server;
