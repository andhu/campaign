/* eslint-disable no-constant-condition */
import { eventChannel } from 'redux-saga';
import { call, take, put, fork, cancel } from 'redux-saga/effects';
import { UserList } from './user-list';
import { userActions } from './actions';
import { authActions } from 'core/auth';
import { firebaseAuth } from 'core/firebase';

function subscribe() {
  return eventChannel(emit => UserList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

function* createUser({email, password}) {
  try {
    const userData = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
    yield put(userActions.createUserSuccess(userData));
  }
  catch (error) {
    yield put(userActions.createUserFailed(error));
  }
}

const createUserRDB = write.bind(null, UserList, UserList.push, userActions.createUserFailed);
const removeUser = write.bind(null, UserList.remove, userActions.removeUserFailed);
const updateUser = write.bind(null, UserList.update, userActions.updateUserSuccess);

// Watchers

function* watchAuthentication() {
  while (true) {
    UserList.path = 'users';
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_SUCCESS]);
    cancel(job);
  }
}

function* watchCreateUserSuccess() {
  while (true) {
    let { payload } = yield take(userActions.CREATE_USER_FB_SUCCESS);

    var newUser = {
      uid: payload.newUser.uid,
      name: payload.newUser.email,
      isAdmin: false
    };
    yield fork(createUserRDB, newUser);
  }
}

function* watchCreateUser() {
  while (true) {
    let { payload } = yield take(userActions.CREATE_USER);
    yield fork(createUser, payload);
  }
}

function* watchRemoveUser() {
  while (true) {
    let { payload } = yield take(userActions.UPDATE_USER);
    yield fork(removeUser, payload.user.key, payload.changes);
  }
}

function* watchUpdateUser() {
  while (true) {
    let { payload } = yield take(userActions.UPDATE_USER);
    yield fork(updateUser, payload.user.key, payload.changes);
  }
}

export const userSagas = [
  fork(watchAuthentication),
  fork(watchCreateUser),
  fork(watchCreateUserSuccess),
  fork(watchUpdateUser),
  fork(watchRemoveUser)
];

