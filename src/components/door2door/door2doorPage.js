import React from 'react';
import Door2DoorForm from './door2doorForm';
//import {Link} from 'react-router';

class Door2DoorPage extends React.Component {
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
				<Door2DoorForm onSubmit={this.handleSubmit} />
			</div>
			);
	}
}

export default Door2DoorPage;