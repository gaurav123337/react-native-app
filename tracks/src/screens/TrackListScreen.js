import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  //console.log(state);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      return fetchTracks();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
