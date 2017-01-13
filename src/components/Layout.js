import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signOut} from '../actions/authActions';

import {Container, Sidebar, Segment, Button, Icon} from 'semantic-ui-react';

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { visible: false};
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const {auth, actions, loading, user} = this.props;
    const { visible } = this.state;
    return (
      <Container fluid>
        <Button basic icon toggle active={visible} onClick={this.toggleVisibility}>
          <Icon name="television" />
        </Button>
        <Sidebar.Pushable as={Segment}>
          <Header signOut={actions.signOut} auth={auth} loading={loading} user={user} visible={visible} />
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    );
  }
}

Layout.propTypes =  {
  children: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    user: state.user,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({signOut}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
