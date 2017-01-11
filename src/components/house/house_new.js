import React from 'react';
import HouseForm from './house_form';
import checkAuth from '../requireAuth';

class HouseNew extends React.Component {
	render() {

		return(
			<div>
				D2D Page
				<HouseForm />
			</div>
			);
	}
}

export default checkAuth(HouseNew);