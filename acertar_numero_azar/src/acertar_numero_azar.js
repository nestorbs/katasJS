function JuegoAcierto(numeroAcertar){
	this.numeroAcertar = numeroAcertar;
	this.intentos = 0;
}

JuegoAcierto.prototype = {
	constructor: JuegoAcierto,
	esAcertado: function (numeroAProbar){
		this.intentos++;
		if(this.numeroAcertar > numeroAProbar){			
			return "mayor";
		}
		if(this.numeroAcertar < numeroAProbar){
			return "menor";
		}
		return this.intentos;
	}
};