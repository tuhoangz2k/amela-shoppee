import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const cartItemsSelector = (state: RootState) => state.cart.cartItems;
const cartItemsCount = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0),
);

const cartItemTotal = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0),
);

export { cartItemsCount, cartItemsSelector, cartItemTotal };
