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
		return this.puntuacion = puntos;
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
		if(numeroJugador == this.JUGADOR1){
			if(this.jugador1.getPuntuacion() == 40){
				if(this.jugador2.getPuntuacion() == 40){
					if(this.jugador1.tieneVentaja()){
						this.set[0]++;
						this.iniciaJuego();
					}else{
						this.jugador1.setVentaja(true);
					}
				}else{
					this.set[0]++;
					this.iniciaJuego();
				}
			}else{
				this.jugador1.puntua();
			}
		}else{
			if(this.jugador2.getPuntuacion() == 40){
				if(this.jugador1.getPuntuacion() == 40){
					if(this.jugador2.tieneVentaja()){
						this.set[1]++;
						this.iniciaJuego();
					}else{
						this.jugador2.setVentaja(true);
					}
				}else{
					this.set[1]++;
					this.iniciaJuego();
				}	
			}else{
				this.jugador2.puntua();
			}
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
	}
	
}