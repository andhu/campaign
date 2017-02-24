import { FirebaseList } from 'core/firebase';
import { userActions } from './actions';
import { User } from './user';

export const UserList = new FirebaseList({
  onAdd: userActions.createUserSuccess,
  onChange: userActions.updateUserSuccess,
  onLoad: userActions.loadUsersSuccess,
  onRemove: userActions.removeUserSuccess
}, User);
