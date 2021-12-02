import React, { useState, useEffect } from "react";
import "../../globalStyles.scss";
import { GameContainer } from "./Game.styles";
import { easyText } from "../../Texts";
const Game = () => {
	const [textAreaValue, setTextAreaValue] = useState("");
	const [text, setText] = useState(easyText);
	const splitedText = text.split("").map((txt) => [txt, 0]);
	const [spltdText, setSplitedText] = useState(splitedText);

	useEffect(() => {
		if (textAreaValue.length >= 0) {
			const typedTxt = textAreaValue.split("");
			typedTxt.forEach((txt, index) => {
				spltdText.forEach((array, i) => {
					if (index === i) {
						if (txt === array[0]) {
							array[1] = 1;
						} else {
							array[1] = -1;
						}
					}
				});
			});
		}
	}, [textAreaValue, spltdText]);
	// 0 means not typed,1 means correct,-1 means wrong
	return (
		<>
			<GameContainer className="Game-container">
				<div className="text-container">
					<p>
						{spltdText.map((txt, index) => {
							if (txt[1] === -1) {
								return (
									<span className="wrong" key={index}>
										{txt[0]}
									</span>
								);
							} else if (txt[1] === 1) {
								return (
									<span className="correct" key={index}>
										{txt[0]}
									</span>
								);
							} else {
								return (
									<span className="not-typed" key={index}>
										{txt[0]}
									</span>
								);
							}
						})}
					</p>
				</div>
				<form>
					<textarea
						cols={50}
						rows={5}
						value={textAreaValue}
						onChange={(e) => setTextAreaValue(e.target.value)}
					></textarea>
				</form>
			</GameContainer>
		</>
	);
};

export default Game;
