import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => props.color};
	width: 300px;
	padding: 2rem 2rem 2rem 2rem;
	border-radius: 30px;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);

	img {
		border-radius: 50%;
		border: 10px solid rgba(0, 0, 0, 0.1);
		object-fit: cover;
		width: 220px;
		height: 220px;
	}

	h2 {
		margin-top: 1rem;
		color: white;
		text-shadow: 0 0 3px #000;
		font-size: 40px;
	}
`;

interface CardProps {
	imgUrl: string;
	cardName: string;
	color: string;
	onClick: () => void;
}
const Card: React.FC<CardProps> = ({ imgUrl, cardName, color, onClick }) => {
	return (
		<Container onClick={onClick} color={color}>
			<img src={imgUrl} alt={cardName} />
			<h2>{cardName} Kirby</h2>
		</Container>
	);
};

export default Card;
