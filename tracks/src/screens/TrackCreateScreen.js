import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';

import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation((location) => addLocation(location));

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
