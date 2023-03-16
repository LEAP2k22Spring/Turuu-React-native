import {NavigationContainer} from '@react-navigation/native';
import {Collection, MyStack} from './src';
import React from 'react';

export const App = () => {
  return (
    <NavigationContainer>
      <Collection>
        <MyStack />
      </Collection>
    </NavigationContainer>
  );
};
