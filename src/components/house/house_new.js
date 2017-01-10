import React from 'react';
import HouseForm from './house_form';
//import {Link} from 'react-router';

class HouseNew extends React.Component {
	constructor(props, context) {
		super(props, context);

			this.state = {
				house: {
					number: "",
					floor: 0,
					date: "",
					total: 0,
					parties: {
						jp: 0,
						mdp: 0,
						ppm: 0,
						adl: 0,
						no: 0,
						maybe: 0,
						nulaa: 0
					},
					agent_name: "",
					contact: ""
				},
				saving: false
			};
	}

	componentWillMount() {

	}

	/* eslint-disable no-console */

	handleSubmit = (values) => {
		console.log(values);
	}

	render() {

		return(
			<div>
				D2D Page
				<HouseForm onSubmit={this.handleSubmit} />
			</div>
			);
	}
}

export default HouseNew;