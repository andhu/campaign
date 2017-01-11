import React, {PropTypes} from 'react';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';
import NavLink from './NavLink';

import { Menu, Icon, Sidebar } from 'semantic-ui-react';

const Header = ({loading, signOut, auth, user, visible}) => {
  // TODO: implement a loading progressbar below the menu
  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  let displayName = user.email ? <NavLink><div><Icon name="user" />{user.email}</div></NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>; 
  return (
        <Sidebar as={Menu} width="thin" animation="slide out" visible={visible} vertical inverted>
          {displayName}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/d2d">D2D</NavLink>
          <NavLink to="/about">About</NavLink>
          {loginLogoutLink}
        </Sidebar>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
