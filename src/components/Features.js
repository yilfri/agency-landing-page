import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	width: 50%;
`;

const Image = styled.img`
	width: 80%;
`;

const Right = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Title = styled.span`
	font-size: 70px;
	margin-top: 20px;
`;

const SubTitle = styled.span`
	font-size: 24px;
	font-style: Italic;
	color: #333;
	margin-top: 30px;
`;

const Desc = styled.p`
	font-size: 20px;
	color: #777;
	margin-top: 30px;
`;

const Button = styled.button`
	width: 150px;
	border: none;
	padding: 15px 20px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	border-radius: 20px;
	margin-top: 20px;
	cursor: pointer;
`;

const Features = () => {
	return (
		<Container>
			<Left>
				<Image src={App} />
			</Left>
			<Right>
				<Title>
					<b>good</b> Design <br />
					<b>good</b> Business <br />
				</Title>
				<SubTitle>We know that good design means good business</SubTitle>
				<Desc>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium officia numquam
					eligendi velit ducimus quia quos quis enim dicta! Minus reiciendis magnam ratione
					voluptates porro non numquam dolorem sit mollitia!
				</Desc>
				<Button>Learn More</Button>
			</Right>
			<AnimatedShapes />
		</Container>
	);
};

export default Features;
