function Spotify (){
	
}

Spotify.prototype = {
	constructor: Spotify,
	anadePerson: function(person, listPerson){
		var count = listPerson.length;
		for(var i = 0; i < count; i++){
			if(person == listPerson[i][0]){
				listPerson[i][1]++;
				return listPerson;
			}
		}
		listPerson[count] = [person, 1];
		return listPerson;
	},
	compare: function (value1, value2){
		return value2[1] - value1[1];
	},
	ordena: function(vector){
		return vector.sort(this.compare);
	},
	eliminaParejasRepresentadasPor: function(person1, person2, teams, candidatos){
		person1 = this.ordena(person1);
		person2 = this.ordena(person2);
		var candidato = (person1[0][1] >= person2[0][1]) ? person1[0][0] : person2[0][0];
		candidatos[candidatos.length] = candidato;
		console.log("candidatos: " + candidatos);
		while(teams.length > 0){
			teams.pop();
		}
		console.log("teams: " + teams);
		return candidatos;
		//TODO: eliminar parejas de teams en el que aparezca candidato. Y eliminar candidato de person1 o person2 segun corresponda.
	},
	whoGoesToTheBeach: function(teams){
		var count = teams.length;
		var person1 = new Array();
		var person2 = new Array();
		for(var i = 0; i < count; i++){
			this.anadePerson(teams[i][0], person1);

			this.anadePerson(teams[i][1], person2);
		}
		var candidatos = new Array();
		this.eliminaParejasRepresentadasPor(person1, person2, teams, candidatos);
		return candidatos;
	}
};