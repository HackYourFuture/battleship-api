'use strict';

module.exports = { listen };

function listen(io) {
  io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
      console.log('message: ' + msg);
    });
  });
}
