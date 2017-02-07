import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import SignInForm from 'views/components/sign-in-form';
import { authActions } from 'core/auth';

const SignInPage = () => {
  return (
    <Container textAlign='center'>
      <Image centered shape='circular' size='medium' src="/views/img/kaashi.png" />
      <SignInForm submitAction={authActions.signIn()} />
    </Container>
  );
};

export default SignInPage;
