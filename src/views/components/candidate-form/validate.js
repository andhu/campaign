const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.party) {
    errors.party = 'Required';
  }
  if (!values.color) {
    errors.color = 'Required';
  }
  return errors;
};

export default validate;
