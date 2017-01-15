import React from 'react';
import {Header, Statistic, Container} from 'semantic-ui-react';

const HomePage = () => {
  const items = [
    {label: "Total Surveys", value: "22"},
    {label: "Members", value: "6"},
    {label: "Sleep Lost", value: "101 Hrs"},
    {label: "Forehead into Wall", value: "64"}
  ];
  return (
      <Container  textAlign="center">
  			<Header as="h1">Campaign</Header>
  			<p>This is a project to make your life easier</p>
        <Statistic.Group width={6} size="mini" items={items} color="blue" />
      </Container>
  );
};

export default HomePage;
