import firebase from 'firebase';

export const authActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',

  signIn: (user, resolve, reject) => ({
    type: authActions.SIGN_IN,
    user,
    resolve,
    reject
  }),

  signInFailed: error => ({
    type: authActions.SIGN_IN_FAILED,
    payload: { error }
  }),

  signInSuccess: authUser => ({
    type: authActions.SIGN_IN_SUCCESS,
    payload: authUser
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



