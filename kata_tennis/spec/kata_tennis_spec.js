describe("kata tennis", function(){

	it("puntua jugador", function(){
		var jugador = new Jugador();
		expect(jugador.puntua()).toEqual(15);
		expect(jugador.puntua()).toEqual(30);
		expect(jugador.puntua()).toEqual(40);
	});

	it("ventaja", function(){
		var jugador = new Jugador();
		jugador.setVentaja();
		expect(jugador.getVentaja()).toEqual(true);
	});

	it("iguales 'deuce' ", function(){
		var jugador = new Jugador();
		jugador.setVentaja();
		jugador.iguales();
		expect(jugador.getVentaja()).toEqual(false);
	});

	it("jugador 1 gana a jugador 2 con marcador 40 / 30", function(){
		var jugador1 = new Jugador();
		var jugador2 = new Jugador();
		jugador2.puntua();
		jugador2.puntua();
		jugador1.puntua();
		jugador1.puntua();
		jugador1.puntua();
		jugador1.puntua();
	});
});