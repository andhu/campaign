import { onSubmitActions } from 'redux-form-submit-saga';

export const houseActions = {
  CREATE_HOUSE: 'CREATE_HOUSE',
  CREATE_HOUSE_SUCCESS: 'CREATE_HOUSE_SUCCESS',
  CREATE_HOUSE_FAILED: 'CREATE_HOUSE_FAILED',

  REMOVE_HOUSE: 'REMOVE_HOUSE',
  REMOVE_HOUSE_FAILED: 'REMOVE_HOUSE_FAILED',
  REMOVE_HOUSE_SUCCESS: 'REMOVE_HOUSE_SUCCESS',

  UPDATE_HOUSE: 'UPDATE_HOUSE',
  UPDATE_HOUSE_FAILED: 'UPDATE_HOUSE_FAILED',
  UPDATE_HOUSE_SUCCESS: 'UPDATE_HOUSE_SUCCESS',

  FILTER_HOUSES: 'FILTER_HOUSES',
  LOAD_HOUSES_SUCCESS: 'LOAD_HOUSES_SUCCESS',

  handleCreateHouse: () => onSubmitActions(
    houseActions.createHouse,
    houseActions.CREATE_HOUSE_SUCCESS,
    houseActions.CREATE_HOUSE_FAILED,
  ),

  createHouse: house => ({
    type: houseActions.CREATE_HOUSE,
    payload: { house }
  }),

  createHouseFailed: error => ({
    type: houseActions.CREATE_HOUSE_FAILED,
    payload: { error }
  }),

  createHouseSuccess: house => ({
    type: houseActions.CREATE_HOUSE_SUCCESS,
    payload: { house }
  }),

  removeHouse: house => ({
    type: houseActions.REMOVE_HOUSE,
    payload: { house }
  }),

  removeHouseFailed: error => ({
    type: houseActions.REMOVE_HOUSE_FAILED,
    payload: { error }
  }),

  removeHouseSuccess: house => ({
    type: houseActions.REMOVE_HOUSE_SUCCESS,
    payload: { house }
  }),

  updateHouse: (house, changes) => ({
    type: houseActions.UPDATE_HOUSE,
    payload: {house, changes}
  }),

  updateHouseFailed: error => ({
    type: houseActions.UPDATE_HOUSE_FAILED,
    payload: { error }
  }),

  updateHouseSuccess: house => ({
    type: houseActions.UPDATE_HOUSE_SUCCESS,
    payload: house
  }),

  filterHouses: filterType => ({
    type: houseActions.FILTER_HOUSES,
    payload: { filterType }
  }),

  loadHousesSuccess: houses => ({
    type: houseActions.LOAD_HOUSES_SUCCESS,
    payload: { houses }
  })
};
