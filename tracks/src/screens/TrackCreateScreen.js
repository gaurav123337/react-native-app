import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const { state, addLocation } = useContext(LocationContext);
  const callBack = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording],
  );
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused || state.recording, callBack);

  console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
