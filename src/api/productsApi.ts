import { IQueryParamsURL } from 'models';
import http from 'utils/http';

const productsApi = {
  getProductById: (id: number | string) => {
    return http.get(`products/${id}`);
  },
  getProductList: (params?: IQueryParamsURL) => {
    if (!params?.limit && params) {
      params.limit = 12;
    }
    if (!params?.price && params) {
      params.price = 'asc';
    }
    return http.get(`products`, { params });
  },
};
export default productsApi;
