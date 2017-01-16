import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  routing: routerReducer
  
});
