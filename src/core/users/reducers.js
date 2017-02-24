import { List, Record } from 'immutable';
import { userActions } from './actions';

export const UsersState = new Record({
  filter: '',
  list: new List()
});

export function usersReducer(state = new UsersState(), { payload, type }) {
  switch (type) {
    case userActions.CREATE_USER_SUCCESS:
      return state.set('list', state.list.unshift(payload.newUser));

    // case surveyActions.FILTER_SURVEYS:
    //   return state.set('filter', payload.filterType || '');

    case userActions.LOAD_USERS_SUCCESS:
      return state.set('list', new List(payload.users.reverse()));

    // case surveyActions.REMOVE_SURVEY_SUCCESS:
    //   return state.set('list', state.list.filter(survey => {
    //     return survey.key !== payload.survey.key;
    //   }));

    // case surveyActions.UPDATE_SURVEY_SUCCESS:
    //   return state.set('list', state.list.map(survey => {
    //     return survey.key === payload.survey.key ? payload.survey : survey;
    //   }));

    default:
      return state;
  }
}
