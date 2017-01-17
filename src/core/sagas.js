import { authSagas } from './auth';
import { candidateSagas } from './candidates';

export default function* sagas() {
  yield [
    ...authSagas,
    ...candidateSagas
  ];
}
