import React from 'react';
import {Link} from 'react-router';

const LoginLink = () => {
  return (
    <li>
    	<Link to="/register" activeClassName="active">Sign up</Link>
    	{ " | | " }
      <Link to="/login" activeClassName="active">Login</Link>
    </li>
  );
};

export default LoginLink;
