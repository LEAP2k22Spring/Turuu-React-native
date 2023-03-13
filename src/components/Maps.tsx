import React from 'react';
import {SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export const Maps = () => {
  const state = {
    latitude: 47.9119352,
    longitude: 106.9234799,
    latitudeDelta: 0.02,
    longitudeDelta: 0.1,
  };
  const state2 = {
    latitude: 47.9140227,
    longitude: 106.9165197,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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
    </SafeAreaView>
  );
};
