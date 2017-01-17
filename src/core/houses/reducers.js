import { List, Record } from 'immutable';
import { houseActions } from './actions';

export const HousesState = new Record({
  filter: '',
  list: new List()
});

export function housesReducer(state = new HousesState(), { payload, type }) {
  switch (type) {
    case houseActions.CREATE_HOUSE_SUCCESS:
      return state.set('list', state.list.unshift(payload.house));

    case houseActions.FILTER_HOUSES:
      return state.set('filter', payload.filterType || '');

    case houseActions.LOAD_HOUSES_SUCCESS:
      return state.set('list', new List(payload.houses.reverse()));

    case houseActions.REMOVE_HOUSE_SUCCESS:
      return state.set('list', state.list.filter(house => {
        return house.key !== payload.house.key;
      }));

    case houseActions.UPDATE_HOUSE_SUCCESS:
      return state.set('list', state.list.map(house => {
        return house.key === payload.house.key ? payload.house : house;
      }));

    default:
      return state;
  }
}
