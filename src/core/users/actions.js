import { onSubmitActions } from 'redux-form-submit-saga';

export const userActions = {
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_FAILED: 'CREATE_USER_FAILED',

  CREATE_USER_FB_SUCCESS: 'CREATE_USER_FB_SUCCESS',

  REMOVE_USER: 'REMOVE_USER',
  REMOVE_USER_SUCCESS: 'REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILED: 'REMOVE_USER_FAILED',

  UPDATE_USER: 'UPDATE_USER',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILED: 'UPDATE_USER_FAILED',

  LOAD_USERS_SUCCESS: 'LOAD_USERS_SUCCESS',

  createUser: () => onSubmitActions(
    userActions.CREATE_USER,
    userActions.CREATE_USER_SUCCESS,
    userActions.CREATE_USER_FAILED
  ),

  createUserFailed: error => ({
    type: userActions.CREATE_USER_FAILED,
    payload: { _error: error.message }
  }),

  createUserSuccess: newUser => ({
    type: userActions.CREATE_USER__FB_SUCCESS,
    payload: { newUser }
  }),

  removeUser: user => ({
    type: userActions.REMOVE_USER,
    payload: { user }
  }),

  removeUserSuccess: user => ({
    type: userActions.REMOVE_USER_SUCCESS,
    paylaod: { user }
  }),

  removeUserFailed: error => ({
    type: userActions.REMOVE_USER_FAILED,
    payload: { error }
  }),

  updateUser: (user, changes) => ({
    type: userActions.UPDATE_USER,
    payload: {user, changes}
  }),

  updateUserSuccess: user => ({
    type: userActions.UPDATE_USER_SUCCESS,
    payload: { user }
  }),

  updateUserFailed: error => ({
    type: userActions.UPDATE_USER_FAILED,
    payload: { error }
  }),

  loadUsersSuccess: users => ({
    type: userActions.LOAD_USERS_SUCCESS,
    payload: { users }
  })
};
