import React, { useState } from 'react';
import moment from 'moment';
import {
  Wrapper,
  Container,
  WrapperAccountNavComp,
  ProfileContent,
  ProfileTop,
  TitleProfile,
  ParagraphProfile,
  Profilebody,
  ProfileForm,
  InputStyled,
  ButtonStyled,
  ButtonWrapperStyled,
} from './ProfilePage.styled';
import AccountNavComp from 'components/AccountNavComp/AccountNavComp';
import { DatePicker, Radio, Upload } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userApi from 'api/userApi';
import { PlusOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkHasToken } from 'utils';
import { PHONE_REGEX } from 'constants/index';
import { error } from 'console';
type Props = {};

const ProfilePage = (props: Props) => {
  const navigated = useNavigate();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['user']);
  console.log(data);
  const hasToken = checkHasToken();
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: userApi.getUser,
    onError(err) {
      localStorage.removeItem('token');
      navigated('/');
    },
  });

  const updateMutation = useMutation({ mutationFn: userApi.updateProfile });

  const onFinish = async (values: any) => {
    values = { ...values, birthday: values.birthday._i };
    if (!values.avatar) {
      values.avatar = '';
    }
    console.log(values);
    updateMutation.mutate(values, {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        userQuery.refetch();
      },
    });
  };

  const worker = {
    birthday: moment('1999-12-25'),
  };
  if (!hasToken) return <Navigate to={'/'} />;
  return (
    <Wrapper>
      <Container>
        <WrapperAccountNavComp>
          <AccountNavComp user={userQuery.data?.data} />
        </WrapperAccountNavComp>
        <ProfileContent>
          <ProfileTop>
            <TitleProfile level={3}>My Profile</TitleProfile>
            <ParagraphProfile>Manage and protect your account</ParagraphProfile>
          </ProfileTop>
          <Profilebody>
            <ProfileForm
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              initialValues={worker}
            >
              <ProfileForm.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    pattern: PHONE_REGEX,
                    message: 'phone number must an valid number',
                  },
                ]}
                hasFeedback
              >
                <InputStyled placeholder="Phone number" />
              </ProfileForm.Item>

              <ProfileForm.Item
                name="address"
                rules={[
                  {
                    required: true,
                    min: 6,
                    message: 'your address has must be at least 6 characters',
                  },
                ]}
                hasFeedback
              >
                <InputStyled placeholder="Address" />
              </ProfileForm.Item>

              <ProfileForm.Item name="birthday" hasFeedback>
                <DatePicker />
              </ProfileForm.Item>

              <ProfileForm.Item name="gender" label="Gender" hasFeedback>
                <Radio.Group>
                  <Radio value={1}> Male </Radio>
                  <Radio value={2}> female </Radio>
                </Radio.Group>
              </ProfileForm.Item>
              <ProfileForm.Item label="Upload Avatar" name="avatar">
                <Upload listType="picture-card" disabled>
                  <PlusOutlined />
                </Upload>
              </ProfileForm.Item>
              <ProfileForm.Item>
                <ButtonWrapperStyled>
                  <ButtonStyled type="primary" htmlType="submit">
                    Update
                  </ButtonStyled>
                </ButtonWrapperStyled>
              </ProfileForm.Item>
            </ProfileForm>
          </Profilebody>
        </ProfileContent>
      </Container>
    </Wrapper>
  );
};

export default ProfilePage;
