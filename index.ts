'use strict';

import {Pokemon} from './src/models/pokemon';

function namePokemon(name){
	Pokemon(name);
	console.log(Pokemon.name);
}

namePokemon("Eh");
