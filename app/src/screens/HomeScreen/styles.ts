import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
	flex-grow: 1;
	padding-top: ${StatusBar.currentHeight || 0}px;
`;
