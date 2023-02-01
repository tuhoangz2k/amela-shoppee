import React, { useState } from 'react';
import {
  HeaderBodyWrap,
  LogoWrap,
  Logo,
  ItemsWrap,
  Item,
  DropdownStyle,
  CustomDropdownContent,
  QuantityCart,
  SearchWrap,
} from './HeaderBodyComp.styled';
import images from 'assets/imgs';
import useViewport from 'hooks/useViewport ';
import { Link } from 'react-router-dom';
import { routePaths, categories } from 'constants/index';
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Space } from 'antd';
import SearchInput from '../SearchInput';
import { breakPonits } from 'constants/index';
import MobileMenuList from '../MobileMenuList';

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
  {
    label: 'WOMEN',
    path: routePaths.women,
    items: [
      {
        key: 'modest',
        label: 'MODEST FASHION',
        onClick: ({ key }) => {
          console.log(key);
        },
        children: [
          { key: 'baby', label: 'BABY SUIT' },
          { key: 'jackets', label: 'JACKETS FOR WOMEN' },
          { key: 'jogers', label: 'JOGERS' },
          { key: 'tshirts', label: 'T-SHIRTS' },
        ],
      },
      {
        onClick: ({ key }) => {
          console.log(key);
        },
        key: 'preppy',
        label: 'PREPPY STYLE',
      },
      {
        key: 'child',
        label: 'CHILD',
      },
      {
        key: 'office',
        label: 'OFFICE',
      },
      {
        key: 'capree',
        label: 'CAPREE',
      },
    ],
  },
  { label: 'OFFICE WEAR', path: routePaths.home },
  { label: 'PRODUCTS', path: routePaths.home },
];

const HeaderBodyComp = (props: Props) => {
  const quantity = 99;
  const widthDevice = useViewport().width;
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  return (
    <HeaderBodyWrap>
      <LogoWrap>
        <Link to={routePaths.home}>
          <Logo src={images.logoImg} />
        </Link>
      </LogoWrap>
      <ItemsWrap>
        {widthDevice > breakPonits.sm && (
          <>
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
          </>
        )}
      </ItemsWrap>
      <ItemsWrap>
        {widthDevice <= breakPonits.sm && !isOpenMenu && (
          <Item>
            <MenuOutlined
              onClick={() => setIsOpenMenu(true)}
              style={{ fontSize: '22px' }}
            />
          </Item>
        )}
        {widthDevice <= breakPonits.sm && isOpenMenu && (
          <Item>
            <CloseOutlined
              onClick={() => setIsOpenMenu(false)}
              style={{ fontSize: '22px' }}
            />
          </Item>
        )}
        <Item>
          <SearchOutlined style={{ fontSize: '22px' }} />
        </Item>
        <Item>
          <ShoppingCartOutlined style={{ fontSize: '22px' }} />
          <QuantityCart>{quantity}</QuantityCart>
        </Item>
      </ItemsWrap>
      <SearchWrap>
        <SearchInput />
      </SearchWrap>
      {widthDevice <= breakPonits.sm && isOpenMenu && <MobileMenuList />}
    </HeaderBodyWrap>
  );
};

export default HeaderBodyComp;
