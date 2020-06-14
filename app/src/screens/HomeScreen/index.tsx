import React from 'react';

import Header from './Header';
import Category from './Category';
import { Container, Welcome, Greetings, Title, Categories } from './styles';

const HomeScreen: React.FC = () => {
	return (
		<Container>
			<Header />
			<Welcome>
				<Greetings>Bem-vindo ao Marvel Heroes</Greetings>
				<Title>Escolha o seu personagem</Title>
			</Welcome>
			<Categories>
				<Category name="hero" />
				<Category name="villain" />
				<Category name="antihero" />
				<Category name="alien" />
				<Category name="human" />
			</Categories>
		</Container>
	);
};

export default HomeScreen;
