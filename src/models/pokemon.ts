//import {Pokedex} from 'pokedex.js';
const Pokedex = require('pokedex.js');
const pokedex = new Pokedex('en');

export class Pokemon {
	name: string;
	level: number;
	type: string[];
	health: number;
	attack: number;
	defense: number;
	spAttack: number;
	spDefense: number;
	speed: number;


	constructor(name: string, level: number){
		let poke = JSON.parse(pokedex.name(name).get())[0];
		console.log(poke);
		this.level = level;
		this.name = poke.name;
		this.type = poke.type;
		let baseStats = poke.baseStats;
		this.health = baseStats.H;
		this.attack = baseStats.A;
		this.defense = baseStats.B;
		this.spAttack = baseStats.C;
		this.spDefense = baseStats.D;
		this.speed = baseStats.S;
	}

	isFaster(challenger: Pokemon): boolean{
		if(Number(this.speed) > Number(challenger.speed)){
			return true;
		}
		return false;
	}

	attack(challenger: Pokemon): void{
		let damage = this.attack - challenger.defense;
		if(damage > 0){

		}
	}
}
