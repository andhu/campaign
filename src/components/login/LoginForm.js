import React from 'react';
import {Form, Button} from 'semantic-ui-react';

import {Field, reduxForm} from 'redux-form';

import renderInput from '../common/renderInput';

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
      <Field placeholder="Email" type="email" name="email" component={renderInput}/>
      <Field placeholder="Password" 
        type="password" 
        name="password"  
        component={renderInput}/>
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

/*
<form>
      <h1>Login</h1>
      <TextInput
        name="email"
        label="Email"
        onChange={onChange}
        value={user.email}
        />

      <TextInput
        name="password"
        label="Password"
        onChange={onChange}
        value={user.password}
        />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Logining in...' : 'Login'}
        className="btn btn-primary"
        onClick={onSave}/>
</form>
*/

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
