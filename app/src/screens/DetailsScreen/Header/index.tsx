import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Wrapper, Container } from './styles';

import ArrowLeft from '~/assets/icons/back.svg';

const Header: React.FC = () => {
	const navigation = useNavigation();
	const goBack = useCallback(() => {
		navigation.goBack();
	}, [navigation]);

	return (
		<Wrapper>
			<Container>
				<TouchableOpacity onPress={goBack} activeOpacity={0.7}>
					<ArrowLeft width={24} height={24} fill="#fff" />
				</TouchableOpacity>
			</Container>
		</Wrapper>
	);
};

export default Header;
