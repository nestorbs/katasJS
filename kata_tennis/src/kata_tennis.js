function Jugador(puntuacionInicial){
	this.puntuacion = puntuacionInicial;
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
	setVentaja: function(ventaja){
		this.ventaja = ventaja;
	},
	tieneVentaja: function(){
		return this.ventaja;
	},
	getPuntuacion: function(){
		return this.puntuacion;
	},
	setPuntuacion: function(puntos){
		this.puntuacion = puntos;
	}
};

function Partido(setInicial, puntuacionInicialJugador1, puntuacionInicialJugador2){
	this.set = setInicial;
	this.jugador1 = new Jugador(puntuacionInicialJugador1);
	this.jugador2 = new Jugador(puntuacionInicialJugador2);
	this.JUGADOR1 = 1;
	this.JUGADOR2 = 2;
}

Partido.prototype = {
	constructor: Partido,
	getSet: function(){
		return this.set;
	},
	punto: function(numeroJugador){
		var jugadorQuePuntua;
		var jugadorNoPuntua;
		var visitante = 0;
		if(numeroJugador == this.JUGADOR1){
			jugadorQuePuntua = this.jugador1;
			jugadorNoPuntua = this.jugador2;
		}else{
			jugadorQuePuntua = this.jugador2;
			jugadorNoPuntua = this.jugador1;
			visitante = 1;
		}
		this.actualizaMarcador(jugadorQuePuntua, jugadorNoPuntua, visitante);
	},
	actualizaMarcador: function(jugadorQuePuntua, jugadorNoPuntua, visitante){
		if(jugadorQuePuntua.getPuntuacion() == 40){
				if(jugadorNoPuntua.getPuntuacion() == 40){
					if(jugadorQuePuntua.tieneVentaja()){
						this.set[visitante]++;
						this.iniciaJuego();
					}else{
						if(jugadorNoPuntua.tieneVentaja()){
							jugadorNoPuntua.setVentaja(false);
						}else{
							jugadorQuePuntua.setVentaja(true);
						}
					}
				}else{
					this.set[visitante]++;
					this.iniciaJuego();
				}
			}else{
				jugadorQuePuntua.puntua();
			}
	},
	getMarcadorJuego: function(){
		if(this.jugador1.tieneVentaja()){
			return "VENTAJA JUGADOR 1";
		}
		if(this.jugador2.tieneVentaja()){
			return "VENTAJA JUGADOR 2";
		}
		if(this.jugador1.getPuntuacion() == 40 && this.jugador2.getPuntuacion() == 40){
			return "IGUALES";
		}
		return this.jugador1.getPuntuacion().toString() + "," + this.jugador2.getPuntuacion().toString();
	},
	iniciaJuego: function(){
		this.jugador1.setPuntuacion(0);
		this.jugador2.setPuntuacion(0);
		this.jugador1.setVentaja(false);
		this.jugador2.setVentaja(false);
	},
	sigueEnJuego: function(){
		if(this.set[0] < 6 && this.set[1] < 6){
			return true;
		}else{
			return false;
		}	
	}
}

//Inicio del partido
var partido = new Partido([0,0], 0, 0);
var quienPuntua = 1;
do{
	quienPuntua = prompt("Introduzca el numero de jugador que ha marcado un punto (1 o 2)", "1");
	partido.punto(quienPuntua);
	alert("Set: " + partido.getSet() + ", Juego: jugador 1, jugador 2 --> " + partido.getMarcadorJuego());
}while(partido.sigueEnJuego());
alert("Final del partido: " + partido.getSet())