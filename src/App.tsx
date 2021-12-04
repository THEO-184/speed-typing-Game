import React, { useState, useEffect } from "react";
import "./App.css";
import { DifficultyTypes, startGameProp } from "./Types";
import Game from "./components/Game/Game";
import { Texts } from "./Texts";
import StartGame from "./components/Start/StartGame";
import "./globalStyles.scss";

function App() {
	const [start, setStart] = useState(true);
	const [selectedTime, setSelectedTime] = useState(60);

	const [selectedDifficulty, setSelectedDifficulty] = useState(
		DifficultyTypes.easy
	);
	const [text, setText] = useState(Texts.easyText);

	useEffect(() => {
		switch (selectedDifficulty) {
			case DifficultyTypes.medium:
				setText(Texts.MediumText);
				break;
			case DifficultyTypes.hard:
				setText(Texts.hardText);
				break;
			default:
				break;
		}
	}, [selectedDifficulty, selectedTime]);

	const startGameProps: startGameProp = {
		start,
		setStart,
		selectedTime,
		setSelectedTime,
		setSelectedDifficulty,
		selectedDifficulty,
	};
	return (
		<div className="App">
			{start ? (
				<StartGame {...startGameProps} />
			) : (
				<Game
					selectedTime={selectedTime}
					testText={text}
					selectedDifficulty={selectedDifficulty}
				/>
			)}
		</div>
	);
}

export default App;
