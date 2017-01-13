import React from 'react';

import HouseForm from './HouseForm';
import checkAuth from '../requireAuth';

//import {saveHouse} from '../../actions/houseActions';

import {Header} from 'semantic-ui-react';



class HousePage extends React.Component {
	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(formProps) {
		console.log(formProps);
	}

	render() {

		return(
			<div>
				<HouseForm onSubmit={this.handleFormSubmit} />
			</div>
			);
	}
}




export default checkAuth(HousePage);