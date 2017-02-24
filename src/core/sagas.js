import { authSagas } from './auth';
import { candidateSagas } from './candidates';
import { surveySagas } from './surveys';
import { houseSagas } from './houses';
import { userSagas } from './users';

export default function* sagas() {
  yield [
    ...userSagas,
    ...authSagas,
    ...candidateSagas,
    ...surveySagas,
    ...houseSagas
  ];
}
