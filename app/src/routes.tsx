import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/HomeScreen';
import DetailsScreen from '~/screens/DetailsScreen';

import { ICharacter } from '~/types';

type RootStackParamList = {
	Home: undefined;
	Details: ICharacter;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
