import React from 'react';
import {BottomTabs} from './BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
