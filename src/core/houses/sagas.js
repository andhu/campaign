/* eslint-disable no-constant-condition */
import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'core/auth';
import { houseActions } from './actions';
import { houseList } from './house-list';

function subscribe() {
  return eventChannel(emit => houseList.subscribe(emit));
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

const createHouse = write.bind(null, houseList, houseList.push, houseActions.createHouseFailed);
const removeHouse = write.bind(null, houseList, houseList.remove, houseActions.removeHouseFailed);
const updateHouse = write.bind(null, houseList, houseList.update, houseActions.updateHouseFailed);

// Watchers

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_SUCCESS);
    houseList.path = `houses`;
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_SUCCESS]);
    cancel(job);
  }
}

function* watchCreateHouse() {
  while (true) {
    let { payload } = yield take(houseActions.CREATE_HOUSE);
    yield fork(createHouse, payload.house);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/houses') {
      yield put(houseActions.filterHouses(payload.query.filter));
    }
  }
}

function* watchRemoveHouse() {
  while (true) {
    let { payload } = yield take(houseActions.REMOVE_HOUSE);
    yield fork(removeHouse, payload.house.key);
  }
}

function* watchUpdateHouse() {
  while (true) {
    let { payload } = yield take(houseActions.UPDATE_HOUSE);
    yield fork(updateHouse, payload.house.key, payload.changes);
  }
}


// House Sagas

export const houseSagas = [
  fork(watchAuthentication),
  fork(watchCreateHouse),
  fork(watchLocationChange),
  fork(watchRemoveHouse),
  fork(watchUpdateHouse)
];
