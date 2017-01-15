import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Menu} from 'semantic-ui-react';

const NavLink = props => {
  let linkComponent = props.to === '/' ? IndexLink : Link;

  return (
    <Menu.Item
      as={linkComponent}
      {...props}
      activeClassName="active"
    />
  );
};

NavLink.propTypes = {
  props: React.PropTypes.object.isRequired
};

export default NavLink;

