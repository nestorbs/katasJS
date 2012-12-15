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
		while(teams.length > 0){
			var candidato = (person1[0][1] >= person2[0][1]) ? person1[0][0] : person2[0][0];
			candidatos[candidatos.length] = candidato;
			if(person1[0][1] >= person2[0][1]){
				person1.splice(0,1);
				for(var i = 0; i < teams.length; i++){
					if(teams[i][0] == candidato){
						for(var j = 0; j < person2.length; j++){
							if(teams[i][1] == person2[j][0]){
								person2.splice(j,1);
								j--;
							}
						}
						teams.splice(i,1);
						i--;
					}
				}
			}else{
				person2.splice(0,1);
				for(var i = 0; i < teams.length; i++){
					if(teams[i][1] == candidato){
						for(var j = 0; j < person1.length; j++){
							if(teams[i][0] == person1[j][0]){
								person1.splice(j,1);
								j--;
							}
						}
						teams.splice(i,1);
						i--;
					}
				}
			}
		}
		return candidatos;
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