import React, { useState } from "react";
import {
	selectionTypes,
	TimeOptions,
	DifficultyOptions,
	startGameProp,
	DifficultyTypes,
} from "../../Types";
import {
	Title,
	SelectContainer,
	Container,
	Button,
	Select,
} from "./StartGame.styles";

const StartGame = (prop: startGameProp): JSX.Element => {
	const {
		start,
		setStart,
		selectedTime,
		setSelectedTime,
		setSelectedDifficulty,
		selectedDifficulty,
	} = prop;
	const [time, setTime] = useState(TimeOptions);
	const [difficulty, setDifficulty] = useState(DifficultyOptions);

	const handleStart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setStart(false);
	};

	const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const difficultyLevl: DifficultyTypes =
			DifficultyTypes[e.target.value as keyof typeof DifficultyTypes];
		setSelectedDifficulty(difficultyLevl);
	};

	return (
		<>
			{start ? (
				<Container>
					<Title>Check your typing Skills</Title>
					<SelectContainer>
						<form>
							<Select>
								<select
									value={selectedTime}
									onChange={(e) => setSelectedTime(Number(e.target.value))}
								>
									{time.map((t, index): JSX.Element => {
										return <Option key={index} {...t} />;
									})}
								</select>
								<span className="focus"></span>
							</Select>

							<Select>
								<select value={selectedDifficulty} onChange={handleDifficulty}>
									{difficulty.map((d, index): JSX.Element => {
										return <Option key={index} {...d} />;
									})}
								</select>
								<span className="focus"></span>
							</Select>
							<Button type="button" onClick={handleStart}>
								Start Test
							</Button>
						</form>
					</SelectContainer>
				</Container>
			) : (
				<h1>start Game</h1>
			)}
		</>
	);
};

const Option = (props: selectionTypes): JSX.Element => {
	const { value, text } = props;
	return <option value={value}>{text}</option>;
};

export default StartGame;
