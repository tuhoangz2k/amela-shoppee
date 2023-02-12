import React from 'react';
import imgs from 'assets/imgs';
import { IMAGE_BASE_LINK, routePaths } from 'constants/index';
import {
  AccountNavCompWrap,
  AvatarWrap,
  ParagraphProfile,
  NavigateAccount,
  NavigateItem,
} from './AccountNavComp.styled';
import AvatarComp from 'components/AvatarComp';
import { Link } from 'react-router-dom';

type Props = {
  user: any;
};

const AccountNavComp: React.FC<Props> = ({ user }) => {
  return (
    <AccountNavCompWrap>
      <AvatarWrap>
        <AvatarComp
          src={
            user?.profile?.avatar
              ? `${IMAGE_BASE_LINK}${user.profile.avatar}`
              : imgs.avatarUser
          }
          width={120}
          height={120}
        />
      </AvatarWrap>
      <ParagraphProfile>{user?.user?.name}</ParagraphProfile>
      <NavigateAccount>
        <NavigateItem>
          <Link to={routePaths.profile}>My Profile</Link>
        </NavigateItem>
        <NavigateItem>
          <Link to={routePaths.purchase}>My Purchase</Link>
        </NavigateItem>
      </NavigateAccount>
    </AccountNavCompWrap>
  );
};

export default AccountNavComp;
