import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	color: white;
	background-color: #212124;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
	padding: 1rem 0;
	text-align: center;

	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		font-size: 65px;

		img {
			width: 80px;
		}
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5rem;

		h3 {
			font-size: 40px;
		}
	}
`;

interface HeaderProps {
	score: number;
}
const Header: React.FC<HeaderProps> = ({ score }) => {
	return (
		<StyledHeader>
			<h1>
				<img
					src={process.env.PUBLIC_URL + "sleeping-kirby.gif"}
					alt="sleeping-kirby"
				/>
				Kirby Memory Cards
			</h1>
			<div className="container">
				<h2>
					Choose your ability card wisely! <br />
					They must not repeat!
				</h2>
				<h3> Score: {score}</h3>
			</div>
		</StyledHeader>
	);
};

export default Header;
