import React from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
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
import { useMutation, useQuery } from '@tanstack/react-query';
import userApi from 'api/userApi';
import { PlusOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkHasToken } from 'utils';
import { addressRule, phoneRule } from 'constants/index';
type Props = {};

const ProfilePage = (props: Props) => {
  const navigated = useNavigate();
  const [form] = ProfileForm.useForm();
  const hasToken = checkHasToken();
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: userApi.getUser,
    onError(err) {
      localStorage.removeItem('token');
      navigated('/');
    },
    retryDelay: 500,
    staleTime: 20000,
    onSuccess: (data) => {
      const profile = data.data?.profile;
      if (!!profile) {
        form.setFields([
          { name: 'phone', value: profile?.phone },
          { name: 'address', value: profile?.address },
          { name: 'gender', value: profile?.gender },
          {
            name: 'birthday',
            value: profile?.birthday ? moment(profile?.birthday) : moment('2000-12-12'),
          },
        ]);
      }
    },
  });
  const profile = userQuery.data?.data?.profile;
  const updateMutation = useMutation({
    mutationFn: userApi.updateProfile,
    onError: () => {
      toast.error('something went wrong. Update profile failed', {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    onSuccess: () => {
      toast.success('Update profile success', {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const onFinish = async (values: any) => {
    values = { ...values, birthday: values.birthday._i };
    if (!values.avatar) {
      values.avatar = '';
    } else {
      values.avatar = values?.avatar?.fileList[0].originFileObj;
    }
    updateMutation.mutate(values, {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {
        userQuery.refetch();
      },
    });
  };
  const worker = {
    birthday: profile?.birthday ? moment(profile?.birthday) : moment('2000-12-12'),
  };
  if (!hasToken && !!userQuery.data?.data) return <Navigate to={'/'} />;
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
              form={form}
            >
              <ProfileForm.Item
                name="phone"
                rules={phoneRule}
                initialValue={profile?.phone}
                hasFeedback
              >
                <InputStyled placeholder="Phone number" />
              </ProfileForm.Item>

              <ProfileForm.Item
                name="address"
                rules={addressRule}
                hasFeedback
                initialValue={profile?.address}
              >
                <InputStyled placeholder="Address" />
              </ProfileForm.Item>

              <ProfileForm.Item name="birthday" hasFeedback required>
                <DatePicker />
              </ProfileForm.Item>

              <ProfileForm.Item
                name="gender"
                label="Gender"
                initialValue={profile?.gender}
                hasFeedback
                required
              >
                <Radio.Group>
                  <Radio value={1}> Male </Radio>
                  <Radio value={2}> female </Radio>
                </Radio.Group>
              </ProfileForm.Item>
              <ProfileForm.Item label="Upload Avatar" name="avatar" required>
                <Upload listType="picture-card">
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
