import React, { PropTypes } from 'react';
import {Button} from 'semantic-ui-react';

import {Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';
import { houseActions } from 'core/houses';

import validate from './validate';

const HouseForm = ({ handleSubmit, invalid, pristine, error, submitting, submitAction, submitButtonText }) => {
  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>Saving House...</div>}
      <Field
        placeholder="Name"
        type="text"
        name="name"
        component={TextInput}
      />

      <Field
        placeholder="District"
        type="text"
        name="district"
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

HouseForm.propTypes = {
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


export default reduxForm({validate})(HouseForm);
