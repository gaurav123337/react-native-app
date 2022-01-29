import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_LOCATION':
      return { ...state, currentLocation: action.payload };
    case 'ADD_LOCATION':
      return { ...state, location: [...state.location, action.payload] };
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    case 'START_RECORDING':
      return { ...state, recording: true };
    case 'STOP_RECORDING':
      return { ...state, recording: false };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ type: 'CHANGE_NAME', payload: name });
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'START_RECORDING' });
};

const stopRecording = (dispatch) => () => {
  dispatch({ type: 'STOP_RECORDING' });
};

const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'ADD_CURRENT_LOCATION', payload: location });
  //console.log(recording);
  if (recording) {
    dispatch({ type: 'ADD_LOCATION', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  { name: '', recording: false, locations: [], currentLocation: null },
);