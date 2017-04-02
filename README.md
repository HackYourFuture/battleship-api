wss 

1) CONNECT

PREPHASE---------------------------------------------

on: game starts --> move to PREPHASE {
	player colour: 'green' or 'blue'
}

STARTPHASE---------------------------------------------
emit: 'place' { locations }
emit: 'leave'

var ships = [
		{'size': 5, 'location' : []},
		{'size': 4, 'location' : []},
		{'size': 3, 'location' : []},
		{'size': 3, 'location' : []},
		{'size': 2, location' : []}
	];


on: 'start' --> move to FIGHTPHASE {
	player turn: 'green'
}
on: 'leave' --> opponent left
FIGHTPHASE---------------------------------------------
emit: 'attack' { location } -> response: {
	hit: true/false,
	sunk: true/false,
	win: true/false
} 
or ERROR NOT YOUR TURN
or ERROR COORDINATE ALREADY SUCK

on: 'attacked' {
	hit: true/false
	sunk: true/false
	location: coordinate,
	win: true/false
}
on: 'leave' --> opponent left


---------------------------------------------
(LEAVE)
{
	
}



---------------------------------------------
