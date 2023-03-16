import React, {useCallback, useMemo, useRef, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Button} from '../components';
import {useCollection} from '../context';

export const Bottomsheet = () => {
  const [bottomSheet, setBottomSheet] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const {setCoord} = useCollection();

  const {navigate} = useNavigation();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['12%', '35%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheet(() => index);
  }, []);

  const shareLocation = () => {
    Geolocation.requestAuthorization('whenInUse');
    Geolocation.getCurrentPosition(
      position => {
        let coord = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setCoord(() => coord);
        //    setLatitude(position.coords.latitude);
        //    setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const logOut = () => {
    navigate('Login' as never);
    console.log('log out');
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      {!bottomSheet ? (
        <View className="px-[16] flex flex-row gap-[15px] items-center">
          <Image
            className="w-[50] h-[50] rounded-full"
            source={{
              uri: 'https://images.unsplash.com/photo-1678720131679-14475f693cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
            }}
          />
          <View className="flex flex-col justify-between">
            <Text className="text-[16px] font-medium text-[#0C1219]">
              Ганболд Насанбат
            </Text>
            <Text className="text-[14px] font-normal text-[#AAAAAA]">
              Та байршлаа хуваалцахгүй байна
            </Text>
          </View>
        </View>
      ) : (
        <View className="px-[16] flex flex-col gap-[15px] items-center pt-[1%]">
          <Image
            className="w-[50] h-[50] rounded-full"
            source={{
              uri: 'https://images.unsplash.com/photo-1678720131679-14475f693cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
            }}
          />
          <Text className="text-[16px] font-medium text-[#0C1219] mb-[1%]">
            Ганболд Насанбат
          </Text>
          <View className="flex flex-col">
            <Button
              void={shareLocation}
              title="Байршил хуваалцах"
              container="bg-[#0C1219] h-[45px] w-[250px] rounded-[10px]"
              style="text-[#fff] text-[14px] font-normal"
            />
            <Button
              void={logOut}
              title="Гарах"
              container="h-[45px] w-[250px] rounded-[10px] border-[1px] border-[#0C1219]  mt-[2%] "
              style="text-[#000] text-[14px] font-normal"
            />
          </View>
        </View>
      )}
    </BottomSheet>
  );
};
