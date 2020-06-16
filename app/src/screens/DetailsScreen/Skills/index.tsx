import React from 'react';

import { Container, Row, Label, Value, Fill } from './styles';

import { ICharacterSkills } from '~/types';

const Skills: React.FC<ICharacterSkills> = ({
	force,
	intelligence,
	agility,
	endurance,
	velocity,
}) => {
	return (
		<Container>
			<Row>
				<Label>Força</Label>
				<Value>
					<Fill percentage={force} />
				</Value>
			</Row>

			<Row>
				<Label>Inteligência</Label>
				<Value>
					<Fill percentage={intelligence} />
				</Value>
			</Row>

			<Row>
				<Label>Agilidade</Label>
				<Value>
					<Fill percentage={agility} />
				</Value>
			</Row>

			<Row>
				<Label>Resistência</Label>
				<Value>
					<Fill percentage={endurance} />
				</Value>
			</Row>

			<Row>
				<Label>Velocidade</Label>
				<Value>
					<Fill percentage={velocity} />
				</Value>
			</Row>
		</Container>
	);
};

export default Skills;
