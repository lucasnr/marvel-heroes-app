import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

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
    <View style={styles.container}>
      <Text style={styles.text}>Goodbye World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontFamily: 'Gilroy-Heavy', fontSize: 40 },
});
