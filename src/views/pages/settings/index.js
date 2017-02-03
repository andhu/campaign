import React from 'react';
import SignInForm from 'views/components/sign-in-form';
import { authActions } from 'core/auth';
import { Container } from 'semantic-ui-react';

const SettingsPage = () => {
  return (
    <Container>
      <SignInForm submitAction={authActions.createUser()} />
    </Container>
  );
};

export default SettingsPage;
