import { authSagas } from './auth';
import { candidateSagas } from './candidates';
import { surveySagas } from './surveys';
import { houseSagas } from './houses';

export default function* sagas() {
  yield [
    ...authSagas,
    ...candidateSagas,
    ...surveySagas,
    ...houseSagas
  ];
}
