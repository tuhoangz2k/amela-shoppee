import React, { useState } from 'react';
import { CartPageWrap } from './CartPage.styled';
import NoCartItem from './components/NoCartItem';
import CartHasItem from './components/CartHasItem';

type Props = {};

const CartPage = (props: Props) => {
  const [hasCartItem, setHasCartItem] = useState(true);

  return <CartPageWrap>{!hasCartItem ? <NoCartItem /> : <CartHasItem />}</CartPageWrap>;
};

export default CartPage;
