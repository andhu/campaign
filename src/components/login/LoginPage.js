import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {signInWithEmailAndPassword} from '../../actions/authActions';
import LoginForm from './LoginForm';
import toastr from 'toastr';

import LoadingDots from '../common/LoadingDots';

import {Segment, Dimmer, Header, Icon} from 'semantic-ui-react';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { saving: false };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    const user = {
      email: formProps.email,
      password:formProps.password
     };
    this.setState({saving: true});
    this.props.signInWithEmailAndPassword(user)
      .then(() => {
        toastr.success("Successfully logged in");
      })
      .catch(error => {
        toastr.error(error.message);
        this.setState({saving: false});
      });
  }

  render() {
    const { loading } = this.props;
    return (
          <Dimmer.Dimmable
            as={Segment}
            dimmed={loading}>
            <Dimmer active={loading}>
              <Header as="h2" icon inverted>
                <Icon loading name="asterisk" />
                Logging In {loading && <LoadingDots />}
              </Header>
            </Dimmer>
            <LoginForm 
            onSave={this.handleFormSubmit}
            saving={loading} />
          </Dimmer.Dimmable>
    );
  }
}

LoginPage.propTypes = {
  signInWithEmailAndPassword: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {loading: state.ajaxCallsInProgress > 0};
}

export default connect(mapStateToProps, {signInWithEmailAndPassword})(LoginPage);
