import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 48 }}>AccountScreen Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={() => signout()} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

AccountScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AccountScreen;
