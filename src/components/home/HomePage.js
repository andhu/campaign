import React from 'react';
import {Header, Statistic} from 'semantic-ui-react';

const HomePage = () => {
  const items = [
    {label: "Total Houses", value: "22"},
    {label: "Members", value: "6"}
  ];
  return (
      <div>
  			<Header as="h1">Campaign</Header>
  			<p>This is a project to make your life easier</p>
        <Statistic.Group items={items} color="blue" />
      </div>
  );
};

export default HomePage;
