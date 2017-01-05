import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';

const Header = ({loading, signOut, auth, user}) => {

  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  let adminLink = user.isAdmin ? <AdminLink /> : null;
  let displayName = user.displayName ? user.displayName : "Guest";

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
              <span className="sr-only">Toggle navigation </span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Election</a>
        </div>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/d2d" activeClassName="active">Door 2 Door</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/protected" activeClassName="active">Protected</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            Hi {displayName} {loginLogoutLink}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
