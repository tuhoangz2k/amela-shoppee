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
interface IComputed {
  id: string | number;
  quantity: number;
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
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
      state.isNoItem = false;
    },

    removeToCart(state, action: PayloadAction<{ id: number | string }>) {
      const idNeedToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },

    computedToCart: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.quantity = product.quantity + action.payload.quantity;
    },

    setQuantityToCartById: (state, action: PayloadAction<IComputed>) => {
      const product = state.cartItems.find((item) => item.id === action.payload.id);
      if (!product) return;
      product.quantity = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, computedToCart, removeToCart, setQuantityToCartById } =
  cartSlice.actions;

export default cartSlice.reducer;
