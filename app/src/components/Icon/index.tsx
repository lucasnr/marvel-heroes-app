import React from 'react';
import { Platform } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface Props {
	alt: string;
	component: React.FC<SvgProps>;
	height: number;
	width: number;
}

const Icon: React.FC<Props> = ({
	component: Component,
	alt,
	width,
	height,
}) => {
	if (Platform.OS === 'web')
		return (
			<img src={Component.toString()} alt={alt} width={width} height={height} />
		);

	return <Component width={width} height={height} />;
};

export default Icon;
