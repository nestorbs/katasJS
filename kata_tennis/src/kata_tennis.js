function Jugador(){
	this.puntuacion = 0;
	this.ventaja = false;
}

Jugador.prototype = {
	constructor: Jugador,
	puntua: function(){
		switch (this.puntuacion){
			case 0: this.puntuacion = 15;
				break;
			case 15: this.puntuacion = 30;
				break;
			case 30: this.puntuacion = 40;
				break;
		}
		return this.puntuacion;
	},
	setVentaja: function(){
		this.ventaja = true;
		return this.ventaja;
	},
	getVentaja: function(){
		return this.ventaja;
	},
	iguales: function(){
		this.ventaja = false;
		return this.ventaja;
	}
};