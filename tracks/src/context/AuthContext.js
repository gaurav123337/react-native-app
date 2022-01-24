import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ERROR':
     return {...state, errMessage: action.payload};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async({ email, password }) => {
    // make api request to signup
    // if we signup, modify our state and say we are authenticated
    //if signing up fail, need to show the error

    try{
      const response =await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    }catch(err){
      console.log(err.response.data);
      dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with my sign up'})
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
  { isSignedIn: false, errMessage: '' }
)
