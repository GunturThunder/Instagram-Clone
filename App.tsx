/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loginScreen } from './src/screens/login/login'
import { bottmNavigator } from './src/screens/home/bottomNavigator'

const Stack = createStackNavigator();
const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Login">
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="bottmNavigator" component={bottmNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
