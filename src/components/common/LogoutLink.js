import React from 'react';
import NavLink from './NavLink';

const LogoutLink = ({signOut}) => {
	return <NavLink onClick={signOut}>Logout</NavLink>;
};

LogoutLink.propTypes = {
  signOut: React.PropTypes.func.isRequired
};

export default LogoutLink;
