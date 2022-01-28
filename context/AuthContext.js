import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../src/screens/api/tracker';

import {navigate} from '../src/nevigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};

    case 'signup':
      return {errorMessage: '', token: action.payload};

    case 'clear_error_message':
      return {...state, errorMessage: ''};

      case 'signout':
        return { token: null, errorMessage: ' '};

    default:
      return state;
  }
};

/*
const signup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});

      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

  */

  const tryLocalSignin = dispatch => async() => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        dispatch({ type: 'signup', payload: token});
        navigate('TrackList');
      } else {
        navigate('SignUp')
      }
  } 

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const signup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});

      navigate('TrackList');
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const signin =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signup', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };

const signout = dispatch =>  async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout'});
  navigate('SignUp');
};


export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
