import React, { useState, useEffect, useRef } from "react";
import "../../globalStyles.scss";
import moment from "moment";
import { GameContainer } from "./Game.styles";
import { GameProp } from "../../Types";
console.clear();

const Game = (prop: GameProp) => {
	const { selectedTime, testText } = prop;
	const [textAreaValue, setTextAreaValue] = useState("");
	const text = testText;
	const [textLine, setTextLine] = useState(0);
	const [typedLength, setTypedLength] = useState(-1);

	let testToSplit = textLine <= text.length - 1 ? text[textLine] : "";

	let splitedText = testToSplit.split("").map((txt) => [txt, 0]);
	const splitedTextRef = useRef(splitedText);
	const [spltdText, setSplitedText] = useState(splitedText);
	const [preparationTime, setPreparationTime] = useState(10);
	const [Time, setTime] = useState(selectedTime);

	// select text area after preparation Time is over
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const Duration = moment.utc(Time * 1000).format("mm:ss");

	useEffect(() => {
		// let referenceValue = splitedTextRef.current;
		const txtValue = textAreaValue.split("");
		let i = txtValue.length - 1;
		// console.log(i + 1, text[textLine].split("").length);

		setTypedLength(i + 1);
		if (textLine <= text.length) {
			if (typedLength === testToSplit.split("").length - 2) {
				setTextLine((prev) => prev + 1);
				setTextAreaValue("");
			}
		}

		console.log(textLine);
		console.log(testToSplit);
		console.log(splitedText, spltdText);

		if (i >= 0) {
			if (txtValue[i] === splitedText[i][0]) {
				setSplitedText(
					splitedText.map((txt, index) =>
						index === i
							? (txt = [txt[0], 1])
							: index > i
							? (txt = [txt[0], 0])
							: txt
					)
				);
			} else {
				setSplitedText(
					splitedText.map((txt, index) =>
						index === i
							? (txt = [txt[0], -1])
							: index > i
							? (txt = [txt[0], 0])
							: txt
					)
				);
			}
		} else {
			splitedText.map((txt, index) => (txt = [txt[0], 0]));
		}

		// splitedTextRef.current = referenceValue;
	}, [textAreaValue, textLine]);

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
			{textLine > text.length - 1 ? (
				<GameContainer className="Game-container">
					<h1>YOUR TEST RESULTS IS:</h1>
				</GameContainer>
			) : (
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
							<p className="time">GAME STARTS IN: {preparationTime}s</p>
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
			)}
		</>
	);
};

export default Game;
