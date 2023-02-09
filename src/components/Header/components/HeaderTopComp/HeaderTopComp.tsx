import React, { useState } from 'react';
import { checkHasToken } from 'utils';
import {
  HeaderTopWrap,
  HeaderTopNav,
  Content,
  DropdownStyled,
  UserAvatarWrap,
  UserAvatar,
} from './HeaderTopComp.styled';
import type { MenuProps } from 'antd';
import {
  PhoneFilled,
  DownOutlined,
  DollarCircleOutlined,
  EuroCircleOutlined,
  PoundCircleOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import images from 'assets/imgs';
import useViewport from 'hooks/useViewport ';
import { IMAGE_BASE_LINK, breakPonits, routePaths } from 'constants/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import userApi from 'api/userApi';

interface IHeaderNavigated {
  label: string;
  Icon: React.ReactNode;
  items: MenuProps['items'];
}

const HeaderNavigatedList: Array<IHeaderNavigated> = [
  {
    label: 'Currency',
    Icon: <DollarCircleOutlined />,
    items: [
      {
        label: 'Euro',
        key: 1,
        icon: <EuroCircleOutlined />,
      },
      {
        label: 'Pound Sterling',
        key: 2,
        icon: <PoundCircleOutlined />,
      },
      {
        label: 'US Dollar',
        key: 3,
        icon: <DollarCircleOutlined />,
      },
    ],
  },
  {
    label: 'Language',
    Icon: <ZhihuOutlined />,
    items: [
      {
        label: 'EngLish',
        key: 3,
        icon: <EuroCircleOutlined />,
      },
      {
        label: 'Arabic',
        key: 4,
        icon: <PoundCircleOutlined />,
      },
    ],
  },
];

type Props = {
  user: any;
  refetchUser: Function;
};

const HeaderTopComp: React.FC<Props> = ({ user, refetchUser }) => {
  const hasToken = checkHasToken();
  const navigated = useNavigate();
  const widthDevice = useViewport().width;
  const userMutation = useMutation({
    mutationFn: userApi.logout,
    onSuccess: (data) => {
      localStorage.removeItem('token');
      navigated('/');
    },
  });
  const handleLogOut = () => {
    userMutation.mutate();
    refetchUser();
  };
  const userNav: MenuProps['items'] = [
    {
      key: '77',
      label: <Link to={routePaths.profile}>My Profile</Link>,
    },
    {
      key: '88',
      label: <Link to={routePaths.home}>Purchase</Link>,
    },
    {
      key: '99',
      label: (
        <span
          style={{ borderTop: '1px solid #333', display: 'block' }}
          onClick={handleLogOut}
        >
          Log Out
        </span>
      ),
    },
  ];
  return (
    <HeaderTopWrap>
      {widthDevice >= breakPonits.sm && (
        <Content hover>
          <PhoneFilled style={{ fontSize: 14 }} />
          Free Support: <b style={{ fontWeight: 600 }}>123456789</b>
        </Content>
      )}
      <HeaderTopNav>
        {HeaderNavigatedList.map((data, index) => (
          <DropdownStyled menu={{ items: data.items }} trigger={['click']} key={index}>
            <Content hover>
              {data.Icon}
              {widthDevice >= breakPonits.sm && data.label}
              <DownOutlined style={{ fontSize: 12 }} />
            </Content>
          </DropdownStyled>
        ))}
        <Content hover>
          <Link to="/">Contact Us</Link>
        </Content>
        {hasToken && !!user ? (
          <>
            <DropdownStyled menu={{ items: userNav }}>
              <Content>
                <UserAvatarWrap>
                  <UserAvatar
                    src={
                      user?.profile?.avatar
                        ? `${IMAGE_BASE_LINK}${user?.profile?.avatar}`
                        : images?.avatarUser
                    }
                  />
                </UserAvatarWrap>
                {user?.user?.name}
              </Content>
            </DropdownStyled>
          </>
        ) : (
          <>
            <Content hover className="auth">
              <Link to="/login">Login</Link>
            </Content>
            <Content hover>
              <Link to="/register">Sign Up</Link>
            </Content>
          </>
        )}
      </HeaderTopNav>
    </HeaderTopWrap>
  );
};

export default HeaderTopComp;
