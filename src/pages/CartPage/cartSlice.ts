import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'models';
import { setCartLocalStorage, getCart, hasCart } from 'utils';
export interface IProductListCart extends IProduct {
  cartQuantity: number;
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
  isNoItem: hasCart(),
  cartItems: hasCart() ? getCart() : productsCart,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
      state.isNoItem = true;
      setCartLocalStorage(state.cartItems);
    },

    removeToCart(state, action: PayloadAction<{ id: number | string }>) {
      const idNeedToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },

    computedToCart: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.cartQuantity = product.cartQuantity + action.payload.quantity;
    },

    setQuantityToCartById: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.cartQuantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, computedToCart, removeToCart, setQuantityToCartById } =
  cartSlice.actions;

export default cartSlice.reducer;
