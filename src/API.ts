import axios from 'axios';
import {postUrl} from 'redux/api';
// import {ROUTERS} from 'core/_consts/routes';

const axiosConfig = {
  baseURL: process.env.REACT_APP_API,
};

const instance = axios.create(axiosConfig);
// on successful response
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 500) {
      const backUrl = window.location.pathname !== postUrl ? `?backUrl=${window.location.pathname}` : '';
      window.location.href = backUrl;
    } else {
      throw error.response;
    }
  }
);

export default instance;
