import React, { PropTypes } from 'react';

import {Field} from 'redux-form';
import {Grid} from 'semantic-ui-react';

import CandidateInput from './CandidateInput';

const CandidateList = ({fields, candidates, meta: {touched, error}}) => (
	<Grid.Row centered columns={2}>
		{error && touched && <span>{error}</span>}
		{fields.map((candidate, index) => 
			<Grid.Column key={index}>
				<Field
					name={`${candidate}.votes`}
					candidate={candidates[index]}
					placeholder="Votes"
					type="number"
					component={CandidateInput} />
			</Grid.Column>
		)}
	</Grid.Row>
);

CandidateList.propTypes = {
	fields: PropTypes.object.isRequired,
	meta : PropTypes.object.isRequired,
	candidates: PropTypes.arrayOf(PropTypes.object)
};

export default CandidateList;