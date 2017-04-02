'use strict';

const stateService = require('./state-service');

module.exports = { listen };

function listen(io) {
  io.on('connection', function(socket) {

    socket.on('join', _join);

  });
}

function _join(data) {
	
}