import { authSagas } from './auth';
// import { surveySagas } from './survey';

export default function* sagas() {
  yield [
    ...authSagas
  ];
};