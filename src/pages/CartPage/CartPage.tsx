import React, { useState } from 'react';
import { CartPageWrap } from './CartPage.styled';
import NoCartItem from './components/NoCartItem';
import CartHasItem from './components/CartHasItem';
import { useAppSelector } from 'hooks/reduxHooks';
import { isCartNoItem } from 'app/cartSelector';

type Props = {};

const CartPage = (props: Props) => {
  const hasCartItem = useAppSelector(isCartNoItem);

  return <CartPageWrap>{!hasCartItem ? <NoCartItem /> : <CartHasItem />}</CartPageWrap>;
};

export default CartPage;
