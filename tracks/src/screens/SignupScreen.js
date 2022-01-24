import React, { useLayoutEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
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
    {state.errMessage ? <Text style={styles.errorMessage}>{state.errMessage}</Text> : null}
    <Spacer>
      <Button
        title="Sign Up" onPress={() => signup({email,password})}
      />
    </Spacer>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  errorMessage:{
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default SignupScreen;
