describe("kata tennis", function(){
	
	describe("game",function(){
		var game;
		beforeEach(function(){
			game = new Game();
		});

		it("game point local player", function(){
			expect(game.pointLocal()).toEqual([15,0]);
			expect(game.pointLocal()).toEqual([30,0]);
			expect(game.pointLocal()).toEqual([40,0]);
		});

		it("local player gets ADVANTAGE", function(){
			game.setScoreGame(["DEUCE","DEUCE"]);
			expect(game.pointLocal()).toEqual(["ADVANTAGE",40]);
		});

		it("game point visitor player", function(){
			expect(game.pointVisitor()).toEqual([0,15]);
			expect(game.pointVisitor()).toEqual([0,30]);
			expect(game.pointVisitor()).toEqual([0,40]);
		});

		it("visitor player gets ADVANTAGE", function(){
			game.setScoreGame(["DEUCE","DEUCE"]);
			expect(game.pointVisitor()).toEqual([40,"ADVANTAGE"]);
		});

		it("local player gets DEUCE", function(){
			game.setScoreGame([30,40]);
			expect(game.pointLocal()).toEqual(["DEUCE","DEUCE"]);
		});

		it("visitor player gets DEUCE", function(){
			game.setScoreGame([40,30]);
			expect(game.pointVisitor()).toEqual(["DEUCE","DEUCE"]);
		});

		it("local player wins a game", function(){
			game.setScoreGame([40,30]);
			expect(game.pointLocal()).toEqual(["WIN",0]);
		});

		it("local player wins a game after ADVANTAGE", function(){
			game.setScoreGame(["ADVANTAGE",40]);
			expect(game.pointLocal()).toEqual(["WIN",0]);
		});

		it("visitor player wins a game", function(){
			game.setScoreGame([30,40]);
			expect(game.pointVisitor()).toEqual([0,"WIN"]);
		});
	});

	describe("set", function(){
		var set;
		beforeEach(function(){
			set = new Set();
		});
		it("local player add a game to the set", function(){
			expect(set.localAddGame()).toEqual([1,0]);
		});

		it("visitor player add a game to the set", function(){
			expect(set.visitorAddGame()).toEqual([0,1]);
		});

		it("local player wins the set", function(){
			set.setScoreSet([5,0]);
			expect(set.localAddGame()).toEqual([6,0]);
			expect(set.areThereWinner()).toEqual("LOCAL");
		});
	});

	describe("match", function(){
		var match;
		beforeEach(function(){
			match = new Match();
		});

		it("get score set and score game", function(){
			match.setScoreMatch([3,5], [40,30]);
			expect(match.getScoreMatch()).toEqual("Set: 3,5 Game: 40,30");
		});

		it("end of match, local player wins", function(){
			match.setScoreMatch([6,3], [0,0]);
			expect(match.endOfMatch()).toEqual("LOCAL");
		});

		it("game point local player", function(){
			match.setScoreMatch([0,0], [40,0]);
			match.pointLocal();
			expect(match.getScoreMatch()).toEqual("Set: 1,0 Game: 0,0");
		});

		it("game point visitor player", function(){
			match.setScoreMatch([0,0], [0,40]);
			match.pointVisitor();
			expect(match.getScoreMatch()).toEqual("Set: 0,1 Game: 0,0");
		});
	});
});