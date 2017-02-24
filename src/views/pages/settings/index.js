import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import SignInForm from 'views/components/sign-in-form';
import { userActions } from 'core/users';
import { Container, Grid } from 'semantic-ui-react';
import UserList from 'views/components/user-list';

const SettingsPage = ({users, updateUser, removeUser}) => {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <SignInForm submitAction={userActions.createUser()} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <UserList
            users={users.toJS()}
            updateUser={updateUser}
            removeUser={removeUser}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

SettingsPage.propTypes = {
  removeUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  users: PropTypes.instanceOf(List)
};

const mapStateToProps = state => ({
  users: state.users.list
});

const mapDispatchToProps = {
  updateUser: userActions.updateUser,
  removeUser: userActions.removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
