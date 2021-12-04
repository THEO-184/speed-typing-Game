export enum DifficultyTypes {
	hard = "hard",
	easy = "easy",
	medium = "medium",
}

export interface startGameProp {
	start: boolean;
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
	selectedTime: number;
	setSelectedTime: React.Dispatch<React.SetStateAction<number>>;
	setSelectedDifficulty: React.Dispatch<React.SetStateAction<DifficultyTypes>>;
	selectedDifficulty: DifficultyTypes;
}

export interface GameProp {
	selectedTime: number;
	testText: string[];
	selectedDifficulty: DifficultyTypes;
}

export interface selectionTypes {
	value: number | DifficultyTypes;
	text: DifficultyTypes | string;
}

// export interface DifficultyTypes extends TimeTypes {}

export const TimeOptions: selectionTypes[] = [
	{
		value: 60,
		text: "1 minute Test",
	},
	{
		value: 120,
		text: "2 minute Test",
	},
	{
		value: 180,
		text: "3 minute Test",
	},
	{
		value: 300,
		text: "5 minute Test",
	},
];

export const DifficultyOptions: selectionTypes[] = [
	{
		value: DifficultyTypes.easy,
		text: DifficultyTypes.easy,
	},
	{
		value: DifficultyTypes.medium,
		text: DifficultyTypes.medium,
	},
	{
		value: DifficultyTypes.hard,
		text: DifficultyTypes.hard,
	},
];
