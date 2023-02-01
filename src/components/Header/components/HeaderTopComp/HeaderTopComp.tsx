import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import images from 'assets/imgs';
import useViewport from 'hooks/useViewport ';
import { breakPonits } from 'constants/index';

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

type Props = {};

const HeaderTopComp = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const widthDevice = useViewport().width;
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
        {isLogin ? (
          <>
            <Content>
              <UserAvatarWrap>
                <UserAvatar src={images.avatar} />
              </UserAvatarWrap>
              user 1
            </Content>
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
