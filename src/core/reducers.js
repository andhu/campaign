import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { candidatesReducer, candidateActions } from './candidates';
import { surveysReducer, surveyActions } from './surveys';
import { housesReducer, houseActions } from './houses';


export default combineReducers({
  auth: authReducer,
  form: formReducer.plugin({
    'candidate-add': (state, action) => {
      switch (action.type) {
        case candidateActions.CREATE_CANDIDATE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    'survey-add': (state, action) => {
      switch (action.type) {
        case surveyActions.CREATE_SURVEY_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    'house-add': (state, action) => {
      switch (action.type) {
        case houseActions.CREATE_HOUSE_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  }),
  routing: routerReducer,
  candidates: candidatesReducer,
  surveys: surveysReducer,
  houses: housesReducer

});
