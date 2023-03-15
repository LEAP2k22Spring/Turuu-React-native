import {Image, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import React from 'react';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: '',
  };
  const validation = yup.object().shape({
    email: yup.string().matches(/.+@.+\.[A-Za-z]+$/),
    password: yup.string().min(8),
  });

  const logIn = async (props: {email: string; password: string}) => {
    console.log(props);
    navigation.navigate('Home' as never);
    // console.log('values', props);
    // await firestore()
    //   .collection('users')
    //   .add({
    //     email: props.email,
    //     password: props.password,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
  };

  return (
    <View className="w-full flex flex-col justify-center items-center h-full">
      <View className="w-[300px] mb-[25px]">
        <Image
          className="w-[180px] h-[53px]"
          source={require('../assets/images/Logo.png')}
        />
      </View>
      <Formik
        validationSchema={validation}
        onSubmit={values => logIn(values)}
        initialValues={initialValues}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View className="flex flex-col gap-y-[25px]">
            <TextInput
              className="border-[1px] border-[#CECCCC] rounded-[5px] h-[45px] w-[300px] pl-[20px]"
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder="И-мэйл"
            />
            {errors.email && (
              <Text className="absolute top-[50px] right-0">.......@.com</Text>
            )}
            <TextInput
              className="border-[1px] border-[#CECCCC] rounded-[5px] h-[45px] w-[300px] pl-[20px] mb-[40px]"
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="Нууц үг"
              secureTextEntry
            />
            {errors.password && (
              <Text className="absolute right-0 top-[55%]">
                {errors.password}
              </Text>
            )}
            <Button
              title="Нэвтрэх"
              void={handleSubmit}
              container="w-[300px] h-[45px] bg-black rounded-[5px] "
              style="text-[#fff] text-[16px] font-medium"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
