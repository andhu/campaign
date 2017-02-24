import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Menu, Button } from 'semantic-ui-react';

const Header = ({signOut}) => {

  // TODO: implement a loading progressbar below the menu
  // let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  // let displayName = user.email ? <NavLink><div><Icon name="user" />{user.email}</div></NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>;
  return (
    <Menu fixed="top" floated icon secondary>
      <Menu.Item header>Campaign</Menu.Item>
      <Menu.Menu position="right">
        <Button negative content="Sign Out" onClick={signOut} />
      </Menu.Menu>
    </Menu>
  );
};

Header.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default Header;
