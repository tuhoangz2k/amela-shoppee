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
    return total + item.cartQuantity * item.price;
  }, 0),
);

export { cartItemsCount, cartItemsSelector, isCartNoItem, cartItemTotal };
