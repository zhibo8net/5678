import axios from 'axios';
import qs from 'qs';

const status = {
  SUCCESS: 200,
  NO_CHANGE: 304,
  NET_ERR: 404,
  SERVER_ERR: 500 // 网络连接异常，请稍候再试
};
const baseURL = window.location.href.indexOf('https://')>-1?'https://80zhibo.com/':'http://80zhibo.com'

function successState(res) {
  if (res.status === status.SUCCESS || res.status === status.NO_CHANGE) {
    // if (res.data.returnCode === 'ERR999') {
    //   popToRoot();
    //   return;
    // }
    if (!res.data.message) {
      res.data.message = res.data.errorMessage;
    }
    return res;
  }
  return {
    data: {
      message: '系统异常',
      flag: -1
    }
  };
}

function errorState(error) {
  // store.commit('SET_LOADING_STATUS', { isLoading: false });
  console.log('error', error);
}
function fetch(options, showLoading = 0, noloading = 0) {
  return new Promise((resolve, reject) => {
    let instance = axios.create({
      baseURL: baseURL,
      responseType: 'json',
      // withCredentials: true,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });
    // 请求拦截器设置
    instance.interceptors.request.use(
      config => {
        // 请求拦截
        // if (!noloading) {
        //   store.commit('SET_LOADING_STATUS', { isLoading: true });
        // }
        // let token = getStorage('token', 1);
        // let isIos = getStorage('isIos', 1);
        // if (config.url !== 'sysman/account/h5Login' && isIos) {
        //   if (!token) {
        //     popToRoot();
        //     return false;
        //   }
        //   config.headers.Authorization = token;
        // }
        if (
          config.method === 'post' ||
          config.method === 'put' ||
          config.method === 'delete'
        ) {
          // 序列化
          config.data = qs.stringify(config.data);
        }
        return config;
      },
      error => {
        console.log('error 请求拦截 : ', error);
        return Promise.reject(error);
      }
    );
    // 响应拦截器设置
    instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.resolve(error.response);
      }
    );

    instance(options)
      .then(response => {
        // if (!showLoading) {
        //   store.commit('SET_LOADING_STATUS', { isLoading: false }); // 响应成功关闭loading
        // }
        response = successState(response);
        resolve(response);
      })
      .catch(error => {
        errorState(error);
        reject(error);
      });
  });
}

export default fetch;
