import React, { PropTypes } from 'react';
import {Button} from 'semantic-ui-react';

import {Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';
import { houseActions } from 'core/houses';

import validate from './validate';

const HouseForm = ({ handleSubmit, invalid, error, submitting }) => {
  return (
    <form onSubmit={handleSubmit(houseActions.handleCreateHouse())}>
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
        content="Create"
        icon="save"
        labelPosition="left"
        disabled={invalid || submitting}
      />
    </form>
  );
};

HouseForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};


export default reduxForm({
  form: 'house',
  destroyOnUnmount: false,
  validate
})(HouseForm);
