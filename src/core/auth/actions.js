import { onSubmitActions } from 'redux-form-submit-saga';


export const authActions = {

  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',


  signIn: () => onSubmitActions(
    authActions.SIGN_IN,
    authActions.SIGN_IN_SUCCESS,
    authActions.SIGN_IN_FAILURE
  ),

  signInFailed: error => ({
    type: authActions.SIGN_IN_FAILURE,
    payload: { _error: error.message }
  }),

  signInSuccess: authUser => ({
    type: authActions.SIGN_IN_SUCCESS,
    payload: authUser
  }),

  signOut: () => ({
    type: authActions.SIGN_OUT
  }),

  signOutFailed: error => ({
    type: authActions.SIGN_OUT_FAILURE,
    payload: { error }
  }),

  signOutSuccess: () => ({
    type: authActions.SIGN_OUT_SUCCESS
  })
};



