import styled from 'styled-components/native';

export const Wrapper = styled.ImageBackground`
	border-radius: 12px;
	height: 230px;
	justify-content: flex-end;
	margin: 0px 8px;
	overflow: hidden;
	width: 140px;
`;

export const Container = styled.View`
	padding: 12px;
`;

export const AlterEgo = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Medium';
	font-size: 10px;
	opacity: 0.75;
	z-index: 10;
`;

export const Name = styled.Text`
	color: #fff;
	font-family: 'Gilroy-Heavy';
	font-size: 20px;
	z-index: 10;
`;
