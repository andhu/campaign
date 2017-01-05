import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function houseReducer(state = initialState.house, action) {
	switch(action.type) {
		case types.HOUSE_CREATED_SUCCESS:
			return Object.assign({}, state, action.house);
		case types.FETCH_HOUSE:
			return { ...state, house: action.house};
		default:
			return state;
	}
}