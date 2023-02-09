import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const cartItemsSelector = (state: RootState) => state.cart.cartItems;
const isCartNoItem = (state: RootState) => state.cart.isNoItem;

const cartItemsCount = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => {
    return count + item.cartQuantity;
  }, 0),
);

const cartItemTotal = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => {
    if (!item.isCkecked) return total;
    return item.discount
      ? total + item.cartQuantity * (item?.price - item?.price * (item?.discount / 100))
      : total + item.cartQuantity * item.price;
  }, 0),
);

const isChekedAll = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.every((item) => {
    return item.isCkecked;
  }),
);

export { cartItemsCount, cartItemsSelector, isCartNoItem, cartItemTotal, isChekedAll };
