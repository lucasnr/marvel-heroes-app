import React from 'react';

import Header from './Header';
import { Container, Welcome, Greetings, Title } from './styles';

const HomeScreen: React.FC = () => {
	return (
		<Container>
			<Header />
			<Welcome>
				<Greetings>Bem-vindo ao Marvel Heroes</Greetings>
				<Title>Escolha o seu personagem</Title>
			</Welcome>
		</Container>
	);
};

export default HomeScreen;
