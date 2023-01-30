import React from 'react';
import { Spacing } from './Header.styled';
import HeaderTopComp from './components/HeaderTopComp';
import HeaderBodyComp from './components/HeaderBodyComp';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <HeaderTopComp />
      <HeaderBodyComp />
      <Spacing />
    </>
  );
};

export default Header;
