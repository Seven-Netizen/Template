// 导入axios库，用于发起HTTP请求
import axios from 'axios';

// 创建一个axios实例，配置基础URL和超时时间
const request = axios.create({
  baseURL: 'http://192.168.50.159:9090/', // API请求的基础URL
  timeout: 60000, // 请求的超时时间
});

// 配置请求拦截器，用于在请求发送前进行统一处理
request.interceptors.request.use(config => {
  // 设置请求头的Content-Type为JSON格式
  config.headers['Content-Type'] = 'application/json;charset=utf-8';

  return config;
}, error => {
  return Promise.reject(error);
});

// 配置响应拦截器，用于在请求返回后进行统一处理
request.interceptors.response.use(
  response => {
    let res = response.data;

    // 如果响应的responseType为blob，直接返回响应数据
    if (response.config.responseType === 'blob') {
      return res;
    }

    return res;
  },
  error => {
    console.error('err' + error); // 用于调试的错误日志
    return Promise.reject(error);
  }
);

// 导出创建的axios实例，供其他模块使用
export default request;
