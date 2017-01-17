import React, { PropTypes } from 'react';
import {Button} from 'semantic-ui-react';

import {Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';
import { candidateActions } from 'core/candidates';

import validate from './validate';

const CandidateForm = ({ handleSubmit, invalid, error, submitting }) => {
  return (
    <form onSubmit={handleSubmit(candidateActions.handleCreateCandidate())}>
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
        content="Create"
        icon="save"
        labelPosition="left"
        disabled={invalid || submitting}
      />
    </form>
  );
};

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
