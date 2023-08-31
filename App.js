/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Login} name="Login"/>
        <Stack.Screen component={Register} name='Register'/>
        {/* The header shown property basically hides the header when set to false */}
        <Stack.Screen component={Home} name="Home"/>
      </Stack.Navigator>
    </NavigationContainer>    
    // <Login></Login>
  );
}

export default App;