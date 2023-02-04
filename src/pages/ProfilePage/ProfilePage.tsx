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
import { DatePicker, Radio } from 'antd';

type Props = {};

const ProfilePage = (props: Props) => {
  const onFinish = async (values: any) => {
    console.log(values);
    console.log(values.birthday.$d);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [test, setTest] = useState('');
  const worker = {
    birthday: moment('1999-12-25'),
  };
  return (
    <Wrapper>
      <Container>
        <WrapperAccountNavComp>
          <AccountNavComp />
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
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={worker}
            >
              <ProfileForm.Item
                name="phone"
                rules={[
                  {
                    pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
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
                  <Radio value="1"> Male </Radio>
                  <Radio value="2"> female </Radio>
                </Radio.Group>
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
