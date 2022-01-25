import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';

const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();
  const { state, signin } = useContext(AuthContext);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default NavLink;
