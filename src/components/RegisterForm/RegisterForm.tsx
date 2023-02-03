import React from 'react';
import { Link } from 'react-router-dom';

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

type Props = {};

const RegisterForm: React.FC<Props> = ({}) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <RegisterformContainer>
      <RegisterLabel>Register</RegisterLabel>
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
          label="Address"
          name="Address"
          rules={[
            {
              required: true,
              message: 'Address is required',
            },
          ]}
          hasFeedback
        >
          <InputStyled placeholder="Address" />
        </FormStyled.Item>

        <FormStyled.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
              message: 'Phone is must number',
            },
          ]}
          hasFeedback
        >
          <InputStyled placeholder="Phone Number" />
        </FormStyled.Item>

        <LabelNavigate>
          You have an account! <Link to={routePaths.login}>Login now</Link>
        </LabelNavigate>

        <FormStyled.Item>
          <ButtonWrapperStyled>
            <ButtonStyled type="primary" htmlType="submit">
              Register
            </ButtonStyled>
          </ButtonWrapperStyled>
        </FormStyled.Item>
      </FormStyled>
    </RegisterformContainer>
  );
};

export default RegisterForm;
