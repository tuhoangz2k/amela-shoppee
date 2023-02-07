import http from 'utils/http';

const productsApi = {
  getProductById: (id: number | string) => {
    return http.get(`products/${id}`);
  },
};
export default productsApi;
