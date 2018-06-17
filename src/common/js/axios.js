// 引入服务器请求模块
import Axios from 'axios';

Axios.defaults.withCredentials=true;

// ajax 请求拦截
Axios.interceptors.request.use(
  config => {
    // 如果数据为JSON对象
    return config;
  },
  err => {
    // console.log(err);
  }
);

// ajax 响应拦截
Axios.interceptors.response.use(
  config => {
    // 如果数据为JSON对象
    return config;
  },
  err => {
    return Promise.reject(err.response);
  }
);


// 全局访问请求对象
window.$ajax = Axios;