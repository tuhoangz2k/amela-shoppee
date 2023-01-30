import React from 'react';
import {
  HeaderBodyWrap,
  LogoWrap,
  Logo,
  ItemsWrap,
  Item,
  DropdownStyle,
  CustomDropdownContent,
} from './HeaderBodyComp.styled';
import images from 'assets/imgs';
import { Link } from 'react-router-dom';
import { routePaths } from 'constants/index';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

type Props = {};

interface navType {
  label: string;
  path: string;
  items?: MenuProps['items'];
}
const navList: Array<navType> = [
  { label: 'Home', path: routePaths.home },

  {
    label: 'MEN',
    path: routePaths.home,
    items: [
      {
        key: 'hoodies',
        label: 'hoodies',
        onClick: ({ key }) => {
          console.log(key);
        },
      },
      {
        key: 'casual',
        label: 'casual',
        onClick: ({ key }) => {
          console.log(key);
        },
      },
    ],
  },
  { label: 'WOMEN', path: routePaths.home },
  { label: 'OFFICE WEAR', path: routePaths.home },
  { label: 'PRODUCTS', path: routePaths.home },
];

const HeaderBodyComp = (props: Props) => {
  return (
    <HeaderBodyWrap>
      <LogoWrap>
        <Link to={routePaths.home}>
          <Logo src={images.logoImg} />
        </Link>
      </LogoWrap>
      <ItemsWrap>
        {navList.map((nav, index) => {
          return !nav.items ? (
            <Link to={nav.path} key={index}>
              <Item>{nav.label}</Item>
            </Link>
          ) : (
            <DropdownStyle
              menu={{ items: nav.items }}
              key={index}
              dropdownRender={(menus: React.ReactNode) => (
                <CustomDropdownContent>{menus}</CustomDropdownContent>
              )}
            >
              <Link to={nav.path}>
                <Space>{nav.label}</Space>
              </Link>
            </DropdownStyle>
          );
        })}
      </ItemsWrap>
      <ItemsWrap></ItemsWrap>
    </HeaderBodyWrap>
  );
};

export default HeaderBodyComp;
