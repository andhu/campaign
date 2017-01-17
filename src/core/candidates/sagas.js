/* eslint-disable no-constant-condition */
import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'core/auth';
import { candidateActions } from './actions';
import { candidateList } from './candidate-list';

function subscribe() {
  return eventChannel(emit => candidateList.subscribe(emit));
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

const createCandidate = write.bind(null, candidateList, candidateList.push, candidateActions.createCandidateFailed);
const removeCandidate = write.bind(null, candidateList, candidateList.remove, candidateActions.removeCandidateFailed);
const updateCandidate = write.bind(null, candidateList, candidateList.update, candidateActions.updateCandidateFailed);

// Watchers

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_SUCCESS);
    candidateList.path = `candidates/${payload.authUser.uid}`;
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_SUCCESS]);
    cancel(job);
  }
}

function* watchCreateCandidate() {
  while (true) {
    let { payload } = yield take(candidateActions.CREATE_CANDIDATE);
    yield fork(createCandidate, payload.candidate);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/candidates') {
      yield put(candidateActions.filterCandidates(payload.query.filter));
    }
  }
}

function* watchRemoveCandidate() {
  while (true) {
    let { payload } = yield take(candidateActions.REMOVE_CANDIDATE);
    yield fork(removeCandidate, payload.candidate.key);
  }
}

function* watchUpdateCandidate() {
  while (true) {
    let { payload } = yield take(candidateActions.UPDATE_CANDIDATE);
    yield fork(updateCandidate, payload.candidate.key, payload.changes);
  }
}


// Candidate Sagas

export const candidateSagas = [
  fork(watchAuthentication),
  fork(watchCreateCandidate),
  fork(watchLocationChange),
  fork(watchRemoveCandidate),
  fork(watchUpdateCandidate)
];
