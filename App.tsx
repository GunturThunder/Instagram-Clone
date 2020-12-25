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
import { storyScreen } from './src/screens/story/story'

const Stack = createStackNavigator();
const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Login">
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="bottmNavigator" component={bottmNavigator} />
        <Stack.Screen name="storyScreen" component={storyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
