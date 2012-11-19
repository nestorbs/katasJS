describe("Acierta numero al azar", function(){

	var numeroAcertar = 5;
	var juego;

	beforeEach(function() {
		juego = new JuegoAcierto(numeroAcertar);
	});
	 

	it("acierta numero a la primera", function(){
		var resultado = juego.esAcertado(5);
		expect(resultado).toEqual("acierto");
	});

	it("numero a adivinar es mayor que el numero elegido", function(){
		var resultado = juego.esAcertado(3);
		expect(resultado).toEqual("mayor");
	});

	it("numero a adivinar es menor que el numero elegido", function(){
		var resultado = juego.esAcertado(7);
		expect(resultado).toEqual("menor");
	});

	it("acierta numero en tercer intento", function(){
		var resultado = juego.esAcertado(7);
		resultado = juego.esAcertado(3);
		resultado = juego.esAcertado(5);
		expect(resultado).toEqual("acierto");
		expect(juego.getIntentos()).toEqual(3);
	});
})