import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { IUserLogin } from 'models';
import userApi from 'api/userApi';

import {
  LoginformContainer,
  FormStyled,
  InputStyled,
  LoginLabel,
  ButtonStyled,
  ButtonWrapperStyled,
  LabelNavigate,
} from './LoginForm.styled';
import { routePaths } from 'constants/index';
import { useMutation } from '@tanstack/react-query';
import { checkHasToken } from 'utils';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {};
type ErrorFormType = {
  status: 'error' | 'success' | 'validating' | 'warning' | undefined;
  message: string;
};

const LoginForm: React.FC<Props> = ({}) => {
  const [errorAntd, setErrorAntd] = useState<ErrorFormType>({
    status: undefined,
    message: '',
  });
  const hasToken = checkHasToken();
  const navigate = useNavigate();
  const loginMatation = useMutation({
    mutationFn: (data: IUserLogin) => userApi.login(data),
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.authorisation.token);
      navigate(routePaths.home);
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        setErrorAntd({
          status: 'error',
          message: 'Your account or password is incorrect',
        });
      }
    },
  });

  const onFinish = async (values: any) => {
    loginMatation.mutate(values);
  };

  const handleRemoveErrorMessage = () => {
    if (!errorAntd.status) return;
    setErrorAntd({ status: undefined, message: '' });
  };
  const onFinishFailed = (errorInfo: any) => {};
  if (hasToken) return <Navigate to={routePaths.home} replace={true} />;
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
            {
              validator(rule, value, callback) {},
            },
          ]}
          hasFeedback
        >
          <InputStyled placeholder="Username" onChange={handleRemoveErrorMessage} />
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
          <InputStyled.Password
            placeholder="Password"
            onChange={handleRemoveErrorMessage}
          />
        </FormStyled.Item>

        {/* <FormStyled.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <CheckboxStyled>Remember me</CheckboxStyled>
        </FormStyled.Item> */}

        <LabelNavigate>
          You have not an account! <Link to={routePaths.register}>Sign up now</Link>
        </LabelNavigate>

        <FormStyled.Item>
          <ButtonWrapperStyled>
            <ButtonStyled
              type="primary"
              htmlType="submit"
              disabled={loginMatation.isLoading}
            >
              {!loginMatation.isLoading ? 'Login' : 'Loading...'}
              {loginMatation.isLoading && <LoadingOutlined />}
            </ButtonStyled>
          </ButtonWrapperStyled>
        </FormStyled.Item>
      </FormStyled>
    </LoginformContainer>
  );
};

export default LoginForm;
