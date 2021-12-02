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

	textarea:focus {
		outline: none;
	}
`;
