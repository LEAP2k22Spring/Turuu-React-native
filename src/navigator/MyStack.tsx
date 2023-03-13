import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/Login';
import React from 'react';
import {Maps} from '../components/Maps';

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
        name="Main"
        component={Maps}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
