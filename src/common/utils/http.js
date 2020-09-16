import axios from 'axios';

/*
* 全局 axios 默认配置
*/
axios.defaults.baseURL = '/'; // '/api';
axios.defaults.timeout = 50000;
// 公共请求头
axios.defaults.headers.common.systoken = '';
// get 请求头
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.get.Accept = 'application/json';
// post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function transformRequest (param) {
  return Object.keys(param).map(key => {
    const value = typeof param[key] === 'object' ? encodeURIComponent(JSON.stringify(param[key])) : param[key];
    return `${key}=${value}`;
  }).join('&');
}

function request (options) {
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      if (res.data.code === -3) {
        resolve(res.data);
      } else {
        resolve(res.data);
      }
      if (res.data.status === '1') {
        location.href = '/api/ucenter/account/logout?pro_name=gis';
      }
    }, err => {
      handleError(err);
      reject(err);
    });
  });
}

function handleError (error) {
  let errMsg;
  if (error instanceof Response) {
    if (error.status === 401) {
      location.href = '/api/ucenter/account/logout?pro_name=gis';
    }
    errMsg = JSON.stringify(error);
  } else {
    if (typeof error === 'object') {
      errMsg = JSON.stringify(error);
    } else {
      errMsg = error.toString();
    }
  }
  return Promise.resolve(errMsg);
}

export default {
  get(url, params = {}) {
    params._t = +new Date();
    return request({
      url: url,
      method: 'get',
      params: params,
      paramsSerializer: function (params) {
        return transformRequest(params);
      }
    });
  },

  post(url, data = {}) {
    data._t = +new Date();
    return request({
      url: url,
      method: 'post',
      data: data,
      transformRequest: [function (data, headers) {
        return transformRequest(data);
      }]
    });
  },

  delete(url, params) {},
  head(url, params) {},
  options(url, params) {},
  put(url, params) {},
  patch(url, params) {}
};
