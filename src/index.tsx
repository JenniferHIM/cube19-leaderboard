import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';
import store from './redux/store';
import App from './App';

// axios.interceptors.request.use((request) => {
//   console.log(request);
//   return request;
// });

axios.interceptors.response.use((response) => response);

// axios.post('http://coding-test.cube19.io/frontend/v1/process-user', {});
// const res = await axios.get('http://coding-test.cube19.io/frontend/v1/process-user');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
