import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return <>
    <Spacer>
      <Text h3>Signup for Tracker</Text>
    </Spacer>
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />

    <Spacer>
      <Button
        title="Sign Up"
      />
    </Spacer>
    {/* <Button
      title="Go to Signin"
      onPress={() => navigation.navigate('Signin')}
    />
    <Button
      title="Go to main flow"
      onPress={() => navigation.navigate('mainFlow')}
    /> */}
  </>
};

const styles = StyleSheet.create({});

export default SignupScreen;
