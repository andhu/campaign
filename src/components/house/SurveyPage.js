import React from 'react';

import SurveyForm from './SurveyForm';
import checkAuth from '../requireAuth';

//import {saveHouse} from '../../actions/houseActions';

import {Header} from 'semantic-ui-react';



class SurveyPage extends React.Component {
	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(formProps) {
		console.log(formProps);
	}

	render() {

		return(
				<SurveyForm onSubmit={this.handleFormSubmit} />
			);
	}
}




export default checkAuth(SurveyPage);