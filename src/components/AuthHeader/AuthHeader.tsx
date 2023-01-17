import React from 'react';
import {
  Container,
  WrapHeader,
  HeaderLabel,
  HelpButton,
  GoHomeArrow,
  QuestionCircleIcon,
} from './AuthHeader.styled';
import Images from 'assets/imgs';
import { routePaths, breakPonits } from 'constants/index';

import { Link } from 'react-router-dom';
import useViewport from 'hooks/useViewport ';
type Props = {};

const AuthHeader = (props: Props) => {
  const deviceWidth = useViewport().width;
  return (
    <WrapHeader>
      <Container>
        <Link to={routePaths.home}>
          {deviceWidth > breakPonits.sm ? (
            <img src={Images.logoImg} alt="Logo" />
          ) : (
            <GoHomeArrow />
          )}
        </Link>
        <HeaderLabel size={26}>Login</HeaderLabel>
      </Container>
      <HeaderLabel size={14}>
        {deviceWidth > breakPonits.sm ? (
          <HelpButton>Do you need help?</HelpButton>
        ) : (
          <QuestionCircleIcon />
        )}
      </HeaderLabel>
    </WrapHeader>
  );
};

export default AuthHeader;
