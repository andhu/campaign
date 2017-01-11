import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import renderInput from '../common/renderInput';

import {saveHouse} from '../../actions/houseActions';

const validate = values => {
	const errors = {};
	if(!values.houseName) {
		errors.houseName = 'Required';
	}
	if(!values.floor) {
		errors.floor = 'Required';
	}
	if(!values.date) {
		errors.date = 'Required';
	}
	if(!values.total) {
		errors.total = 'Required';
	}
	if(!values.mdp) {
		errors.mdp = 'Required';
	}
	if(!values.ppm) {
		errors.ppm = 'Required';
	}
	if(!values.jp) {
		errors.jp = 'Required';
	}
	if(!values.adl) {
		errors.adl = 'Required';
	}
	if(!values.agentName) {
		errors.agentName = 'Required';
	}
	if(!values.contact) {
		errors.contact = 'Required';
	}
	return errors;
};

let HouseForm = ({ handleSubmit, invalid, submitting }) =>
		<form onSubmit={handleSubmit(saveHouse)}>
			<div className="form-group">
				<Field name="houseName" placeholder="House Name" component={renderInput} />
			<div>
				<label>Floor</label>
				<Field className="form-control" name="floor" component="select">
					<option></option>
					<option value="G">G</option>
					<option value="1">1</option>
					<option value="2">2</option>
				</Field>
			</div>
			<div>
				<label>Date</label>
				<Field className="form-control" name="date" component="input" type="date" />
			</div>
			<div>
				<label htmlFor="total">Total</label>
				<Field className="form-control" name="total" component="input" type="number" />
			</div>
			<h5>Parties</h5>
			<div>
				<label>MDP</label>
				<Field className="form-control" name="mdp" component="input" type="number" min="0" max="10" />
			</div>
			<div>
				<label>PPM</label>
				<Field className="form-control" name="ppm" component="input" type="number" min="0" max="10" />
			</div>
			<div>
				<label>JP</label>
				<Field className="form-control" name="jp" component="input" type="number" min="0" max="10" />
			</div>
			<div>
				<label>ADL</label>
				<Field className="form-control" name="adl" component="input" type="number" min="0" max="10" />
			</div>
			
				
			<Field name="agentName" component={renderInput} placeholder="Agents Name" />
			
			
				
			<Field name="contact" component={renderInput} placeholder="Contact Number"/>
			
			<button className="btn btn-success" type="submit" disabled={invalid || submitting}>Submit</button>
			</div>
		</form>;

HouseForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	saveHouse: PropTypes.object
};

/* eslint-disable no-class-assign */

HouseForm = reduxForm({ 
	form: "d2d",
	destroyOnUnmount: false,
	validate
})(HouseForm);

export default HouseForm;

