import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

import {authLoggedIn} from './authActions';

function extractHouseProperties(firebaseHouse) {
	const house = {};
	const houseProperties = [
		'uid',
		'number',
		'floor',
		'date',
		'total_voters',
		'parties',
		'agent_name',
		'contact'
	];

	houseProperties.map((prop) => {
		if (prop in firebaseHouse) {
			house[prop] = firebaseHouse[prop];
		}
	});

	return house;
}

export function saveHouse(house) {
	console.log("house is: ", house);
	return (dispatch) => {
		console.log("saving house");
	};
}


export function houseCreated(house){
	return (dispatch) => {
		firebaseApi.databasePush('/houses/' + house.uid, extractHouseProperties(house))
			.then(
				() => {
					dispatch(authLoggedIn(house.uid));
					dispatch(houseCreatedSuccess());
				}
			);
	};
}

export function houseCreatedSuccess() {
	return { type: types.HOUSE_CREATED_SUCCESS };
}
