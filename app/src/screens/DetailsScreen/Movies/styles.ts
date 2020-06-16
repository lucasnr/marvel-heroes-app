import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 24,
	},
})`
	margin-left: -32px;
	margin-right: -32px;
	margin-bottom: 32px;
`;

export const Movie = styled.Image`
	border-radius: 16px;
	height: 230px;
	margin: 0px 8px;
	width: 140px;
`;
