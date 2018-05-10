// @flow
const xhrRequest = (type: string, url: string, data: mixed) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: this.statusText,
      });
    };
    xhr.send(data);
  });

export const __get = (url: string, query: string = '') =>
  xhrRequest('get', `${url}${query}`);
export const __put = (url: string, query: string = '', data: Object | string) =>
  xhrRequest('put', `${url}${query}`, data);
export const __delete = (
  url: string,
  query: string = '',
  data?: Object | string,
) => xhrRequest('delete', `${url}${query}`, data);
