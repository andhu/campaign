import React from 'react';
import {Header, Divider, Grid, Container, Card, Icon, Cell } from 'semantic-ui-react';
import { Link } from 'react-router';
import SurveyDone from'views/components/chart-survey-done';
import HouseLeft from'views/components/chart-houses-left';

import SurveyList from 'views/components/survey-list';

const HomePage = () => {
  return (
    <Container fluid>
      <Grid columns={3} centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
          
          <Card raised centered color="green" fluid>
            <Card.Content>
              <Card.Header>
                <Header as='h3' color='green'>Surveys Completed</Header>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <SurveyDone/>
            </Card.Content>
            <Card.Content extra>
            <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
           <Card raised centered color="blue" fluid>
            <Card.Content>
              <Card.Header>
                <Header as='h3' color='blue'>Houses Left</Header>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <HouseLeft/>
            </Card.Content>
            <Card.Content extra>
              <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card raised centered color="green" fluid>
            <Card.Content>
              <Card.Header>
                <Header as='h3' color='green'>Surveys Completed</Header>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <SurveyDone/>
            </Card.Content>
            <Card.Content extra>
            <Link to="/surveys">Go to Surveys</Link>
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="computer">
          <Grid.Column  mobile={14} tablet={14} computer={12}>
            <Divider horizontal>Survey List</Divider>
            <SurveyList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
  );
};

export default HomePage;
