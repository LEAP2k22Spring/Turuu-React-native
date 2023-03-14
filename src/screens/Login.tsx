import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {Button} from '../components';

export const LoginScreen = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const navigation = useNavigation();

  const logIn = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <View className="w-full flex flex-col justify-center items-center h-full gap-y-[25px]">
      <View className="w-[300px]">
        <Image
          className="w-[180px] h-[53px]"
          source={require('../assets/images/Logo.png')}
        />
      </View>
      <TextInput
        className="border-[1px] border-[#CECCCC] rounded-[5px] h-[45px] w-[300px] pl-[20px]"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="И-мэйл"
      />
      <TextInput
        className="border-[1px] border-[#CECCCC] rounded-[5px] h-[45px] w-[300px] pl-[20px] mb-[40px]"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Нууц үг"
        secureTextEntry
      />
      <Button
        title="Нэвтрэх"
        void={logIn}
        container="w-[300px] h-[45px] bg-black rounded-[5px] "
        style="text-[#fff] text-[16px] font-medium"
      />
    </View>
  );
};
