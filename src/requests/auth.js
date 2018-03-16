import axios from 'axios';
import stores from './../stores';

const instance = axios.create({
  baseURL: 'http://192.168.10.10/auth/',
});

// http request interceptors
instance.interceptors.request.use(
  config => {
    const token = stores.getState().user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);

// http response interceptors

export default instance;
