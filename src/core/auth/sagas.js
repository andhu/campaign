/* eslint-disable no-constant-condition */
import { browserHistory as history } from 'react-router';
import { call, put, fork, take } from 'redux-saga/effects';
import { authActions } from './actions';
import { firebaseAuth } from 'core/firebase';

function* signIn({email, password}) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password);
    yield put(authActions.signInSuccess(authData));
    yield history.push('/');
  }
  catch (error) {
    yield put(authActions.signInFailed(error));
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

function* createUser({ email, password}) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
    yield put(authActions.createUserSuccess(authData));
  }
  catch (error) {
    yield put(authActions.createUserFailed(error));
  }
}



//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN);
    yield fork(signIn, payload);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT);
    yield fork(signOut);
  }
}

function* watchCreateUser() {
  while (true) {
    let { payload } = yield take(authActions.CREATE_USER);
    yield fork(createUser, payload);
  }
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut),
  fork(watchCreateUser)
];
