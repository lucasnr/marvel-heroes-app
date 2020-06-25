import React from 'react';
import { View, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import defaultTheme from './src/styles/themes/default';
import Routes from './src/routes';

export default function () {
	let [fontsLoaded] = useFonts({
		'Gilroy-Regular': require('./assets/fonts/gilroy-regular.ttf'),
		'Gilroy-Medium': require('./assets/fonts/gilroy-medium.ttf'),
		'Gilroy-SemiBold': require('./assets/fonts/gilroy-semibold.ttf'),
		'Gilroy-Bold': require('./assets/fonts/gilroy-bold.ttf'),
		'Gilroy-Heavy': require('./assets/fonts/gilroy-heavy.ttf'),
	});

	return fontsLoaded ? <App /> : <AppLoading />;
}

const App: React.FC = () => {
	return (
		<Container>
			<ThemeProvider theme={defaultTheme}>
				<Routes />
			</ThemeProvider>
		</Container>
	);
};

const Container: React.FC = ({ children }) => {
	return Platform.OS === 'web' ? (
		<View
			style={{
				flex: 1,
				marginHorizontal: 'auto',
				maxWidth: 400,
				width: '100%',
			}}
		>
			{children}
		</View>
	) : (
		<>{children}</>
	);
};
