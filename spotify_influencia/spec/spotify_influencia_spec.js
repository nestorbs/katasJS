describe("Spotify influencia", function(){

	it("[1009, 2011] [1017, 2011] should return 2011", function(){
		var spotify = new Spotify();
		var teams = new Array ([1009, 2011], [1017, 2011]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([2011]);
	});

	it("[1009, 2011] [1009, 2020] should return 1009", function(){
		var spotify = new Spotify();
		var teams = new Array([1009, 2011], [1009, 2020]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([1009]);
	});

	it("[1009, 2011] [1009, 2020] should return [1009, 2]", function(){
		var spotify = new Spotify();
		var teams = new Array ([1009, 2011], [1009, 2020]);
		var listPerson1 = new Array();
		spotify.anadePerson(teams[0][0], listPerson1);
		expect(spotify.anadePerson(teams[0][0], listPerson1)).toEqual([[1009, 2]]);
	});

	it("Elimina parejas representadas por candidato 1009 [1009, 2011] [1009, 2020] should return [1009]", function(){
		var spotify = new Spotify();
		var teams = new Array ([1009, 2011], [1009, 2020]);
		var listPerson1 = new Array([1009, 2]);
		var listPerson2 = new Array([2011, 1], [2020, 1]);
		var candidatos = new Array();

		var result = spotify.eliminaParejasRepresentadasPor(listPerson1, listPerson2, teams, candidatos);
		expect(result).toEqual([1009]);
		expect(teams).toEqual([]);
	});

	it("ordena Array de mayor a menor segun el segundo campo", function(){
		var spotify = new Spotify();
		var teams = new Array ([1009, 1], [1006, 3], [1005, 2], [1011,2]);

		var result = spotify.ordena(teams);
		expect(result).toEqual([[1006, 3], [1005, 2], [1011, 2], [1009, 1]]);
		//expect(teams).toEqual([]);
	});
});