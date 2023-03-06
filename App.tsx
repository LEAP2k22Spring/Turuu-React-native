import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src';

export const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
