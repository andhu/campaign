import React from 'react';
import {Link} from 'react-router';

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

	render() {

		return(
			<div>D2D Page</div>
			);
	}
}

function mapStateToProps(state) {
	return { houses: state.houses.all };
}

export default Door2DoorPage;