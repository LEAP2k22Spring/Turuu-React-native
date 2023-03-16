import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/Login';
import {HomeScreen} from '../screens/Home';
import React from 'react';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
