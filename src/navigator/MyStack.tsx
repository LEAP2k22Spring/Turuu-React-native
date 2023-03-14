import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/Login';
import React from 'react';
import {HomeScreen} from '../screens/Home';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
