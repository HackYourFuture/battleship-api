'use strict';

const crypto = require('crypto');
const Promise = require('bluebird');

let _players = {

};

class Player {
  constructor() {
    this.playerId = this.generateId();
  }

  generateId() {
    return crypto.randomBytes(64).toString('hex');
  }
}


function init() {
  let player = new Player();
  return Promise.resolve(player);
}

module.exports = { init };
