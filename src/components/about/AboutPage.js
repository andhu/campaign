import React from 'react';
import {Link} from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Created with &hearts; <strong>@omg</strong></p>
      <Link to="/" activeClassName="active">Go to Home</Link>
    </div>
  );
};

export default AboutPage;
