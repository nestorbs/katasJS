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
		return "acierto";
	},
	getIntentos: function(){
		return this.intentos;
	}
};


var numeroAleatorio = Math.floor(Math.random() * 100 + 1);
var juego = new JuegoAcierto(numeroAleatorio);
var valorProbar = 0;
var mensaje;
do{
	valorProbar = prompt("Introduzca un numero", "");
	mensaje = juego.esAcertado(valorProbar);
	alert(mensaje);
}while (mensaje != "acierto");
alert("Numero de intentos: " + juego.getIntentos());