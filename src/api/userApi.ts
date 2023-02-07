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
  getUser() {
    return http.get('profile/getUser');
  },
  updateProfile() {
    return http.post('profile/updateUser');
  },
};
export default userApi;
