'use strict';

const stateService = require('./state-service');

module.exports = { listen };

let games = {};

function listen(io) {
  io.on('connection', socket => {
    stateService.init(player)
      .then(res => {
        socket.join(res.gameId);
      });
  });
}

function _join(data) {
  stateService.join(res => {
    _createRoom(res.gameId);
  });
}

stateService.init({ player: 'bla' })
.then(result => {
	console.log('result',result);
});
