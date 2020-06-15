import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Wrapper, Container, AlterEgo, Name } from './styles';

import findImage from '~/utils/findImage';

export interface ICharacter {
	name: string;
	alterEgo: string;
	imagePath: string;
	biography: string;
	caracteristics: {
		birth: string;
		weight: {
			value: number;
			unity: string;
		};
		height: {
			value: number;
			unity: string;
		};
		universe: string;
	};
	abilities: {
		force: number;
		intelligence: number;
		agility: number;
		endurance: number;
		velocity: number;
	};
	movies: string[];
}

const Character: React.FC<ICharacter> = ({ name, alterEgo, imagePath }) => {
	const image = useMemo(() => findImage(imagePath), []);

	return (
		<TouchableOpacity activeOpacity={0.7}>
			<Wrapper source={image}>
				<LinearGradient
					colors={['transparent', 'rgba(0,0,0, .75)']}
					style={styles.gradient}
				/>

				<Container>
					<AlterEgo>{alterEgo}</AlterEgo>
					<Name>{name}</Name>
				</Container>
			</Wrapper>
		</TouchableOpacity>
	);
};

export default Character;

const styles = StyleSheet.create({
	gradient: {
		borderRadius: 12,
		height: '100%',
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 5,
	},
});
