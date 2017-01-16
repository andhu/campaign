import isEmail from 'sane-email-validation';

const validate = values => {
  const errors = {};
  if(!values.email) {
    errors.email = "Required";
  } else if (!isEmail(values.email)){
    errors.email = "Inavlid Email";
  }
  if(!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export default validate;