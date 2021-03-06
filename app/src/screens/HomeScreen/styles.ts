import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: #fafafa;
	flex-grow: 1;
	padding-top: ${StatusBar.currentHeight || 0}px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingVertical: 24,
	},
})`
	flex: 1;
`;

export const Welcome = styled.View`
	margin-bottom: 32px;
	padding: 0px 24px;
`;

export const Greetings = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'Gilroy-SemiBold';
	font-size: 14px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: 'Gilroy-Heavy';
	font-size: 32px;
`;

export const Categories = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 48px;
	padding: 0px 24px;
`;
