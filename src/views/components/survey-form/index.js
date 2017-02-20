import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { Button, Header } from 'semantic-ui-react';

import { Field, FieldArray, reduxForm } from 'redux-form';

import TextInput from 'views/components/textinput';
import SearchInput from 'views/components/search-input';
import candidatesInput from 'views/components/candidates-input';

import validate from './validate';


const SurveyForm = ({houses, handleSubmit, invalid, pristine, error, submitting, submitAction, submitButtonText }) => {
  const housesList = houses.map((house) => {
        return {
            key: house.key,
            value: house.key,
            text: house.name,
            content: <Header content={house.name} subheader={house.district} />
        }
    });

  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>Saving...</div>}
      <Field
        placeholder="House Name"
        type="text"
        name="house"
        dropdownList={housesList}
        component={SearchInput}
      />

      <Field
        placeholder="Floor"
        type="text"
        name="floor"
        component={TextInput}
      />
      
      <Field
        placeholder="Total Voters"
        type="number"
        name="totalVoters"
        component={TextInput}
      />

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
