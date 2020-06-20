import React, { useMemo } from 'react';

import Icon from '~/components/Icon';
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

	const age = useMemo(() => {
		return new window.Date().getFullYear() - Number(birth);
	}, [birth]);

	return (
		<Container>
			<Item>
				<Icon
					component={Age}
					alt="Ícone de idade"
					width={iconSize}
					height={iconSize}
				/>
				<Value>{age} anos</Value>
			</Item>

			<Item>
				<Icon
					component={Weight}
					alt="Ícone de peso"
					width={iconSize}
					height={iconSize}
				/>
				<Value>
					{weight.value}
					{weight.unity}
				</Value>
			</Item>

			<Item>
				<Icon
					component={Height}
					alt="Ícone de altura"
					width={iconSize}
					height={iconSize}
				/>
				<Value>
					{height.value}
					{height.unity}
				</Value>
			</Item>

			<Item>
				<Icon
					component={Universe}
					alt="Ícone de universo"
					width={iconSize}
					height={iconSize}
				/>
				<Value>{universe}</Value>
			</Item>
		</Container>
	);
};

export default Characteristics;
