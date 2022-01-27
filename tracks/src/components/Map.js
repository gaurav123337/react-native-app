import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import Spacer from './Spacer';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.78825 + i * 0.001,
        longitude: -122.4324 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.78825 - i * 0.002,
        longitude: -122.4324 + i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
});

export default Map;
