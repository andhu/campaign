import React from 'react';

import SurveyForm from './SurveyForm';
import checkAuth from '../requireAuth';

import {Container} from 'semantic-ui-react';

//import {saveHouse} from '../../actions/houseActions';



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
				<Container>
					<SurveyForm onSubmit={this.handleFormSubmit} />
				</Container>	
			);
	}
}




export default checkAuth(SurveyPage);