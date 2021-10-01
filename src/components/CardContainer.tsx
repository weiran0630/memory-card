import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AllKirby from "../data/allKirby.json";
import { IKirby } from "../models";
import Card from "./Card";

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 2rem 0;
	gap: 2rem;
`;

interface CardContainerProp {
	playerMove: (kirby: string) => void;
}
const CardContainer: React.FC<CardContainerProp> = ({ playerMove }) => {
	// the order of the list determine the order of cards
	const [kirbyList, setKirbyList] = useState<IKirby[]>([]);

	// shuffle the list on-mount
	useEffect(() => {
		setKirbyList(shuffleList());
	}, []);

	// array shuffle algorithm
	const shuffleList = () => {
		return AllKirby.kirby
			.map(kirby => ({ kirby, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ kirby }) => kirby);
	};

	const onCardClick = (kirby: string) => {
		playerMove(kirby);
		setKirbyList(shuffleList());
	};

	return (
		<Container>
			{kirbyList.map(({ imgUrl, cardName, color }) => (
				<Card
					imgUrl={imgUrl}
					cardName={cardName}
					key={cardName}
					color={color}
					onClick={() => onCardClick(cardName)}
				/>
			))}
		</Container>
	);
};

export default CardContainer;
