import styled from "styled-components";

export const GameContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	textarea {
		padding: 10px;
		font-size: 1rem;
		letter-spacing: 1px;
		font-size: 1.2rem;
		word-spacing: 2px;
	}

	.time {
		font-size: 2.8rem;
		font-weight: 700;
		margin: 0;
		background: #121fcf;
		background: -webkit-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
		background: -moz-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
		background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	textarea:focus {
		outline: none;
	}
`;
