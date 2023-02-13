import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models';
import { setCartLocalStorage, getCart, hasCart, removeCartStore } from 'utils';
export interface IProductListCart extends IProduct {
  cartQuantity: number;
  isCkecked: boolean;
}
export interface CartState {
  isNoItem: boolean;
  cartItems: Array<IProductListCart>;
}
interface IComputed {
  id: string | number;
  quantity: number;
}
const productsCart: Array<IProductListCart> = [];
const initialState: CartState = {
  isNoItem: !hasCart(),
  cartItems: hasCart() ? getCart() : productsCart,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (!!item) {
        item.cartQuantity += action.payload.cartQuantity;
      } else {
        action.payload.isCkecked = false;
        state.cartItems.push(action.payload);
        state.isNoItem = false;
        setCartLocalStorage(state.cartItems);
      }
    },

    removeToCart(state, action: PayloadAction<{ id: number | string }>) {
      const idNeedToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
      setCartLocalStorage(state.cartItems);
    },

    computedToCart: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.cartQuantity = product.cartQuantity + action.payload.quantity;
      setCartLocalStorage(state.cartItems);
    },

    setQuantityToCartById: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.cartQuantity = action.payload.quantity;
      setCartLocalStorage(state.cartItems);
    },
    changeCartChecked: (state, action: PayloadAction<number | string>) => {
      const product = state.cartItems.find((item) => item.id === action.payload);
      if (!product) return;
      product.isCkecked = !product.isCkecked;
      setCartLocalStorage(state.cartItems);
    },
    toggleCheckedAll: (state, action: PayloadAction<boolean>) => {
      state.cartItems.forEach((item) => {
        item.isCkecked = action.payload;
      });
    },
    removeAll: (state, action: PayloadAction) => {
      removeCartStore();
      state.isNoItem = state.isNoItem = true;
    },
    cartPayment: (state, action: PayloadAction) => {
      const newArr = state.cartItems.filter((item) => !item.isCkecked);
      if (newArr.length === 0) {
        state.isNoItem = true;
        state.cartItems = [];
        removeCartStore();
      } else {
        state.cartItems = newArr;
        setCartLocalStorage(newArr);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  computedToCart,
  removeToCart,
  setQuantityToCartById,
  changeCartChecked,
  toggleCheckedAll,
  removeAll,
  cartPayment,
} = cartSlice.actions;

export default cartSlice.reducer;
