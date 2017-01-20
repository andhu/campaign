import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { candidatesReducer, candidateActions } from './candidates';


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
    }
  }),
  routing: routerReducer,
  candidates: candidatesReducer

});
