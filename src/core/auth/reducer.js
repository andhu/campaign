import { Record } from 'immutable';
import { authActions } from './actions';

export const AuthState = new Record({
  authenticated: false,
  uid: null,
  user: null
});

export function authReducer(state = new AuthState(), {type, payload}) {
  switch (type) {
    case authActions.SIGN_IN_SUCCESS:
      return state.merge({
        authenticated: true,
        uid: payload.uid,
        user: payload
      });
    case authActions.SIGN_OUT_SUCCESS:
      return state.merge({
        authenticated: false,
        uid: null,
        user: null
      });

    default:
      return state;
  }
}

