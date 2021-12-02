import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
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
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 5px 8px 5px -1px rgba(0, 0, 0, 0.44);
	-webkit-box-shadow: 5px 8px 5px -1px rgba(0, 0, 0, 0.44);
	-moz-box-shadow: 5px 8px 5px -1px rgba(0, 0, 0, 0.44);
	padding: 1rem 0;
`;

export const Button = styled.button`
	padding: 10px 1.3rem;
	border-radius: 50px;
	font-size: 1rem;
	text-transform: uppercase;
	cursor: pointer;
	border: none;
	background: #ff3864;
	color: #fff;
	box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
	transition: all 0.3s ease;

	&:hover,
	&:focus {
		background: #ff0a3f;
	}
`;

export const Select = styled.div`
	display: grid;
	grid-template-areas: "select";
	width: 200px;
	border: 1px solid #777;
	line-height: 1.1;
	background-color: DodgerBlue;
	cursor: pointer;
	background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
	font-family: Arial;
	margin: 2rem 0;
	padding: 10px;
	font-size: 1.2rem;
	align-items: center;
	position: relative;
	border-radius: 0.25em;

	&::after {
		content: "";
		width: 0.8em;
		height: 0.5em;
		background-color: #777;
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		justify-self: end;
	}

	select {
		appearance: none;
		border: none;
		width: 100%;
		display: block;
		cursor: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		background: transparent;
		outline: none;
	}

	select > option {
		width: 100%;
	}

	select::-ms-expand {
		display: none;
	}

	select,
	&:after {
		grid-area: select;
	}

	select:focus + .focus {
		position: absolute;
		top: -1px;
		left: -1px;
		right: -1px;
		bottom: -1px;
		border: 2px solid blue;
		border-radius: inherit;
	}
`;
