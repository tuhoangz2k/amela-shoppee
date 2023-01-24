import React from 'react';
import { Wrapper, FormWrapper } from './RegisterPage.styled';
import RegisterForm from 'components/RegisterForm';

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <Wrapper>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
    </Wrapper>
  );
};

export default RegisterPage;
