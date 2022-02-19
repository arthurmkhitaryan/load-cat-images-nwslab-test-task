import Axios from "../plugins/axios";

export default class ApiFactory {
  constructor() {
    this.instance = Axios;
    this.pendingRequests = {};
  }

  call({ method, url }, data) {
    let requestKey = `${url}/${method}`;
    this.pendingRequests[requestKey] = new Promise((resolve, reject) => {
      this.instance[method](`${url}`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          delete this.pendingRequests[requestKey];
        });
    });
    return this.pendingRequests[requestKey];
  }

  get(url, data) {
    return this.call({ method: "get", url }, data);
  }

  post(url, data) {
    return this.call({ method: "get", url }, data);
  }
}
