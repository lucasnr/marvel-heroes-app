import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';

import Icon from '~/components/Icon';
import { Container } from './styles';

import Hero from '~/assets/icons/hero.svg';
import Villain from '~/assets/icons/villain.svg';
import AntiHero from '~/assets/icons/antihero.svg';
import Alien from '~/assets/icons/alien.svg';
import Human from '~/assets/icons/human.svg';

interface Option {
	[key: string]: { icon: React.FC<SvgProps>; from: string; to: string };
}

const options: Option = {
	hero: {
		icon: Hero,
		from: '#005BEA',
		to: '#00C6FB',
	},
	villain: {
		icon: Villain,
		from: '#ED1D24',
		to: '#ED1F69',
	},
	antihero: {
		icon: AntiHero,
		from: '#B224EF',
		to: '#7579FF',
	},
	alien: {
		icon: Alien,
		from: '#0BA360',
		to: '#3CBA92',
	},
	human: {
		icon: Human,
		from: '#FF7EB3',
		to: '#FF758C',
	},
};

interface Props {
	name: 'hero' | 'villain' | 'antihero' | 'alien' | 'human';
}

const Category: React.FC<Props> = ({ name }) => {
	const { from, to, icon: OptionIcon } = options[name];

	return (
		<Container>
			<Icon
				component={OptionIcon}
				alt="Ícone da categoria"
				width={32}
				height={32}
			/>
			<LinearGradient colors={[from, to]} style={styles.gradient} />
		</Container>
	);
};

export default Category;

const styles = StyleSheet.create({
	gradient: {
		borderRadius: 112,
		height: '100%',
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: -5,
	},
});
