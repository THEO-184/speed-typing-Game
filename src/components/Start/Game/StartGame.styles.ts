import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
`;
export const Title = styled.h1`
	font-size: 3rem;
	margin: 1.5rem 0;
	text-align: center;
	color: blue;
`;

export const SelectContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 350px;
	height: 70%;
	background: #a3e7fc;

	select {
		display: block;
		margin: 2rem 0;
		padding: 10px;
		width: 250px;
		border-radius: 50px;
		font-size: 1.2rem;
	}
`;
