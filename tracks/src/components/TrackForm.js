import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = ({}) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  // console.log(locations.length);
  return (
    <>
      <Spacer />
      <Input value={name} onChangeText={changeName} placeholder='Enter name' />
      {/* <Button
        title={recording ? 'Stop recording' : 'Start recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}
      {recording ? (
        <Button title='Stop recording' onPress={stopRecording} />
      ) : (
        <Button title='Start recording' onPress={startRecording} />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
