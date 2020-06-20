import React from 'react';

import Icon from '~/components/Icon';
import { Container } from './styles';

import Menu from '~/assets/icons/menu.svg';
import Search from '~/assets/icons/search.svg';
import Logo from '~/assets/icons/marvel.svg';

const Header: React.FC = () => {
	const iconSize = 24;

	return (
		<Container>
			<Icon
				component={Menu}
				alt={'Ícone de menu'}
				width={iconSize}
				height={iconSize}
			/>
			<Icon component={Logo} alt={'Logo da Marvel'} width={98} height={34} />
			<Icon
				component={Search}
				alt={'Ícone de busca'}
				width={iconSize}
				height={iconSize}
			/>
		</Container>
	);
};

export default Header;
