import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

import { Field, FieldArray, reduxForm } from 'redux-form';

import TextInput from 'views/components/textinput';
import candidatesInput from 'views/components/candidates-input';

import validate from './validate';

const SurveyForm = ({ handleSubmit, invalid, pristine, error, submitting, submitAction, submitButtonText }) => {
  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>Saving...</div>}
      <Field
        placeholder="House Name"
        type="text"
        name="house"
        component={TextInput}
      />

      <Field
        placeholder="Floor"
        type="text"
        name="floor"
        component={TextInput}
      />

      <Field
        placeholder="Date"
        type="text"
        name="date"
        component={TextInput}
      />

      <Field
        placeholder="Total Voters"
        type="number"
        name="totalVoters"
        component={TextInput}
      />

      <FieldArray name="candidates" component={candidatesInput} />

      <Field
        placeholder="Agent Name"
        type="text"
        name="agent"
        component={TextInput}
      />

      <Field
        placeholder="Contact Number"
        type="text"
        name="contact"
        component={TextInput}
      />

      <Button
        inverted color="green"
        content={submitButtonText}
        icon="save"
        labelPosition="left"
        disabled={pristine || invalid || submitting}
      />
    </form>
  );
};

SurveyForm.propTypes = {
  error: PropTypes.string,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.object,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitAction: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  validate
})(SurveyForm);
