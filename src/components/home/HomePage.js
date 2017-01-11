import React from 'react';
import {Segment, Header} from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Segment>
			<Header as="h1">Campaign</Header>
				<p>This is a project to make your life easier</p>
      <div>
				<h4>Houses Covered</h4>
				<p><span className="small">29</span></p>
      </div>
    </Segment>
  );
};

export default HomePage;
