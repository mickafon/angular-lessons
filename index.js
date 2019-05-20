'use strict';
exports.__esModule = true;
var pokemon_1 = require("./src/models/pokemon");
function namePokemon(name) {
    pokemon_1.Pokemon(name);
    console.log(pokemon_1.Pokemon.name);
}
namePokemon("Eh");
