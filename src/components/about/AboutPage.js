import React from 'react';
import {Link} from 'react-router';

import {Container} from 'semantic-ui-react';

const AboutPage = () => {
  return (
    <Container textAlign="center">
      <h1>About</h1>
      <p>Created with &hearts; <strong>@omg</strong></p>
      <Link to="/" activeClassName="active">Go to Home</Link>
    </Container>
  );
};

export default AboutPage;
