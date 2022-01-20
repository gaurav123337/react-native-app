import { ActionSheetIOS } from "react-native";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    // case :
    //  return state;
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, pasword }) => {
    // make api request to signup

    // if we signup, modify our state and say we are authenticated

    //if signing up fail, need to show the error
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
  { isSignedIn: false }
)
