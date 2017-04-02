'use strict';

const crypto = require('crypto');
const Promise = require('bluebird');

let _games = {

};

module.exports = { start, init, attack }

class Board {

  constructor() {

    this.size = 10
    this.ships = []
    this.grid = []
      // build the grid
    for (i = 0; i < this.size; i++) {
      this.grid[i] = []
      for (j = 0; j < this.size; j++) {
        this.grid[i][j] = { hit: false, occupied: false }
      }
    }
  }

  placeShips() {

  }

  attackTarget() {

  }


}

class Player {
  // this.Board = new Board();
}

class Game {
  constructor() {
    this.gameId = this.generateId();
    this.status = 'waiting';
  }

  generateId() {
    return crypto.randomBytes(64).toString('hex');
  }

  join(player) {
    // join
  }
}

function start(params) {

}

function init(player) {
  let existingGame = Object.getOwnPropertyNames(_games).find(game => {
    return game.players.length === 1 && game.status === 'waiting'
  });

  if (existingGame) {
    existingGame.join(player);
    return Promise.resolve(existingGame);
  } else {
    let newGame = new Game();
    newGame.join(player);
    return Promise.resolve(newGame);
  }
}

function attack() {

}
