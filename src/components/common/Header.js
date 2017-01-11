import React, {PropTypes} from 'react';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';
import NavLink from './NavLink';

import { Menu, Icon } from 'semantic-ui-react';

const Header = ({loading, signOut, auth, user}) => {
  // TODO: implement a loading progressbar below the menu
  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  let displayName = user.email ? <NavLink>{user.email}</NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>; 
  return (
      <Menu inverted stackable>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/d2d">D2D</NavLink>
        <NavLink to="/about">About</NavLink>
        <Menu.Menu position="right">
          {loginLogoutLink}
          {displayName}
        </Menu.Menu>
      </Menu>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
