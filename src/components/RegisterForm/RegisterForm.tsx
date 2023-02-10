import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import {
  RegisterformContainer,
  FormStyled,
  InputStyled,
  RegisterLabel,
  ButtonStyled,
  ButtonWrapperStyled,
  LabelNavigate,
} from './RegisterForm.styled';
import { routePaths } from 'constants/index';
import { checkHasToken } from 'utils';
import { useMutation } from '@tanstack/react-query';
import { IUserRegister } from 'models';
import userApi from 'api/userApi';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {};

const RegisterForm: React.FC<Props> = ({}) => {
  const hasToken = checkHasToken();
  const navigate = useNavigate();
  const [form] = FormStyled.useForm();

  const registerMatation = useMutation({
    mutationFn: (data: IUserRegister) => userApi.register(data),
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.authorisation.token);
      setTimeout(() => {
        navigate(routePaths.home);
      }, 300);
    },
    onError: (error: any) => {
      if (error.response.status === 422) {
        form.setFields([{ name: 'email', errors: ['Email already exists'] }]);
      }
    },
  });
  const onFinish = (values: any) => {
    registerMatation.mutate(values);
  };
  console.log(registerMatation.isLoading);
  const onFinishFailed = (errorInfo: any) => {};
  if (hasToken) return <Navigate to={routePaths.home} replace={true} />;

  return (
    <RegisterformContainer>
      <RegisterLabel>Register</RegisterLabel>
      <FormStyled
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
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

        <FormStyled.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Full Name is required',
            },
          ]}
          hasFeedback
        >
          <InputStyled placeholder="Full name" />
        </FormStyled.Item>

        <LabelNavigate>
          You have an account! <Link to={routePaths.login}>Login now</Link>
        </LabelNavigate>

        <FormStyled.Item>
          <ButtonWrapperStyled>
            <ButtonStyled
              type="primary"
              htmlType="submit"
              disabled={registerMatation.isLoading}
            >
              {!registerMatation.isLoading ? 'Register' : 'Loading...'}
              {registerMatation.isLoading && <LoadingOutlined />}
            </ButtonStyled>
          </ButtonWrapperStyled>
        </FormStyled.Item>
      </FormStyled>
    </RegisterformContainer>
  );
};

export default RegisterForm;
