import {combineReducers} from 'redux';
import user from './userReducer';
import routesPermissions from './routesPermissionsReducer';
import auth from './authReducer';
import survey from './surveyReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  routing,
  routesPermissions,
  user,
  auth,
  ajaxCallsInProgress,
  survey,
  form: formReducer
});

export default rootReducer;
