import React from 'react';
import { NoCartWrap, NoCartImg, TextStyled, ButtonStyled } from './NoCartItem.styled';
import imgs from 'assets/imgs';
import { useNavigate } from 'react-router-dom';
type Props = {};

const NoCartItem = (props: Props) => {
  const navigated = useNavigate();
  return (
    <NoCartWrap>
      <NoCartImg src={imgs.noCartItem} />
      <TextStyled>Your shopping cart is empty</TextStyled>
      <ButtonStyled>Go Shopping Now</ButtonStyled>
    </NoCartWrap>
  );
};

export default NoCartItem;
