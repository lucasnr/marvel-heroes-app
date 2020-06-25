import React, { useMemo } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from './Header';
import Characteristics from './Characteristics';
import Skills from './Skills';
import Movies from './Movies';
import {
	Container,
	ScrollContainer,
	Image,
	Content,
	AlterEgo,
	Name,
	Biography,
	Title,
} from './styles';

import { DetailsScreenRouteProp } from '~/routes';

import findImage from '~/utils/findImage';

const DetailsScreen: React.FC = () => {
	const {
		params: {
			imagePath,
			alterEgo,
			name,
			caracteristics,
			biography,
			abilities,
			movies,
		},
	} = useRoute<DetailsScreenRouteProp>();
	const image = useMemo(() => findImage(imagePath), [imagePath]);

	return (
		<>
			<Container>
				<Header />

				<ScrollContainer showsVerticalScrollIndicator={false}>
					<Image source={image} />
					<LinearGradient
						colors={['transparent', 'transparent', 'rgba(0,0,0, .75)', '#000']}
						style={styles.gradient}
					/>

					<Content>
						<AlterEgo>{alterEgo}</AlterEgo>
						<Name>{name}</Name>

						<Characteristics {...caracteristics} />

						<Biography>{biography}</Biography>

						<Title>Habilidades</Title>
						<Skills {...abilities} />

						<Title>Filmes</Title>
						<Movies movies={movies} />
					</Content>
				</ScrollContainer>
			</Container>

			<StatusBar
				barStyle="light-content"
				translucent={true}
				backgroundColor="transparent"
			/>
		</>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	gradient: {
		height: 812,
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: -5,
	},
});
