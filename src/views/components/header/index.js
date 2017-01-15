import React, {PropTypes} from 'react';

import NavLink from './navlink';

import { Menu, Button } from 'semantic-ui-react';

const Header = ({authenticated, signOut}) => {

  // TODO: implement a loading progressbar below the menu
  // let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  // let displayName = user.email ? <NavLink><div><Icon name="user" />{user.email}</div></NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>; 
  return (
    <Menu pointing stackable>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/survey">Survey</NavLink>
      <NavLink to="/about">About</NavLink>
      {authenticated ? <NavLink onClick={signOut}>SignOut</NavLink> : null}
    </Menu>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: React.PropTypes.func.isRequired
};

export default Header;
