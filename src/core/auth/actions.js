import { onSubmitActions } from 'redux-form-submit-saga';


export const authActions = {

  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',

  signIn: () => onSubmitActions(
    authActions.SIGN_IN,
    authActions.SIGN_IN_SUCCESS,
    authActions.SIGN_IN_FAILED
  ),

  signInFailed: error => ({
    type: authActions.SIGN_IN_FAILED,
    payload: { _error: error.message }
  }),

  signInSuccess: authUser => ({
    type: authActions.SIGN_IN_SUCCESS,
    payload: { authUser }
  }),

  signOut: () => ({
    type: authActions.SIGN_OUT
  }),

  signOutFailed: error => ({
    type: authActions.SIGN_OUT_FAILED,
    payload: { error }
  }),

  signOutSuccess: () => ({
    type: authActions.SIGN_OUT_SUCCESS
  })
};



