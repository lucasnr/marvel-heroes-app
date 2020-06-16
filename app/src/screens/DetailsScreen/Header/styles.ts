import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Wrapper = styled.View`
	background-color: rgba(0, 0, 0, 0.6);
	padding-top: ${StatusBar.currentHeight || 0}px;
	z-index: 10;
`;

export const Container = styled.View`
	height: 64px;
	justify-content: center;
	padding: 0px 24px;
`;
