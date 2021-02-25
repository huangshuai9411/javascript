import { request } from 'umi';
import { extend } from 'umi-request';

const R = extend({
  prefix: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const fetch = urlString => {
  const [method, url] = urlString.split(/\s+/);
  return function service(data = {}, options = {}) {
    options[method === 'get' ? 'params' : 'data'] = data;
    return new Promise((resolve, reject) => {
      R[method](url, options).then(res => {
        if (res.code === 200) {
          return resolve(res.data);
        }
        reject(res);
      }).catch(reject);
    });
  }
}

export const logout = fetch('put /logout');
