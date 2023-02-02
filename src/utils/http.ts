import axios, { AxiosInstance, AxiosHeaders } from 'axios';
import { LocalStorageService } from 'utils';

class Http {
  instance: AxiosInstance;
  private access_token: string;
  constructor() {
    this.access_token = LocalStorageService.getAccessToken();
    this.instance = axios.create({
      baseURL: 'http://vu.fresher.ameladev.click/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: '',
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          (config.headers as AxiosHeaders).set(
            'Authorization',
            `Bearer ${this.access_token}`,
          );
        }

        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
