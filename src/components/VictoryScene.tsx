import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);

	h1 {
		font-size: 60px;
		color: white;
		text-align: center;
	}
`;

interface VictorySceneProps {
	onClick: () => void;
}
const VictoryScene: React.FC<VictorySceneProps> = ({ onClick }) => {
	return (
		<Container onClick={onClick}>
			<img src={process.env.PUBLIC_URL + "victory.gif"} alt="victory" />
			<h1>
				Congratulations! You Win! <br /> Press anywhere to restart...
			</h1>
		</Container>
	);
};

export default VictoryScene;
