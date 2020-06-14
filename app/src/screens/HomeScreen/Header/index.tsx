import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

import Menu from '~/assets/icons/menu.svg';
import Search from '~/assets/icons/search.svg';
import Logo from '~/assets/icons/marvel.svg';

const Header: React.FC = () => {
	const { text } = useContext(ThemeContext);
	const iconSize = 24;

	return (
		<Container>
			<Menu width={iconSize} height={iconSize} color={text.primary} />
			<Logo width={98} height={34} />
			<Search width={iconSize} height={iconSize} color={text.primary} />
		</Container>
	);
};

export default Header;
