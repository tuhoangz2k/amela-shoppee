export const checkHasToken = () => {
  return !!localStorage.getItem('token');
};
