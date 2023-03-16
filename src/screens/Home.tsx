import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native';
import {Bottomsheet} from '../components';
import {useCollection} from '../context';
import React from 'react';

export const HomeScreen = () => {
  const {coord} = useCollection() as {
    coord: {latitude: number; longitude: number};
  };
  const state = {
    latitude: coord?.latitude ? 47.9119352 : coord?.latitude,
    longitude: coord?.longitude ? 106.9234799 : coord?.longitude,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  };
  const marker = {
    latitude: coord?.latitude,
    longitude: coord?.longitude,
  };

  return (
    <SafeAreaView className="flex-[1]">
      <MapView
        showsScale={true}
        className="flex-grow"
        region={state}
        showsBuildings={true}>
        <Marker coordinate={marker} />
      </MapView>
      <Bottomsheet />
    </SafeAreaView>
  );
};
