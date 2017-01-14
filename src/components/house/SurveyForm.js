import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DateInput from '../common/DateInput';
import CandidateList from '../candidate/CandidateList';
import {Form, Button, Dropdown, Label, Grid, Container} from 'semantic-ui-react';

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
			},
			{
				name: "Ciman Tay",
				party: "AGL",
				color: "purple"
			},
			{
				name: "Burma Stone Sim",
				party: "JPM",
				color: "red"
			},
			{
				name: "Sand King",
				party: "Dota",
				color: "brown"
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

class SurveyForm extends Component {
	componentWillReceiveProps() {
		this.props.loadFormData(survey);
	}

	render() {
			const { handleSubmit, onSubmit, invalid, pristine, reset, candidates} = this.props;
		return(
			<Container>
			<Form as={Grid} centered columns={3} onSubmit={handleSubmit(onSubmit)}>
				<Grid.Row>
					<Grid.Column>
							<Field name="houseName" 
						placeholder="Select a House" 
						component={SelectInput}
						options={HouseList}
						search
						selection />
					</Grid.Column>	
					<Grid.Column>
						<Field name="floor" 
						placeholder="Floor"
						component={FloorInput} 
						options={FloorList} />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Field name="date"
						placeholder="Date"
						component={DateInput} />
					</Grid.Column>
					<Grid.Column>
						<Field name="total" label="Total" 
						placeholder="No. of Poeople" 
						component={TextInput} 
						type="number" />
					</Grid.Column>
				</Grid.Row>

				<FieldArray name="candidates" component={CandidateList} candidates={candidates} />

				<Grid.Row>
					<Grid.Column>
						<Field name="agentName" label="Agent" component={TextInput} placeholder="Name" />
					</Grid.Column>
					<Grid.Column>
						<Field name="contact" label="Contact" component={TextInput} placeholder="Number"/>
					</Grid.Column>
				</Grid.Row>
				
				<Grid.Row>
					<Grid.Column>
						<Button.Group>
							<Button negative disabled={pristine} onClick={reset}>Reset</Button>
							<Button.Or />
							<Button disabled={invalid} type="submit" positive>Submit</Button>
						</Button.Group>
					</Grid.Column>
				</Grid.Row>
			</Form>
			</Container>
		);
	}
}
		

SurveyForm.propTypes = {
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

SurveyForm = reduxForm({ 
	form: "d2d",
	destroyOnUnmount: false,
	validate
})(SurveyForm);

const selector = formValueSelector('d2d'); // <-- same as form name
SurveyForm = connect(mapStateToProps, {loadFormData})(SurveyForm);

export default SurveyForm;
