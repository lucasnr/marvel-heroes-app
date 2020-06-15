import React from 'react';
import { TouchableOpacity } from 'react-native';

import Character from './Character';
import { Container, Header, Label, SeeAll, Characters } from './styles';

import { ICharacter } from './Character';

interface Props {
	label: string;
	data: ICharacter[];
}

const Section: React.FC<Props> = ({ label, data }) => {
	return (
		<Container>
			<Header>
				<Label>{label}</Label>
				<TouchableOpacity activeOpacity={0.4}>
					<SeeAll>Ver tudo</SeeAll>
				</TouchableOpacity>
			</Header>
			<Characters horizontal={true} showsHorizontalScrollIndicator={false}>
				{data.map((character, index) => (
					<Character key={index} {...character} />
				))}
			</Characters>
		</Container>
	);
};

export default Section;
