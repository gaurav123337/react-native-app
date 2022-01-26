import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

import { CommonActions } from '@react-navigation/native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return { ...state, errMessage: action.payload };
    case 'SIGNUP':
      return { errMessage: '', token: action.payload };
    case 'SIGNIN':
      return { errMessage: '', token: action.payload };
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, errMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'SIGNIN', payload: token });
    navigate('MainFlow');
  } else {
    navigate('Signp');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'CLEAR_ERROR_MESSAGE' });
};

const signup = (dispatch) => {
  return async ({ email, password }, callback) => {
    // make api request to signup
    // if we signup, modify our state and say we are authenticated
    //if signing up fail, need to show the error

    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      // await AsyncStorage.getItem('token');
      dispatch({ type: 'SIGNUP', payload: response.data.token });

      //naviage to main flow
      navigate('MainFlow');
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with my sign up',
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      // await AsyncStorage.getItem('token');
      dispatch({ type: 'SIGNIN', payload: response.data.token });

      //naviage to main flow
      navigate('MainFlow');
    } catch (err) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with my sign in',
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    // signout
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errMessage: '' },
);
