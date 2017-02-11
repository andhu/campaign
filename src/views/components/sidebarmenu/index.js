import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { Menu, Icon, Button } from 'semantic-ui-react';

const SideBarMenu = () => {

  // TODO: implement a loading progressbar below the menu
  // let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  // let displayName = user.email ? <NavLink><div><Icon name="user" />{user.email}</div></NavLink> : <NavLink><div><Icon name="user" />Guest</div></NavLink>;
  return (
    <div>
      <Menu.Item as={Link} to="/" name="Home">
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/stats" name="Stats">
        <Icon name='line chart' />
        Statitics
      </Menu.Item>
      <Menu.Item as={Link} to="/surveys" name="Surveys">
        <Icon name='edit' />
        Surveys
      </Menu.Item>
      <Menu.Item as={Link} to="/houses" name="Houses">
        <Icon name='building' />
        Houses
      </Menu.Item>
      <Menu.Item as={Link} to="/candidates" name="Candidates">
        <Icon name='users' />
        Candidates
      </Menu.Item>
      <Menu.Item as={Link} to="/settings" name="Settings">
        <Icon name='setting' />
        Settings
      </Menu.Item>
    </div>
  );
};

export default SideBarMenu;
