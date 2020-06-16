import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
	background-color: #000;
	flex: 1;
`;

export const Image = styled.Image`
	height: 812px;
	position: absolute;
	width: 100%;
	top: 0px;
	z-index: -10;
`;

export const ScrollContainer = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingBottom: 16,
		paddingTop: (StatusBar.currentHeight || 0) + 292,
	},
})`
	flex: 1;
	margin-top: -${(StatusBar.currentHeight || 0) + 64}px;
`;

export const Content = styled.View`
	padding-left: 24px;
	padding-right: 24px;
`;

export const AlterEgo = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Medium';
	font-size: 16px;
	opacity: 0.75;
`;

export const Name = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Heavy';
	font-size: 40px;
	max-width: 220px;
`;

export const Biography = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Medium';
	font-size: 14px;
	line-height: 16px;
	margin-bottom: 32px;
	text-align: justify;
`;

export const Title = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Bold';
	font-size: 18px;
	margin-bottom: 24px;
`;
