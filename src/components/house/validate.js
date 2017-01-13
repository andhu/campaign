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


	if(!values.candidates || !values.candidates.length) {
		errors.candidates = { _error: "At least one candidate should be there"};
	} else {
		const candidateArrayErrors = [];
		values.candidates.forEach((candidate, index) => {
			const candidateErrors = {};
			if(!candidate || !candidate.name) {
				candidateErrors.name = 'Required';
				candidateArrayErrors[index] = candidateErrors;
			}
			if(!candidate || !candidate.party) {
				candidateErrors.party = 'Required';
				candidateArrayErrors[index] = candidateErrors;
			}
			if(!candidate || !candidate.votes) {
				candidateErrors.votes = 'Required';
				candidateArrayErrors[index] = candidateErrors;
			}
		});
		if(candidateArrayErrors.length) {
			errors.candidates = candidateArrayErrors;
		}
	}

	if(!values.agentName) {
		errors.agentName = 'Required';
	}
	if(!values.contact) {
		errors.contact = 'Required';
	}
	return errors;
};

export default validate;