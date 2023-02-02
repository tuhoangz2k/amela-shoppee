import React from 'react';
import { Link } from 'react-router-dom';
import { IUserLogin } from 'models';
import userApi from 'api/userApi';

import {
  LoginformContainer,
  FormStyled,
  InputStyled,
  CheckboxStyled,
  LoginLabel,
  ButtonStyled,
  ButtonWrapperStyled,
  LabelNavigate,
} from './LoginForm.styled';
import { routePaths } from 'constants/index';
import { useMutation } from '@tanstack/react-query';

type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
  const loginMatation = useMutation({
    mutationFn: (data: IUserLogin) => userApi.login(data),
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem('token', data.data.authorisation.token);
    },
  });
  const onFinish = async (values: any) => {
    loginMatation.mutate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginformContainer>
      <LoginLabel>Login</LoginLabel>
      <FormStyled
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormStyled.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              min: 6,
              message: 'your username has must be at least 6 characters',
            },
            {
              type: 'email',
              message: 'username must an valid email address',
            },
          ]}
          hasFeedback
        >
          <InputStyled placeholder="Username" />
        </FormStyled.Item>

        <FormStyled.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please password has must be at least 6 characters',
              min: 6,
            },
          ]}
        >
          <InputStyled.Password placeholder="Password" />
        </FormStyled.Item>

        {/* <FormStyled.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <CheckboxStyled>Remember me</CheckboxStyled>
        </FormStyled.Item> */}

        <LabelNavigate>
          You have not an account! <Link to={routePaths.register}>Sign up now</Link>
        </LabelNavigate>

        <FormStyled.Item>
          <ButtonWrapperStyled>
            <ButtonStyled type="primary" htmlType="submit">
              Login
            </ButtonStyled>
          </ButtonWrapperStyled>
        </FormStyled.Item>
      </FormStyled>
    </LoginformContainer>
  );
};

export default LoginForm;
