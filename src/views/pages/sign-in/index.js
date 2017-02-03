import React from 'react';
import { Container } from 'semantic-ui-react';
import SignInForm from 'views/components/sign-in-form';
import { authActions } from 'core/auth';

const SignInPage = () => {
  return (
    <Container>
      <SignInForm submitAction={authActions.signIn()} />
    </Container>
  );
};

export default SignInPage;
