import React, { useMemo } from 'react';

import { Container, Item, Value } from './styles';

import { ICharacterCharacteristics as ICharacteristics } from '~/types';

import Age from '~/assets/icons/age.svg';
import Weight from '~/assets/icons/weight.svg';
import Height from '~/assets/icons/height.svg';
import Universe from '~/assets/icons/universe.svg';

const Characteristics: React.FC<ICharacteristics> = ({
	birth,
	weight,
	height,
	universe,
}) => {
	const iconSize = 24;
	const fillColor = 'rgba(255, 255, 255, .6)';

	const age = useMemo(() => {
		return new window.Date().getFullYear() - Number(birth);
	}, [birth]);

	return (
		<Container>
			<Item>
				<Age width={iconSize} height={iconSize} fill={fillColor} />
				<Value>{age} anos</Value>
			</Item>

			<Item>
				<Weight width={iconSize} height={iconSize} fill={fillColor} />
				<Value>
					{weight.value}
					{weight.unity}
				</Value>
			</Item>

			<Item>
				<Height width={iconSize} height={iconSize} fill={fillColor} />
				<Value>
					{height.value}
					{height.unity}
				</Value>
			</Item>

			<Item>
				<Universe width={iconSize} height={iconSize} fill={fillColor} />
				<Value>{universe}</Value>
			</Item>
		</Container>
	);
};

export default Characteristics;
