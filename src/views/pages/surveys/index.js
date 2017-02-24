import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SurveyAdd from 'views/components/survey-add';
import SurveyList from 'views/components/survey-list';
import { surveyActions ,getVisibleSurveys } from 'core/surveys';
import { getVisibleHouses } from 'core/houses';

import {Grid, Container, Button, Icon} from 'semantic-ui-react';




const SurveysPage = ({surveys, houses}) => {
  return (
    <Container fluid>
      <Grid columns={1} centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <SurveyAdd createSurvey={surveyActions.handleCreateSurvey()} />
        </Grid.Column>
        <Grid.Column>
          <SurveyList surveys={surveys} houses={houses} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

SurveysPage.propTypes = {
  surveys: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    surveys: getVisibleSurveys(state).toJS(),
    houses: getVisibleHouses(state).toJS()
  };
};

export default connect(mapStateToProps)(SurveysPage);

