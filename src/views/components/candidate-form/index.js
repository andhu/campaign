import React, { Component, PropTypes } from 'react';
import {Button} from 'semantic-ui-react';

import {Field, reduxForm, SubmissionError } from 'redux-form';
import TextInput from 'views/components/textinput';
import { authActions } from 'core/auth';

import validate from './validate';

class CandidateForm extends Component {
  constructor() {
    super(...arguments);

    this.submit = ::this.submit;

  }

  submit(candidate, dispatch) {
    console.log(candidate, dispatch);
    // return new Promise((resolve, reject) => {
    //   dispatch(authActions.signIn(candidate, resolve, reject));
    // }).catch(error => {
    //   throw new SubmissionError(error);
    // });
  }

  render() {
    const { handleSubmit, invalid, error, submitting, createCandidate } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        {error && <div>{error}</div>}
        {submitting && <div>Saving Candidate...</div>}
        <Field
          placeholder="Name"
          type="text"
          name="name"
          component={TextInput}
        />

        <Field
          placeholder="Party"
          type="text"
          name="party"
          component={TextInput}
        />

        <Field
          placeholder="Color"
          type="text"
          name="color"
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
    );
  }
}

CandidateForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};


export default reduxForm({
  form: 'candidate',
  destroyOnUnmount: false,
  validate
})(CandidateForm);
