import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SurveyForm from 'views/components/survey-form';
import { surveyActions } from 'core/surveys';
import moment from 'moment';

const SurveysPage = ({candidates}) => {
  const date = moment().format('YYYY-MM-DD');
  return (
    <div>
      <SurveyForm
        initialValues={{candidates, date}}
        submitAction={surveyActions.handleCreateSurvey()}
        submitButtonText="Save"
        form="survey-add"
      />
    </div>
  );
};

SurveysPage.propTypes = {
  candidates: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    candidates: state.candidates.list.toJS()
  };
};

export default connect(mapStateToProps)(SurveysPage);

