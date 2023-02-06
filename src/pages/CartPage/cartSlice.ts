import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProductList } from 'models';

type ProductCartItem = {
  id: number | string;
  imageLink: string;
  name: string;
  price: number;
  to: string;
  quantity: number;
};
export interface CartState {
  isNoItem: boolean;
  cartItems: Array<ProductCartItem>;
}
const productsCart: Array<ProductCartItem> = [
  {
    id: 1,
    imageLink:
      'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/9-255x348.jpg',
    name: "air's shirt",
    price: 98.0,
    to: '/',
    quantity: 2,
  },
  {
    id: 2,
    imageLink:
      'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/9-255x348.jpg',
    name: "air's shirt",
    price: 198.0,
    to: '/',
    quantity: 3,
  },
];
const initialState: CartState = {
  isNoItem: true,
  cartItems: productsCart,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showMiniCart(state) {
      state.isNoItem = true;
    },
    hideMiniCart(state) {
      state.isNoItem = false;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
    },
    removeToCart(state, action: PayloadAction<any>) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

// Action creators are generated for each case reducer function
export const { showMiniCart, hideMiniCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
