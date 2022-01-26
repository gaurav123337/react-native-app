import React, { useLayoutEffect, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => navigation.addListener('focus', () => clearErrorMessage()));

  console.log(state, 'Updated state');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign up for Tracker'
        errorMessage={state.errMessage}
        submitButtonText='Sign Up'
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <Spacer>
        <NavLink
          text='Already have an account? Please sign in'
          routeName='Signin'
        />
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

export default SignupScreen;
