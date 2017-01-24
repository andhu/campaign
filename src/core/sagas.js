import { authSagas } from './auth';
import { candidateSagas } from './candidates';
import { surveySagas } from './surveys';

export default function* sagas() {
  yield [
    ...authSagas,
    ...candidateSagas,
    ...surveySagas
  ];
}
