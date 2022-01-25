import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

import {CommonActions } from '@react-navigation/native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
     return {...state, errMessage: action.payload};
     case 'SIGNUP':
     return { errMessage:'', token: action.payload};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async({ email, password }, callback) => {
    // make api request to signup
    // if we signup, modify our state and say we are authenticated
    //if signing up fail, need to show the error

    try{
      const response =await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      // await AsyncStorage.getItem('token');
      dispatch({type: 'SIGNUP', payload: response.data.token});

      //naviage to main flow
       navigate('MainFlow');
    }catch(err){
      dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with my sign up'});
    }
  }
};
const signin = (dispatch) => {
  return ({ email, pasword }) => {
    // make api request to signup

    // if we signup, modify our state and say we are authenticated

    //if signing up fail, need to show the error
  }
};
const signout = (dispatch) => {
  return () => {
    // signout
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false,token: null, errMessage: '' }
)
