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
	setSelectedDifficulty: React.Dispatch<React.SetStateAction<string>>;
	selectedDifficulty: string;
}

export interface selectionTypes {
	value: number | DifficultyTypes;
	text: string;
}

// export interface DifficultyTypes extends TimeTypes {}

export const TimeOptions: selectionTypes[] = [
	{
		value: 60,
		text: "1 minute Test",
	},
	{
		value: 120,
		text: "1 minute Test",
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
		text: "Easy",
	},
	{
		value: DifficultyTypes.medium,
		text: "Medium",
	},
	{
		value: DifficultyTypes.hard,
		text: "Hard",
	},
];
