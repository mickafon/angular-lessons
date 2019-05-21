"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Pokedex} from 'pokedex.js';
var Pokedex = require('pokedex.js');
var pokedex = new Pokedex('en');
var Pokemon = /** @class */ (function () {
    function Pokemon(name) {
        var poke = JSON.parse(pokedex.name(name).get())[0];
        console.log(poke);
        this.name = poke.name;
        this.type = poke.type;
        var baseStats = poke.baseStats;
        this.health = baseStats.H;
        this.speed = baseStats.S;
    }
    Pokemon.prototype.isFirst = function (challenger) {
        if (this.speed > challenger.speed) {
            return true;
        }
        return false;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map