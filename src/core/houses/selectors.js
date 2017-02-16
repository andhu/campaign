import { createSelector } from 'reselect';

export function getHouses(state) {
  return state.houses;
}

export function getHouseFilter(state) {
  return getHouses(state).filter;
}

export function getHouseList(state) {
  return getHouses(state).list;
}

export const getVisibleHouses = createSelector(
  getHouseFilter,
  getHouseList,
  (filter, houseList) => {
    switch (filter) {
      default:
        return houseList;
    }
  }
);

export const getHouseCount = createSelector(
  getHouseList,
  houseList => houseList.size * 5
);

