import React, { PropTypes } from 'react';
import {Form, Input, Label} from 'semantic-ui-react';


const CandidateInput = ({input, candidate, placeholder, type, meta:{error, touched}}) => (
	<Form.Field error={error && touched}>
		<Label color={candidate.color}>
			{candidate.name}
			<Label.Detail>{candidate.party}</Label.Detail>
		</Label>
		<Input size="mini" type={type} placeholder={placeholder} {...input} />
	</Form.Field>
);

CandidateInput.propTypes = {
	input: PropTypes.object.isRequired,
	meta : PropTypes.object.isRequired,
	candidate: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

export default CandidateInput;