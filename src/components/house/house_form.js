import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class HouseForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="houseName">House Name</label>
					<Field name="houseName" component="select" type="text"> 
						<option></option>
						<option value="house1">House 1</option>
						<option value="house2">House 2</option>
						<option value="house3">House 3</option>
					</Field>
				</div>
				<div>
					<label htmlFor="floor">Floor</label>
					<Field name="floor" component="select" type="text">
						<option value="G">G</option>
						<option value="1">1</option>
						<option value="2">2</option>
					</Field>
				</div>
				<div>
					<label htmlFor="date">Date</label>
					<Field name="date" component="input" type="date" />
				</div>
				<div>
					<label htmlFor="total">Total</label>
					<Field name="total" component="input" type="number" />
				</div>
				<h5>Parties</h5>
				<div>
					<label htmlFor="mdp">MDP</label>
					<Field name="mdp" component="input" type="number" min="0" max="10" />
				</div>
				<div>
					<label htmlFor="ppm">PPM</label>
					<Field name="ppm" component="input" type="number" min="0" max="10" />
				</div>
				<div>
					<label htmlFor="jp">JP</label>
					<Field name="jp" component="input" type="number" min="0" max="10" />
				</div>
				<div>
					<label htmlFor="adl">ADL</label>
					<Field name="adl" component="input" type="number" min="0" max="10" />
				</div>
				<div>
					<label htmlFor="agentName">Agent Name</label>
					<Field name="agentName" component="input" type="text" />
				</div>
				<div>
					<label htmlFor="contact">Contact</label>
					<Field name="contact" component="input" type="text" />
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

HouseForm.propTypes = {
	handleSubmit: React.PropTypes.func.isRequired
};

/* eslint-disable no-class-assign */

HouseForm = reduxForm({ 
	form: 'd2d'
})(HouseForm);



export default HouseForm;