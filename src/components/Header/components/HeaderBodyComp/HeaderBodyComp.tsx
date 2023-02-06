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
import { Link, useNavigate } from 'react-router-dom';
import { routePaths, navList } from 'constants/index';
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import SearchInput from '../SearchInput';
import { breakPonits } from 'constants/index';
import MobileMenuList from '../MobileMenuList';
import { useAppSelector } from 'hooks/reduxHooks';
import { cartItemsCount } from 'app/cartSelector';

type Props = {};

const HeaderBodyComp = (props: Props) => {
  const quantity = useAppSelector(cartItemsCount);
  const navigated = useNavigate();
  const widthDevice = useViewport().width;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const onToggle = (isOpen: boolean) => {
    setIsOpenSearch(isOpen);
  };
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
        <Item onClick={() => onToggle(true)}>
          <SearchOutlined style={{ fontSize: '22px' }} />
        </Item>
        <Item onClick={() => navigated(routePaths.cart)}>
          <ShoppingCartOutlined style={{ fontSize: '22px' }} />
          <QuantityCart>{quantity}</QuantityCart>
        </Item>
      </ItemsWrap>
      {isOpenSearch && (
        <SearchWrap>
          <SearchInput onToggle={onToggle} />
        </SearchWrap>
      )}

      {widthDevice <= breakPonits.sm && isOpenMenu && <MobileMenuList />}
    </HeaderBodyWrap>
  );
};

export default HeaderBodyComp;
