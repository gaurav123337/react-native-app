import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  useEffect(() => navigation.addListener('focus', () => clearErrorMessage()));

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign in for Tracker'
        errorMessage={state.errMessage}
        submitButtonText='Sign In'
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <Spacer>
        <NavLink text="Don't account? Please sign in" routeName='Signup' />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
