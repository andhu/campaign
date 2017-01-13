import React from 'react';
import {Form, Button} from 'semantic-ui-react';

import {Field, reduxForm} from 'redux-form';

import TextInput from '../common/TextInput';

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

let LoginForm = ({handleSubmit, invalid, onSave, saving}) => {
  return (
    <Form onSubmit={handleSubmit(onSave)}>
      <Field placeholder="Email" type="email" name="email" component={TextInput}/>
      <Field placeholder="Password" 
        type="password" 
        name="password"  
        component={TextInput}/>
      <Button 
        inverted color="green" 
        content="Sign In" 
        icon="sign in" 
        labelPosition="left" 
        disabled={invalid || saving}
        loading={saving} />
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  invalid: React.PropTypes.bool.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  saving: React.PropTypes.bool.isRequired
  //user: React.PropTypes.object.isRequired,
  //onChange: React.PropTypes.func.isRequired
};

LoginForm = reduxForm({
  form: "login",
  destroyOnUnmount: false,
  validate
})(LoginForm);

export default LoginForm;
