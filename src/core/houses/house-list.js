import { FirebaseList } from 'core/firebase';
import { houseActions } from './actions';
import { House } from './house';

export const houseList = new FirebaseList({
  onAdd: houseActions.createHouseSuccess,
  onChange: houseActions.updateHouseSuccess,
  onLoad: houseActions.loadHousesSuccess,
  onRemove: houseActions.removeHouseSuccess
}, House);
