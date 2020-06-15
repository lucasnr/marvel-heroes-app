import styled from 'styled-components/native';

export const Container = styled.View`
	margin-bottom: 48px;
`;

export const Header = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 16px;
	padding: 0px 24px;
`;

export const Label = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: 'Gilroy-Bold';
	font-size: 18px;
`;

export const SeeAll = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: 'Gilroy-Medium';
	font-size: 14px;
`;

export const Characters = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 24,
	},
})`
	margin: 0px -8px;
`;
