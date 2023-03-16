import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import {Button} from '../components';

export const HomeScreen = () => {
  const [bottomSheet, setBottomSheet] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const {navigate} = useNavigation();

  const state = {
    latitude: latitude === 0 ? 47.9119352 : latitude,
    longitude: longitude === 0 ? 106.9234799 : longitude,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  };
  const marker = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['12%', '35%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheet(() => index);
  }, []);

  const shareLocation = () => {
    Geolocation.requestAuthorization('whenInUse');
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
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
    <SafeAreaView className="flex-[1]">
      <MapView
        showsScale={true}
        className="flex-grow"
        region={state}
        showsBuildings={true}>
        <Marker coordinate={marker} draggable />
      </MapView>
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
          <View className="px-[16] flex flex-col gap-[15px] items-center pt-[10]">
            <Image
              className="w-[50] h-[50] rounded-full"
              source={{
                uri: 'https://images.unsplash.com/photo-1678720131679-14475f693cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
              }}
            />
            <Text className="text-[16px] font-medium text-[#0C1219] mb-[30px]">
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
                container="h-[45px] w-[250px] rounded-[10px] border-[1px] border-[#0C1219]  mt-[12px] "
                style="text-[#000] text-[14px] font-normal"
              />
            </View>
          </View>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

// getData firebase functionality
