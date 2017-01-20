import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';
import TextInput from 'views/components/textinput';

import validate from './validate';

const CandidateForm = ({ handleSubmit, invalid, pristine, error, submitting, submitAction, submitButtonText }) => {
  return (
    <form onSubmit={handleSubmit(submitAction)}>
      {error && <div>{error}</div>}
      {submitting && <div>Saving...</div>}
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
        content={submitButtonText}
        icon="save"
        labelPosition="left"
        disabled={pristine || invalid || submitting}
      />
    </form>
  );
};

CandidateForm.propTypes = {
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

// function mapStateToProps(state, ownProps) {
//   const candidate = ownProps.candidate ? ownProps.candidate.toJS() : null;
//   return {
//     initialValues: candidate
//   };
// }



export default reduxForm({validate})(CandidateForm);
//CandidateForm = connect(mapStateToProps)(CandidateForm);
//export default CandidateForm;
