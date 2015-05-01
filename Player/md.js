var events = require('events');
var util = require('util');

util.inherits(TennisPlayer,events.EventEmitter);

function TennisPlayer(playerName){

	this.game = 0;
	this.set = 0;
	this.match = 0;

	this.playerName = playerName;

	events.EventEmitter.call(this);
}


TennisPlayer.prototype.addScore = function(score){
	this.game += parseInt(score);
	if(this.game>=45){
		this.game = parseInt(0);
		this.set+=parseInt(1);
		if(this.set>=6){
			this.set = parseInt(0);
			this.match += parseInt(1)
		}
	}

	this.emit('add');
}

TennisPlayer.prototype.getGame = function(){
	this.emit('getGame');
	return this.game;
}

TennisPlayer.prototype.getMatch = function(){
	this.emit('getMatch');
	return this.match;
}

TennisPlayer.prototype.getTheSet = function(){
	this.emit('getTheSet');
	return this.set;
}


var myPlayer = new TennisPlayer();
myPlayer.on('add',function(){
	console.log("add");
});

myPlayer.on('getGame',function(){
	console.log("getGame: " + myPlayer.score);
});

myPlayer.on('getMatch',function(){
	console.log("getMatch: " + myPlayer.score);
});

myPlayer.on('getTheSet',function(){
	console.log("getTheSet: " + myPlayer.score);
});

myPlayer.addScore(15);
myPlayer.addScore(15);
myPlayer.addScore(15);
myPlayer.addScore(15);

exports.getData = function(){

	return "game "+myPlayer.getGame()+"set "+myPlayer.getTheSet()+"match "+myPlayer.getMatch();
}