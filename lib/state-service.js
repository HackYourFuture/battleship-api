'use strict';

let _games = {

};

module.exports = { start, join, attack }

class Board(){
    this.size = 10
    this.ships = []
    this.grid = []

	constructor(){
		// build the grid
	    for ( i=0; i < this.size; i++ ) {
	        this.grid[i] = []
	        for( j=0; j < this.size; j++ ) {
	            this.grid[i][j] = { hit: false, occupied: false }  
	        }
	    }
	}

	placeShips(){

	}

	attackTarget(){

	}
	

}

class Player(){
	this.Board = new Board();
}

class Game {
	constructor() {
		console.log('new game started');
	}
}

function _generateGameId() {
	let id = 'bla'; // use crypto
	return id;
}

function start(params) {
	_games
}

function join() {

}

function attack() {

}