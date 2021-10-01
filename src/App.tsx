import { useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

import "./styles/App.scss";

import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import VictoryScene from "./components/VictoryScene";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const App = () => {
	// audio
	const [playBgm, { stop: stopBgm }] = useSound(
		process.env.PUBLIC_URL + "bgm.mp3"
	);
	const [playVictory, { stop: stopVictory }] = useSound(
		process.env.PUBLIC_URL + "victory_bgm.mp3",
		{ volume: 0.5 }
	);

	// game state
	const [score, setScore] = useState(0);
	const [selectedKirby, setSelectedKirby] = useState<string[]>([]);

	// play bgm on-mount, stop bgm in unmount
	useEffect(() => {
		playBgm();

		return () => {
			stopBgm();
		};
	}, [playBgm, stopBgm]);

	const resetState = () => {
		setSelectedKirby([]);
		setScore(0);
	};

	const playerMove = (kirby: string) => {
		// reset game state if lose
		if (selectedKirby.includes(kirby)) {
			resetState();
		} else {
			// increment score if not
			setSelectedKirby([...selectedKirby, kirby]);
			setScore(score + 1);
		}
	};

	// reset whole game
	const afterVictory = () => {
		resetState();
		stopVictory();
		playBgm();
	};

	// victory
	if (score === 10) {
		stopBgm();
		playVictory();
	}

	return (
		<AppContainer>
			<Header score={score} />

			<CardContainer playerMove={playerMove} />

			<VictoryScene onClick={afterVictory} display={score === 10} />
		</AppContainer>
	);
};

export default App;
