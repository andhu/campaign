import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { candidatesReducer } from './candidates';
import { housesReducer } from './houses';


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  routing: routerReducer,
  candidates: candidatesReducer,
  houses: housesReducer

});
