import React, { PropTypes } from 'react';
import {Button, Grid} from 'semantic-ui-react';

import {Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';
import validate from './validate';


const SignInForm = ({ handleSubmit, invalid, error, submitting, submitAction }) => {
  return (
    <Grid columns={3} centered>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <form onSubmit={handleSubmit(submitAction)}>
          {error && <div>{error}</div>}
          {submitting && <div>Signing In...</div>}
          <Field
            placeholder="Email"
            type="email"
            name="email"
            component={TextInput}
          />

          <Field
            placeholder="Password"
            type="password"
            name="password"
            component={TextInput}
          />

          <Button
            inverted color="green"
            content="Sign In"
            icon="sign in"
            labelPosition="left"
            disabled={invalid || submitting}
          />
        </form>
      </Grid.Column>
    </Grid>
  );
};

SignInForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitAction: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};


export default reduxForm({
  form: 'sign-in',
  destroyOnUnmount: false,
  validate
})(SignInForm);
