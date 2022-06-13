import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {BracketPath} from './bracketPath';
import CPath from './cPath';
import {UnderscorePath} from './underscorePath';
const LogoContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;
export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const cPathYPosition = spring({
		from: -10000,
		to: 0,
		frame,
		fps,
		config: {
			mass: 10,
			damping: 110,
			stiffness: 300,
		},
	});

	const UnderscoreWidth = spring({
		from: 0,
		to: 500,
		frame: frame - 5, // delay by 5 frame
		fps,
		config: {
			mass: 2,
			damping: 100,
			stiffness: 300,
		},
	});

	const UnderscoreYPosition = spring({
		from: -40,
		to: 370,
		frame: frame - 70, // delay by 5 frame
		fps,
		config: {
			mass: 10,
			damping: 100,
			stiffness: 300,
		},
	});

	const BracketPathPosition = spring({
		from: 3000,
		to: 40,
		frame: frame - 5,
		fps,
		config: {
			mass: 10,
			damping: 110,
			stiffness: 300,
		},
	});
	return (
		<LogoContainer>
			<BracketPath transformY={BracketPathPosition} />
			<UnderscorePath
				transformX={-100}
				transformY={UnderscoreYPosition}
				width={UnderscoreWidth}
			/>
			<CPath transformY={cPathYPosition} />
		</LogoContainer>
	);
};

export default Logo;
