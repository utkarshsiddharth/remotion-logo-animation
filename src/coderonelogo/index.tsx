import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import Logo from './LogoComponents/logo';
const BackgroundContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #111 !important;
`;

const CenteredContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 2;
`;

const Heading = styled.h1`
	font-size: 120px;
	font-weight: bold;
	letter-spacing: 0.15px;
	color: white;
`;

export const CoderOneLogo = () => {
	return (
		<BackgroundContainer style={{backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={Infinity}>
				<CenteredContainer>
					<Logo />
				</CenteredContainer>
			</Sequence>
		</BackgroundContainer>
	);
};

export default CoderOneLogo;
