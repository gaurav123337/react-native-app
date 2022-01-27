import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [location, setLocation] = useState(null);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        },
      );
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
