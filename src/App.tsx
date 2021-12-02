import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import StartGame from "./components/Start/StartGame";
import "./globalStyles.scss";

function App() {
	const [start, setStart] = useState(true);
	const [num, setnum] = useState(0);
	const [selectedTime, setSelectedTime] = useState(60);
	const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");

	return (
		<div className="App">
			{start ? (
				<StartGame
					start={start}
					setStart={setStart}
					selectedTime={selectedTime}
					setSelectedTime={setSelectedTime}
					setSelectedDifficulty={setSelectedDifficulty}
					selectedDifficulty={selectedDifficulty}
				/>
			) : (
				<Game />
			)}
		</div>
	);
}

export default App;
