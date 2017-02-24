import React, { PropTypes } from 'react';
import {Button} from 'semantic-ui-react';

import {Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';
import validate from './validate';


const UserForm = ({ handleSubmit, invalid, error, submitting, submitAction }) => {
  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>..................................</div>}
      <h3>Email</h3>
      <Field
        placeholder="Email"
        type="email"
        name="email"
        component={TextInput}
      />

      <h3>Password</h3>
      <Field
        placeholder="Password"
        type="password"
        name="password"
        component={TextInput}
      />

      <Button
        inverted color="green"
        content="Ok"
        icon="sign in"
        labelPosition="left"
        disabled={invalid || submitting}
      />
    </form>
  );
};

UserForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitAction: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};


export default reduxForm({validate})(UserForm);
