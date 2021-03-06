'use strict';

const playerService = require('./player-service');
const gameService = require('./game-service');

module.exports = { listen };

function listen(io) {
  io.on('connection', socket => {
    let player;
    playerService.init()
      .then(res => {
        player = res;
        return gameService.init(socket, player)
      })
      .then(res => {
        socket.join(res.gameId);
        socket.emit('joined', {
          gameId: res.gameId,
          playerId: player.playerId
        })
        socket.on('attack', (event)=>{
        	io.to(event.gameId).emit(event);
        })
      });
  });
}

function _join(data) {

}