import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
