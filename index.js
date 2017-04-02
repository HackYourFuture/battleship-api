'use strict';

var app = require('express')();
var server = require('http').Server(app);
server.listen(5000);
var io = require('socket.io')(server);


// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
     response.send('<h1>BATTLESHIP</h1>');
  });
});


// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
