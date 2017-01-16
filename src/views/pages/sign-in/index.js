import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';
import SignInForm from 'views/components/sign-in-form';

const SignInPage = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};


export default SignInPage;