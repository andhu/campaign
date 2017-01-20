import { List, Record } from 'immutable';
import { candidateActions } from './actions';

export const CandidatesState = new Record({
  filter: '',
  list: new List()
});

export function candidatesReducer(state = new CandidatesState(), { payload, type }) {
  switch (type) {
    case candidateActions.CREATE_CANDIDATE_SUCCESS:
      return state.set('list', state.list.unshift(payload.candidate));

    case candidateActions.FILTER_CANDIDATES:
      return state.set('filter', payload.filterType || '');

    case candidateActions.LOAD_CANDIDATES_SUCCESS:
      return state.set('list', new List(payload.candidates.reverse()));

    case candidateActions.REMOVE_CANDIDATE_SUCCESS:
      return state.set('list', state.list.filter(candidate => {
        return candidate.key !== payload.candidate.key;
      }));

    case candidateActions.UPDATE_CANDIDATE_SUCCESS:
      console.log(payload);
      return state.set('list', state.list.map(candidate => {
        return candidate.key === payload.candidate.key ? payload.candidate : candidate;
      }));

    default:
      return state;
  }
}
