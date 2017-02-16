import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SurveyAdd from 'views/components/survey-add';
import SurveyList from 'views/components/survey-list';
import { surveyActions,getVisibleSurveys } from 'core/surveys';

import {Grid, Container, Button, Icon} from 'semantic-ui-react';




const SurveysPage = ({surveys}) => {
  return (
    <Container fluid>
      <Grid columns={1} centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <SurveyAdd createSurvey={surveyActions.handleCreateSurvey()} />
        </Grid.Column>
        <Grid.Column>
          <SurveyList/>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

SurveysPage.propTypes = {
  surveys: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    surveys: getVisibleSurveys(state)
  };
};

export default connect(mapStateToProps)(SurveysPage);

