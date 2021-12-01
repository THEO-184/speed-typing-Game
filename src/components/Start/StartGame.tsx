import React, { useState } from "react";
import { selectionTypes, TimeOptions, DifficultyOptions } from "../../Types";
import { Title, SelectContainer, Container } from "./Game/StartGame.styles";

const StartGame = (): JSX.Element => {
	const [time, setTime] = useState(TimeOptions);
	const [difficulty, setDifficulty] = useState(DifficultyOptions);
	return (
		<>
			<Container>
				<Title>Check your typing Skills</Title>
				<SelectContainer>
					<form>
						<select>
							{time.map((t, index): JSX.Element => {
								return <Option key={index} {...t} />;
							})}
						</select>
						<select>
							{difficulty.map((d, index): JSX.Element => {
								return <Option key={index} {...d} />;
							})}
						</select>
					</form>
				</SelectContainer>
			</Container>
		</>
	);
};

const Option = (props: selectionTypes): JSX.Element => {
	const { value, text } = props;
	return (
		<option value={value} style={{ margin: "10px", fontSize: "1.2rem" }}>
			{text}
		</option>
	);
};

export default StartGame;
