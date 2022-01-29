import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state } = useContext(LocationContext);

  console.log(state);

  if (!state.currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.78825 + i * 0.001,
  //       longitude: -122.4324 + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.78825 - i * 0.002,
  //       longitude: -122.4324 + i * 0.001,
  //     });
  //   }
  // }
  const initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={state.currentLocation.coords}
        radius={30}
        strokeColor='rgba(158,158,255,0.1)'
        fillColor='rgba(158,158,255,0.3)'
      />
      <Polyline coordinates={state.locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
});

export default Map;
