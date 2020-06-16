import styled from 'styled-components/native';

export const Container = styled.View`
	margin-bottom: 8px;
`;

export const Row = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 24px;
`;

export const Label = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Regular';
	font-size: 12px;
	opacity: 0.75;
`;

export const Value = styled.View`
	background-color: rgba(255, 255, 255, 0.6);
	flex-direction: row;
	height: 8px;
	width: 240px;
	position: relative;
`;

interface FillProps {
	percentage: number;
}

export const Fill = styled.View<FillProps>`
	background-color: #fff;
	height: 8px;
	width: ${({ percentage }) => percentage}%;
	position: absolute;
	top: 0px;
	left: 0px;
`;
