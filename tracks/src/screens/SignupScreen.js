import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return <View style={styles.container}>
    <Spacer>
      <Text h3>Signup for Tracker</Text>
    </Spacer>
    <Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={(text) => setEmail(text)} />
    <Spacer />
    <Input secureTextEntry autoCapitalize="none" autoCorrect={false} label="Password" value={password} onChangeText={(text) => setPassword(text)} />

    <Spacer>
      <Button
        title="Sign Up"
      />
    </Spacer>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;