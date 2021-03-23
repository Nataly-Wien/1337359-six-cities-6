import axios from 'axios';
import {HttpStatusCode} from '../const';

const BACKEND_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onAuthorized, onLoadingError) => {

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpStatusCode.UNAUTHORIZED) {
      onAuthorized();
    } else {
      onLoadingError(response.status);
    }

    throw response.status;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
