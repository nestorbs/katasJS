describe("Spotify influencia", function(){
	var spotify 
	beforeEach(function(){
		spotify = new Spotify();
	});

	/*it("[1009, 2011] [1017, 2011] should return 2011", function(){
		var teams = new Array ([1009, 2011], [1017, 2011]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([2011]);
	});

	it("[1009, 2011] [1009, 2020] should return 1009", function(){
		var teams = new Array([1009, 2011], [1009, 2020]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([1009]);
	});

	it("[1009, 2011] [1009, 2020] should return [1009, 2]", function(){
		var teams = new Array ([1009, 2011], [1009, 2020]);
		var listPerson1 = new Array();
		spotify.anadePerson(teams[0][0], listPerson1);
		expect(spotify.anadePerson(teams[0][0], listPerson1)).toEqual([[1009, 2]]);
	});

	it("Elimina parejas representadas por candidato 1009 [1009, 2011] [1009, 2020] should return [1009]", function(){
		var teams = new Array ([1009, 2011], [1009, 2020]);
		var listPerson1 = new Array([1009, 2]);
		var listPerson2 = new Array([2011, 1], [2020, 1]);
		var candidatos = new Array();

		var result = spotify.eliminaParejasRepresentadasPor(listPerson1, listPerson2, teams, candidatos);
		expect(result).toEqual([1009]);
		expect(teams).toEqual([]);
	});

	it("ordena de mayor a menor segun el segundo campo del elemento del vector", function(){
		var teams = new Array ([1009, 1], [1006, 3], [1005, 2], [1011,2]);
		
		var result = spotify.ordena(teams);
		expect(result).toEqual([[1006, 3], [1005, 2], [1011, 2], [1009, 1]]);
	});

	it("[1009, 2011] [1017, 2011] [1010, 2011] should return 2011", function(){
		var teams = new Array ([1009, 2011], [1017, 2011], [1010, 2011]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([2011]);
	});

	it("[1009, 2011] [1017, 2011] [1010, 2012] should return [2011, 1010]", function(){
		var teams = new Array ([1009, 2011], [1017, 2011], [1010, 2012]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([2011, 1010]);
	});

	it("[1009, 2011] [1009, 2006] [1010, 2012] [1012, 2014] should return [1009, 1010]", function(){
		var teams = new Array ([1009, 2011], [1010, 2012], [1009, 2006], [1012, 2012]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([1009, 2012]);
	});*/

	it(" should return ", function(){
		var teams = new Array ([1011, 2009], [1011, 2017], [1012, 2010]);
		expect(spotify.whoGoesToTheBeach(teams)).toEqual([1011, 2010]);
	});
});