import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { Button, Header, DropDown } from 'semantic-ui-react';

import { Field, FieldArray, reduxForm } from 'redux-form';

import TextInput from 'views/components/textinput';
import SearchInput from 'views/components/search-input';
import candidatesInput from 'views/components/candidates-input';

import validate from './validate';


const SurveyForm = ({houses, handleSubmit, invalid, pristine, error, submitting, submitAction, submitButtonText }) => {
  const houseOptions = houses.map( house => {
    return {
      key: house.key,
      value: house.key,
      text: house.name
    };
  });

  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>Saving...</div>}
      <h5>House Name</h5>
      <Field
        placeholder="House Name"
        type="text"
        name="house"
        options={houseOptions}
        component={SearchInput}
      />
      <h5>Floor</h5>
      <Field
        placeholder="Floor"
        type="text"
        name="floor"
        component={TextInput}
      />
      <h5>Total Voters</h5>
      <Field
        placeholder="Total Voters"
        type="number"
        name="totalVoters"
        component={TextInput}
      />

      <h5>Agent Name</h5>
      <Field
        placeholder="Agent Name"
        type="text"
        name="agent"
        component={TextInput}
      />
      <h5>Contact Number</h5>
      <Field
        placeholder="Contact Number"
        type="text"
        name="contact"
        component={TextInput}
      />

      <FieldArray name="candidates" component={candidatesInput} />

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
  houses: PropTypes.array.isRequired,
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
