'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const wsController = require('./lib/controller');

app.get('/', function(req, res) {
  res.send('hello');
});

wsController.listen(io);

http.listen(80, function() {
  console.log('listening on *:3000');
});
