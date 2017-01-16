import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { Menu, Button } from 'semantic-ui-react';

const Header = ({authenticated, signOut}) => {

  // TODO: implement a loading progressbar below the menu
  // let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  // let displayName = user.email ? <NavLink><div><Icon name="user" />{user.email}</div></NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>; 
  return (
    <Menu pointing stackable>
      <Menu.Item as={Link} to="/" name="Home" />
      {authenticated ? <Menu.Item as={Link} to="/candidates" name="Candidates" /> : null}
      {authenticated ? <Menu.Item as={Link} to="/surveys" name="Surveys" /> : null}
      <Menu.Item as={Link} to="/about" name="About" />
      <Menu.Menu position="right">
        {!authenticated ? <Menu.Item as={Link} to="/sign-in" name="Sign In" /> : null}
        {authenticated ? <Button negative content="Sign Out" onClick={signOut} /> : null}
      </Menu.Menu>
    </Menu>
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: React.PropTypes.func.isRequired
};

export default Header;
