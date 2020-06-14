import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	flex-grow: 1;
	justify-content: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: 'Gilroy-Heavy';
	font-size: 30px;
	text-align: center;
`;
