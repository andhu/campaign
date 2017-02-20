/* eslint-disable no-constant-condition */
import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { authActions } from 'core/auth';
import { surveyActions } from './actions';
import { surveyList } from './survey-list';

function subscribe() {
  return eventChannel(emit => surveyList.subscribe(emit));
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

const createSurvey = write.bind(null, surveyList, surveyList.push, surveyActions.createSurveyFailed);
const removeSurvey = write.bind(null, surveyList, surveyList.remove, surveyActions.removeSurveyFailed);
const updateSurvey = write.bind(null, surveyList, surveyList.update, surveyActions.updateSurveyFailed);

// Watchers

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_SUCCESS);
    surveyList.path = `surveys`;
    const job = yield fork(read);

    yield take([authActions.SIGN_OUT_SUCCESS]);
    cancel(job);
  }
}

function* watchCreateSurvey() {
  while (true) {
    let { payload } = yield take(surveyActions.CREATE_SURVEY);
    yield fork(createSurvey, payload.survey);
  }
}

function* watchLocationChange() {
  while (true) {
    let { payload } = yield take(LOCATION_CHANGE);
    if (payload.pathname === '/surveys') {
      yield put(surveyActions.filterSurveys(payload.query.filter));
    }
  }
}

function* watchRemoveSurvey() {
  while (true) {
    let { payload } = yield take(surveyActions.REMOVE_SURVEY);
    yield fork(removeSurvey, payload.survey.key);
  }
}

function* watchUpdateSurvey() {
  while (true) {
    let { payload } = yield take(surveyActions.UPDATE_SURVEY);
    yield fork(updateSurvey, payload.survey.key, payload.changes);
  }
}


// Sagas

export const surveySagas = [
  fork(watchAuthentication),
  fork(watchCreateSurvey),
  fork(watchLocationChange),
  fork(watchRemoveSurvey),
  fork(watchUpdateSurvey)
];
