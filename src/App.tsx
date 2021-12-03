import React, { useState } from "react";
import "./App.css";
import { DifficultyTypes, startGameProp } from "./Types";
import Game from "./components/Game/Game";
import StartGame from "./components/Start/StartGame";
import "./globalStyles.scss";

function App() {
	const [start, setStart] = useState(true);
	const [selectedTime, setSelectedTime] = useState(60);

	const [selectedDifficulty, setSelectedDifficulty] = useState(
		DifficultyTypes.easy
	);
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
					selectedDifficulty={selectedDifficulty}
				/>
			)}
		</div>
	);
}

export default App;
