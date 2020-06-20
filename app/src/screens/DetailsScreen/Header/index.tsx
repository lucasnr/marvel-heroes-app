import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from '~/components/Icon';
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
					<Icon
						component={ArrowLeft}
						alt="Ícone de voltar"
						width={24}
						height={24}
					/>
				</TouchableOpacity>
			</Container>
		</Wrapper>
	);
};

export default Header;
