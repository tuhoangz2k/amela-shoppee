import React from 'react';
import imgs from 'assets/imgs';
import { routePaths } from 'constants/index';
import {
  AccountNavCompWrap,
  AvatarStyled,
  AvatarWrap,
  ParagraphProfile,
  NavigateAccount,
  NavigateItem,
} from './AccountNavComp.styled';
import AvatarComp from 'components/AvatarComp';
import { Link } from 'react-router-dom';

type Props = {};

const AccountNavComp = (props: Props) => {
  return (
    <AccountNavCompWrap>
      <AvatarWrap>
        <AvatarComp src={imgs.avatarUser} width={120} height={120} />
      </AvatarWrap>
      <ParagraphProfile>Jogle Spon</ParagraphProfile>
      <NavigateAccount>
        <NavigateItem>
          <Link to={routePaths.profile}>My Profile</Link>
        </NavigateItem>
        <NavigateItem>
          <Link to={routePaths.profile}>My Purchase</Link>
        </NavigateItem>
      </NavigateAccount>
    </AccountNavCompWrap>
  );
};

export default AccountNavComp;
