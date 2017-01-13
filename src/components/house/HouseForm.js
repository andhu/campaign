import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DateInput from '../common/DateInput';
import CandidateList from '../candidate/CandidateList';
import {Form, Button, Dropdown, Label} from 'semantic-ui-react';

import {HouseList, FloorList} from '../common/HouseList';
import {loadFormData} from '../../actions/surveyActions';



import validate from './validate';

import moment from 'moment';

const survey = {
		floor: "G",
		date: moment(),
		candidates: [
			{
				name: "Ahmed Samih",
				party: "HBP",
				color: "yellow"
			},
			{
				name: "Naail Nasih",
				party: "BHP",
				"color": "green"
			},
			{
				name: "Imma Bro",
				party: "COK",
				color: "blue"
			}
		]
};

const FloorInput = ({placeholder, input, meta, options, search, selection, inline}) => {
	const handleOnChange = (e, data) => {
    input.onChange(data.value);
  };

  const handleOnBlur = (e, data) => {
    input.onBlur(data.value);
  };

  return(
  <Form.Field error={meta.error && meta.touched}>
  	<Label>{placeholder}</Label>
	    <Dropdown
	      placeholder={placeholder}
	      {...input}
	      onChange={handleOnChange}
	      onBlur={handleOnBlur}
	      options={options}
	      search={search}
	      inline={inline}
	      selection={selection}
	     />
  </Form.Field>
    
  );
};

class HouseForm extends Component {
	componentWillReceiveProps() {
		this.props.loadFormData(survey);
	}

	render() {
			const { handleSubmit, onSubmit, invalid, pristine, reset, candidates} = this.props;
		return(
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group inline>
					<Field name="houseName" 
						placeholder="Select a House" 
						component={SelectInput}
						options={HouseList}
						search
						selection />

					<Field name="floor" 
						placeholder="Floor"
						component={FloorInput} 
						options={FloorList} />
				</Form.Group>
				<Form.Group width="equal">
					<Field name="date"
						placeholder="Date"
						component={DateInput} />

					<Field name="total" label="Total" placeholder="No. of Poeople" component={TextInput} type="number" />
				</Form.Group>

				<FieldArray name="candidates" component={CandidateList} candidates={candidates} />
				<Form.Group>
					<Field name="agentName" label="Agent" component={TextInput} placeholder="Name" />
					<Field name="contact" label="Contact" component={TextInput} placeholder="Number"/>
				</Form.Group>
				
				<Button.Group>
					<Button negative disabled={pristine} onClick={reset}>Reset</Button>
					<Button.Or />
					<Button disabled={invalid} type="submit" positive>Submit</Button>
				</Button.Group>
			</Form>
		);
	}
}
		

HouseForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	invalid : PropTypes.bool.isRequired,
	pristine : PropTypes.bool.isRequired,
	reset : PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	loadFormData: PropTypes.func.isRequired,
	candidates: PropTypes.array
};

/* eslint-disable no-class-assign */

function mapStateToProps(state) {
    const candidates = selector(state, 'candidates');
	return {
		candidates, 
		initialValues: state.survey.candidates
	};
}

HouseForm = reduxForm({ 
	form: "d2d",
	destroyOnUnmount: false,
	validate
})(HouseForm);

const selector = formValueSelector('d2d'); // <-- same as form name
HouseForm = connect(mapStateToProps, {loadFormData})(HouseForm);

export default HouseForm;
