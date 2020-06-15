import React from 'react';

import Header from './Header';
import Category from './Category';
import Section from './Section';
import {
	Container,
	ScrollContainer,
	Welcome,
	Greetings,
	Title,
	Categories,
} from './styles';

import {
	heroes,
	villains,
	antiHeroes as antiheroes,
	aliens,
	humans,
} from '~/application.json';

const HomeScreen: React.FC = () => {
	return (
		<Container>
			<Header />

			<ScrollContainer showsVerticalScrollIndicator={false}>
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

				<Section label="Heróis" data={heroes} />
				<Section label="Vilões" data={villains} />
				<Section label="Anti-Heróis" data={antiheroes} />
				<Section label="Aliens" data={aliens} />
				<Section label="Humanos" data={humans} />
			</ScrollContainer>
		</Container>
	);
};

export default HomeScreen;
