import React from 'react';
import { LoginWrapper, LoginFormWrapper } from './LoginPage.styled';
import LoginForm from 'components/LoginForm';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <LoginWrapper>
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
