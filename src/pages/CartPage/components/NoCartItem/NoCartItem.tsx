import React from 'react';
import { NoCartWrap, NoCartImg, TextStyled, ButtonStyled } from './NoCartItem.styled';
import imgs from 'assets/imgs';
import { useNavigate } from 'react-router-dom';
import { routePaths } from 'constants/index';
type Props = {};

const NoCartItem = (props: Props) => {
  const navigated = useNavigate();
  return (
    <NoCartWrap>
      <NoCartImg src={imgs.noCartItem} />
      <TextStyled>Your shopping cart is empty</TextStyled>
      <ButtonStyled onClick={() => navigated(routePaths.products)}>
        Go Shopping Now
      </ButtonStyled>
    </NoCartWrap>
  );
};

export default NoCartItem;
