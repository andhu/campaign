import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions, getAuth } from 'core/auth';
import Header from 'views/components/header';

import { Segment, Progress } from 'semantic-ui-react';

function App({authenticated, children, signOut}) {
  return (
    <div>
      <Header
        authenticated={authenticated}
        signOut={signOut}
      />

      <Segment vertical>
        <Progress percent={60} attached="top" color="teal" indicating />
        <main>{children}</main>
      </Segment>
    </div>
  );
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  signOut: PropTypes.func.isRequired
};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


