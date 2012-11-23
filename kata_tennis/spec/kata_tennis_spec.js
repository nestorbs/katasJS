describe("kata tennis", function(){

	it("puntua jugador", function(){
		var jugador = new Jugador(0);
		expect(jugador.puntua()).toEqual(15);
		expect(jugador.puntua()).toEqual(30);
		expect(jugador.puntua()).toEqual(40);
	});

	it("jugador consigue ventaja", function(){
		var jugador = new Jugador();
		jugador.setVentaja(true);
		expect(jugador.tieneVentaja()).toEqual(true);
	});

	it("jugador 1 gana juego a jugador 2 con marcador de juego 40 / 30", function(){
		var partido = new Partido([0,0], 40, 30);
		partido.punto(1);
		expect(partido.getSet()).toEqual([1,0]);
	});

	it("jugador 2 gana juego a jugador 1 con marcador de juego 30 / 40", function(){
		var partido = new Partido([0,0], 30, 40);
		partido.punto(2);
		expect(partido.getSet()).toEqual([0,1]);
	});

	it("jugador 1 puntua con marcador de juego 30/40 alcanzado el juego iguales deuce", function(){
		var partido = new Partido([0,0], 30, 40);
		partido.punto(1);
		expect(partido.getSet()).toEqual([0,0]);
		expect(partido.getMarcadorJuego()).toEqual("IGUALES");
	});

	it("jugador 2 puntua con marcador de juego 40/30 alcanzado el juego iguales deuce", function(){
		var partido = new Partido([0,0], 40, 30);
		partido.punto(2);
		expect(partido.getSet()).toEqual([0,0]);
		expect(partido.getMarcadorJuego()).toEqual("IGUALES");
	});

	it("jugador 1 puntua tras estar el marcador de juego en iguales", function(){
		var partido = new Partido([0,0], 40, 40);
		partido.punto(1);
		expect(partido.getSet()).toEqual([0,0]);
		expect(partido.getMarcadorJuego()).toEqual("VENTAJA JUGADOR 1");
	});

	it("jugador 1 puntua dos veces, una para tener ventaja y otra para ganar juego", function(){
		var partido = new Partido([0,0], 40, 40);
		partido.punto(1);
		partido.punto(1);
		expect(partido.getSet()).toEqual([1,0]);
		expect(partido.getMarcadorJuego()).toEqual("0,0");
	});

	it("jugador 2 puntua dos veces, una para tener ventaja y otra para ganar juego", function(){
		var partido = new Partido([0,0], 40, 40);
		partido.punto(2);
		partido.punto(2);
		expect(partido.getSet()).toEqual([0,1]);
		expect(partido.getMarcadorJuego()).toEqual("0,0");
	});
});