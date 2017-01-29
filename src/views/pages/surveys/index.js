import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SurveyForm from 'views/components/survey-form';
import SurveyList from 'views/components/survey-list';
import { surveyActions } from 'core/surveys';
import moment from 'moment';
import {Button, Icon} from 'semantic-ui-react';


// <SurveyForm
//         initialValues={{candidates, date}}
//         submitAction={surveyActions.handleCreateSurvey()}
//         submitButtonText="Save"
//         form="survey-add"
//       />

const SurveysPage = ({candidates, surveys}) => {
  //const date = moment().format('YYYY-MM-DD');
  return (
    <div> 
      <Button floated='left' icon labelPosition='left' primary size='small'>
        <Icon name='user' /> Add Survey
      </Button>
      <SurveyList
        surveys={surveys}
      />
    </div>
  );
};

SurveysPage.propTypes = {
  candidates: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    candidates: state.candidates.list.toJS(),
    surveys: state.surveys.list.toJS()
  };
};

export default connect(mapStateToProps)(SurveysPage);

