import React, { useState } from 'react';
import styled from 'styled-components';
import MiniCard from './MiniCard';
import How from '../img/how.png';
import Play from '../img/play.png';

const Container = styled.div`
	display: flex;
	height: 100%;
`;

const Left = styled.div`
	width: 50%;
	position: relative;
`;

const Image = styled.img`
	display: ${(props) => (props.open ? 'none' : 'block')};
	height: 100%;
	transition: 0.4s;
`;

const Video = styled.video`
	display: ${(props) => (!props.open ? 'none' : 'block')};
	height: 300px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	transition: 0.4s;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Right = styled.div`
	width: 50%;
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p`
	font-size: 20px;
	margin-top: 20px;
	color: #555;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;

const Button = styled.button`
	width: 180px;
	border: none;
	border-radius: 10px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	padding: 15px;
	margin-top: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 20px;
	margin-right: 10px;
`;

const Service = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<Left>
				<Image open={open} src={How} />
				<Video
					open={open}
					autoPlay
					loop
					controls
					src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
				/>
			</Left>
			<Right>
				<Wrapper>
					<Title>Simple process to start</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor itaque
						eaque quia delectus repudiandae deleniti tenetur blanditiis sit tempora! At nam odit
						provident possimus aliquam reiciendis perferendis sunt suscipit consequatur voluptatem
						voluptate beatae incidunt, recusandae fugiat, minus ipsa sequi!
					</Desc>
					<CardContainer>
						<MiniCard />
						<MiniCard />
						<MiniCard />
					</CardContainer>
					<Button onClick={() => setOpen(!open)}>
						<Icon src={Play} />
						How it works
					</Button>
				</Wrapper>
			</Right>
		</Container>
	);
};

export default Service;
