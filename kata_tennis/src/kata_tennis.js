function Game(){
	scoreboard = [0,0];
	LOCAL=0;
	VISITOR=1;
}

Game.prototype = {
	constructor: Game,
	whoIsOponent: function(player){
		var oponent = (player == VISITOR) ? LOCAL : VISITOR;
		return oponent;
	},
	updateScoreboard: function(player){
		switch(scoreboard[player]){
			case 0:  		
				scoreboard[player] = 15;
				break;
			case 15: 		
				scoreboard[player] = 30;
				break;
			case 30: 
				if(scoreboard[this.whoIsOponent(player)]== 40){
					scoreboard = ["DEUCE","DEUCE"]; 
				}else{
					scoreboard[player] = 40;
				}
				break;
			case 40:
				scoreboard[player] = "WIN";
				scoreboard[this.whoIsOponent(player)] = 0; 
				break;
			case "DEUCE": 	
				scoreboard[player] = "ADVANTAGE";
				scoreboard[this.whoIsOponent(player)] = 40; 
				break;
			case "ADVANTAGE":
				scoreboard[player] = "WIN";
				scoreboard[this.whoIsOponent(player)] = 0; 
				break;
		}			
		return scoreboard;
	},
	pointLocal: function(){
		return this.updateScoreboard(LOCAL);
	},
	pointVisitor: function(){
		return this.updateScoreboard(VISITOR);
	},
	setScoreGame: function(score){
		scoreboard = score;
	},
	getScoreGame: function(){
		return scoreboard;
	}
};

function Set(){
	this.scoreboard = [0,0];
	LOCAL = 0;
	VISITOR = 1;
}

Set.prototype = {
	constructor: Set,
	localAddGame: function(){
		this.scoreboard[LOCAL]++;
		return this.scoreboard;
	},
	visitorAddGame: function(){
		this.scoreboard[VISITOR]++;
		return this.scoreboard;
	},
	setScoreSet: function(score){
		this.scoreboard = score;
	},
	areThereWinner: function(){
		var winner = 0;
		if(this.scoreboard[LOCAL]==6 || this.scoreboard[VISITOR]==6){
			winner = (this.scoreboard[LOCAL]==6) ? "LOCAL" : "VISITOR";
		}
		return winner;
	},
	getScoreSet: function(){
		return this.scoreboard;
	}
};

function Match(){
	this.game = new Game();
	this.set = new Set();
}

Match.prototype = {
	constructor: Match,
	setScoreMatch: function(scoreSet, scoreGame){ 
		this.game.setScoreGame(scoreGame);
		this.set.setScoreSet(scoreSet);
	},
	getScoreMatch: function(){
		return "Set: " + this.set.getScoreSet() + " Game: " + this.game.getScoreGame();
	},
	endOfMatch: function(){
		return this.set.areThereWinner();
	},
	pointLocal: function(){
		this.game.pointLocal();
		if(this.game.getScoreGame()[0] == "WIN"){
			this.game.setScoreGame([0,0]);
			this.set.localAddGame();
		}
	},
	pointVisitor: function(){
		this.game.pointVisitor();
		if(this.game.getScoreGame()[1] == "WIN"){
			this.game.setScoreGame([0,0]);
			this.set.visitorAddGame();
		}
	}
};