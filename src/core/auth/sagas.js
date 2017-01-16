/* eslint-disable no-constant-condition */
import { browserHistory as history } from 'react-router';
import { call, put, fork, take } from 'redux-saga/effects';
import { authActions } from './actions';
import { firebaseAuth } from 'core/firebase';

function* signIn({user, resolve, reject}) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], user.email, user.password);
    yield put(authActions.signInSuccess(authData));
    yield call(resolve);
    yield history.push('/');
  }
  catch (error) {
    yield put(authActions.signInFailed(error));
    yield call(reject, {_error: error.message});
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.signOutSuccess());
    yield history.replace('/sign-in');
  }
  catch (error) {
    yield put(authActions.signOutFailed(error));
  }

}

//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  while (true) {
    let payload = yield take(authActions.SIGN_IN);
    yield fork(signIn, payload);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT);
    yield fork(signOut);
  }
}

//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];
