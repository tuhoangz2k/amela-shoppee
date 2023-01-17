import React from 'react';
import { Link } from 'react-router-dom';

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

type Props = {};

const LoginForm: React.FC<Props> = ({}) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginformContainer>
      <LoginLabel>Login</LoginLabel>
      <FormStyled
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormStyled.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <InputStyled placeholder="Username" />
        </FormStyled.Item>

        <FormStyled.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <InputStyled.Password placeholder="Password" />
        </FormStyled.Item>

        <FormStyled.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <CheckboxStyled>Remember me</CheckboxStyled>
        </FormStyled.Item>

        <LabelNavigate>
          You have not an account!<Link to={routePaths.register}>Sign up now</Link>
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
