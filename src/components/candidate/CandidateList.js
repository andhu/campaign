import React, { PropTypes } from 'react';

import {Field} from 'redux-form';
import {List} from 'semantic-ui-react';

import CandidateInput from './CandidateInput';

const CandidateList = ({fields, candidates, meta: {touched, error}}) => (
	<List size="medium">
		{error && touched && <span>{error}</span>}
		{fields.map((candidate, index) => 
			<List.Item key={index}>
				<Field
					name={`${candidate}.votes`}
					candidate={candidates[index]}
					placeholder="Votes"
					type="number"
					component={CandidateInput} />
			</List.Item>
		)}
	</List>
);

CandidateList.propTypes = {
	fields: PropTypes.object.isRequired,
	meta : PropTypes.object.isRequired,
	candidates: PropTypes.arrayOf(PropTypes.object)
};

export default CandidateList;