import MapView, {Marker} from 'react-native-maps';
import {Image, SafeAreaView, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Button} from '../components';

export const HomeScreen = () => {
  const [bottomSheet, setBottomSheet] = useState(0);
  const state = {
    latitude: 47.9119352,
    longitude: 106.9234799,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  };
  const state2 = {
    latitude: 47.9140227,
    longitude: 106.9165197,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['12%', '35%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheet(() => index);
  }, []);

  const shareLocation = () => {
    console.log('share location');
  };

  const logOut = () => {
    console.log('log out');
  };

  return (
    <SafeAreaView className="flex-[1]">
      <MapView
        showsScale={true}
        className="flex-grow"
        initialRegion={state}
        showsBuildings={true}>
        <Marker coordinate={state2} />
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
// const getData = async () => {
//   await firestore()
//     .collection('users')
//     .doc('flI9g6bKCr88x8dn75Wu')
//     .onSnapshot(documentSnapshot => {
//       console.log('User data: ', documentSnapshot.data());
//     });
// };
// useEffect(() => {
//   getData();
// }, []);
