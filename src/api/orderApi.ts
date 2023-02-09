import { IPayment } from 'models';
import http from 'utils/http';
const orderApi = {
  payment(data: IPayment) {
    return http.post('order', data);
  },
};
export default orderApi;
