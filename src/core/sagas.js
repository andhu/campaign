import { authSagas } from './auth';
import { candidateSagas } from './candidates';
import { houseSagas} from './houses';
 
export default function* sagas() {
  yield [
    ...authSagas,
    ...candidateSagas,
    ...houseSagas
  ];
}
