import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import defaultTheme from '~/styles/themes/default';
import Routes from '~/routes';

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
		<ThemeProvider theme={defaultTheme}>
			<Routes />
		</ThemeProvider>
	);
};
