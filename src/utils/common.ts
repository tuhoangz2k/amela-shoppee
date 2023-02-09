import { IProductListCart } from 'pages/CartPage/cartSlice';
export const checkHasToken = () => {
  return !!localStorage.getItem('token');
};
export const setCartLocalStorage = (data: any[]) => {
  localStorage.setItem('cart', JSON.stringify(data));
};
export const hasCart = () => {
  return !!localStorage.getItem('cart');
};
export const getCart = (): Array<IProductListCart> => {
  return JSON.parse(localStorage.getItem('cart') as string);
};

export const removeCartStore = () => {
  localStorage.removeItem('cart');
};
