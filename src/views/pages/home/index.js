import React from 'react';
import {Header, Grid, Container, Card, Icon, Cell } from 'semantic-ui-react';
import { Link } from 'react-router';
import SurveyDone from'views/components/chart-survey-done';
import HouseLeft from'views/components/chart-houses-left';

import SurveyList from 'views/components/survey-list';

const HomePage = () => {
  return (
    <Container fluid>
      <Grid columns={3} centered celled>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
          
          <Card raised centered color="purple" fluid>
            <Card.Content header='Surveys Completed' />
            <Card.Content>
              <SurveyDone/>
            </Card.Content>
            <Card.Content extra>
            <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
           <Card raised centered color="purple" fluid>
            <Card.Content header='Houses Left' />
            <Card.Content>
              <HouseLeft/>
            </Card.Content>
            <Card.Content extra>
              <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card raised centered color="purple" fluid>
            <Card.Content header='Surveys Completed' />
            <Card.Content>
              <SurveyDone/>
            </Card.Content>
            <Card.Content extra>
            <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column  mobile={16} tablet={16} computer={8}>
            <SurveyList/>
          </Grid.Column>
           <Grid.Column  mobile={16} tablet={16} computer={8}>
            <SurveyList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} centered padded>
        
      </Grid>
      </Container>
  );
};

export default HomePage;
