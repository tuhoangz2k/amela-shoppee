import { IPayment } from 'models';
import http from 'utils/http';
const orderApi = {
  payment(data: IPayment) {
    return http.post('order', data);
  },
  orderList: () => {
    return http.get('order/history');
  },
  orderDetail: (id: string | number) => {
    return http.get(`order/${id}`);
  },
};
export default orderApi;
