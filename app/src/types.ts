export interface ICharacterCharacteristics {
	birth: string;
	weight: {
		value: number;
		unity: string;
	};
	height: {
		value: number;
		unity: string;
	};
	universe: string;
}

export interface ICharacterSkills {
	force: number;
	intelligence: number;
	agility: number;
	endurance: number;
	velocity: number;
}

export interface ICharacter {
	name: string;
	alterEgo: string;
	imagePath: string;
	biography: string;
	caracteristics: ICharacterCharacteristics;
	abilities: ICharacterSkills;
	movies: string[];
}
