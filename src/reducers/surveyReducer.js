import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.survey, action) {
	switch(action.type) {
		case types.SAVE_HOUSE:
			return [...state, action.payload];
		case types.HOUSE_CREATED_SUCCESS:
			return Object.assign({}, state, action.survey);
		case types.FETCH_HOUSE_SUCCESS:
			return Object.assign({}, state, {survey: action.survey });
		case types.LOAD_FORM:
			return {candidates: action.data};
		default:
			return state;
	}
}

//export const load = data => ({ type: types.FETCH_CANDIDATES, data});

