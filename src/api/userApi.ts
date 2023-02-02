import http from 'utils/http';
import { IUserLogin, IUserRegister } from 'models';
const userApi = {
  login(data: IUserLogin) {
    return http.post('login', data);
  },
  register(data: IUserRegister) {
    return http.post('register', data);
  },
  logout() {
    return http.get('logout');
  },
};
export default userApi;
