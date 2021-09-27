import React from 'react';
import ReactDOM from 'react-dom';
import {baseUrl} from 'redux/api';
import {Provider} from 'react-redux';
import axios from 'axios';
import store from './redux/store';
import App from './App';

const axiosConfig = {
  baseURL: process.env.REACT_APP_API,
};

const instance = axios.create(axiosConfig);
// on successful response
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 500) {
      const backUrl = window.location.pathname !== baseUrl ? `?backUrl=${window.location.pathname}` : '';
      window.location.href = backUrl;
    } else {
      throw error.response;
    }
  }
);

export default instance;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
