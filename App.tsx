import React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/screens/login'
import { Home } from './src/screens/home'

const Stack = createStackNavigator();
const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator headerMode='none' initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
