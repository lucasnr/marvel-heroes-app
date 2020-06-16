import React, { useMemo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Wrapper, Container, AlterEgo, Name } from './styles';

import { ICharacter } from '~/types';
import findImage from '~/utils/findImage';

const Character: React.FC<ICharacter> = (props) => {
	const { name, alterEgo, imagePath } = props;
	const image = useMemo(() => findImage(imagePath), []);

	const navigation = useNavigation();
	const handlePress = useCallback(() => {
		navigation.navigate('Details', { ...props });
	}, [navigation, props]);

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
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
