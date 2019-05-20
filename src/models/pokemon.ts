export class Pokemon {
	name: string;
	speed: number;
	//form: string;
	//stats: number[];


	constructor(name: string, speed: number){
		this.name = name;
		this.speed = speed;
	}

	isFirst(challenger: Pokemon): boolean{
		if(this.speed > challenger.speed){
			return true;
		}
		return false;
	}
}
