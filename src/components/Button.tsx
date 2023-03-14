import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = (props: {
  void: () => void;
  title: string;
  style: string;
  container: string;
}) => {
  return (
    <TouchableOpacity
      onPress={props.void}
      className={`flex items-center justify-center  ${props.container}`}>
      <Text className={`${props.style}`}>{props.title}</Text>
    </TouchableOpacity>
  );
};
