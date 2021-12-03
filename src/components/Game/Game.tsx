import React, { useState, useEffect, useRef } from "react";
import "../../globalStyles.scss";
import moment from "moment";
import { GameContainer } from "./Game.styles";
import { Texts } from "../../Texts";
import { GameProp, DifficultyTypes } from "../../Types";

const Game = (prop: GameProp) => {
	const { selectedTime, selectedDifficulty } = prop;
	console.log(selectedTime, selectedDifficulty);
	const [textAreaValue, setTextAreaValue] = useState("");
	const [text, setText] = useState(Texts.hardText);
	const splitedText = text.split("").map((txt) => [txt, 0]);
	const [spltdText, setSplitedText] = useState(splitedText);
	const [preparationTime, setPreparationTime] = useState(10);
	const [Time, setTime] = useState(selectedTime);
	// select text area after preparation Time is over
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const Duration = moment.utc(Time * 1000).format("mm:ss");

	console.log(Duration);

	useEffect(() => {
		switch (selectedDifficulty) {
			case DifficultyTypes.medium:
				setText(Texts.MediumText);
				console.log(Texts.MediumText);
				break;
			case DifficultyTypes.hard:
				setText(Texts.hardText);
				console.log(Texts.hardText);
				break;
			default:
				break;
		}
	}, [selectedDifficulty, selectedTime]);

	useEffect(() => {
		const txtValue = textAreaValue.split("");
		const i = txtValue.length - 1;
		if (i >= 0) {
			if (txtValue[i] === splitedText[i][0]) {
				setTextAreaValue(textAreaValue);
				setSplitedText(
					spltdText.map((txt, index) =>
						index === i
							? (txt = [txt[0], 1])
							: index > i
							? (txt = [txt[0], 0])
							: txt
					)
				);
			} else {
				setSplitedText(
					spltdText.map((txt, index) =>
						index === i
							? (txt = [txt[0], -1])
							: index > i
							? (txt = [txt[0], 0])
							: txt
					)
				);
			}
		} else {
			spltdText.map((txt, index) => (txt = [txt[0], 0]));
		}
	}, [textAreaValue]);

	useEffect(() => {
		let interval: any;
		if (preparationTime === 0) {
			if (Time > 0) {
				interval = setInterval(() => {
					setTime((prev) => prev - 1);
				}, 1000);
			} else {
				clearInterval(interval);
			}
		}

		return () => clearInterval(interval);
	}, [Time, preparationTime]);

	useEffect(() => {
		let interval: any;
		if (preparationTime > 0) {
			interval = setInterval(() => {
				setPreparationTime((prev) => prev - 1);
			}, 1000);
		} else {
			textAreaRef.current?.focus();
			clearInterval(interval);
		}
		// if (!textAreaRef.current) throw Error("TextArea Ref not assigned");
		return () => clearInterval(interval);
	}, [preparationTime]);

	// 0 means not typed,1 means correct,-1 means wrong
	return (
		<>
			<GameContainer className="Game-container">
				<p className="time">{Duration}</p>
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
					{preparationTime > 0 ? (
						<p className="time">TIME STARTS IN: {preparationTime}s</p>
					) : (
						<textarea
							ref={textAreaRef}
							cols={50}
							rows={5}
							value={textAreaValue}
							onChange={(e) => setTextAreaValue(e.target.value)}
						></textarea>
					)}
				</form>
			</GameContainer>
		</>
	);
};

export default Game;
