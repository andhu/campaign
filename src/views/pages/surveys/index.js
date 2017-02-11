import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SurveyForm from 'views/components/survey-form';
import SurveyList from 'views/components/survey-list';
import { surveyActions } from 'core/surveys';
import moment from 'moment';
import {Grid, Container, Button, Icon} from 'semantic-ui-react';




const SurveysPage = ({houses, candidates, surveys}) => {
  const date = moment().format('YYYY-MM-DD');
  return (
    <Container fluid>
      <Grid columns={1} centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <SurveyForm
            initialValues={{candidates, date}}
            submitAction={surveyActions.handleCreateSurvey()}
            submitButtonText="Save"
            form="survey-add"
            houses={houses}
          />
        </Grid.Column>
        <Grid.Column>
          <SurveyList/>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

SurveysPage.propTypes = {
  candidates: PropTypes.array.isRequired,
  houses: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    houses: state.houses.list.toJS(),
    candidates: state.candidates.list.toJS(),
    surveys: state.surveys.list.toJS()
  };
};

export default connect(mapStateToProps)(SurveysPage);

