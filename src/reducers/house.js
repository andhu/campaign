import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.house, action) {
	switch(action.type) {
		case types.SAVE_HOUSE:
			return [...state, action.payload];
		case types.HOUSE_CREATED_SUCCESS:
			return Object.assign({}, state, action.house);
		case types.FETCH_HOUSE_SUCCESS:
			return Object.assign({}, state, {house: action.house });
		default:
			return state;
	}
}