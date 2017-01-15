import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  form: formReducer
});

// const rootReducer = combineReducers({
//   routing,
//   routesPermissions,
//   user,
//   auth,
//   ajaxCallsInProgress,
//   survey,
//   form: formReducer
// });

// export default rootReducer;
