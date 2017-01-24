import { List, Record } from 'immutable';
import { surveyActions } from './actions';

export const SurveysState = new Record({
  filter: '',
  list: new List()
});

export function surveysReducer(state = new SurveysState(), { payload, type }) {
  switch (type) {
    case surveyActions.CREATE_SURVEY_SUCCESS:
      return state.set('list', state.list.unshift(payload.survey));

    case surveyActions.FILTER_SURVEYS:
      return state.set('filter', payload.filterType || '');

    case surveyActions.LOAD_SURVEYS_SUCCESS:
      return state.set('list', new List(payload.surveys.reverse()));

    case surveyActions.REMOVE_SURVEY_SUCCESS:
      return state.set('list', state.list.filter(survey => {
        return survey.key !== payload.survey.key;
      }));

    case surveyActions.UPDATE_SURVEY_SUCCESS:
      return state.set('list', state.list.map(survey => {
        return survey.key === payload.survey.key ? payload.survey : survey;
      }));

    default:
      return state;
  }
}
