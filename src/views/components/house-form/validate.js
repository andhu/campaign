
const validate = values => {
  const errors = {};
  if(!values.name) {
    errors.name = "Required";
  }
  if(!values.district) {
    errors.district = "Required";
  }
  return errors;
};

export default validate;