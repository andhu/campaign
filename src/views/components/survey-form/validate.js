const validate = values => {
  const errors = {};
  if (!values.houseName) {
    errors.houseName = 'Required';
  }
  if (!values.floor) {
    errors.floor = 'Required';
  }
  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.agent) {
    errors.agent = 'Required';
  }

  if (!values.contact) {
    errors.contact = 'Required';
  }

  if (!values.candidates || !values.candidates.length) {
    errors.candidates = { _error: 'At least one candidate must be there' };
  }
  else {
    const candidatesArrayErrors = [];
    values.candidates.forEach((candidate, candidateIndex) => {
      const candidateErrors = {};
      if (!candidate || !candidate.votes) {
        candidateErrors.votes = 'Required';
        candidatesArrayErrors[candidateIndex] = candidateErrors;
      }
      return candidateErrors;
    });

    if (candidatesArrayErrors.length) {
      errors.candidates = candidatesArrayErrors;
    }
  }
  return errors;
};

export default validate;
