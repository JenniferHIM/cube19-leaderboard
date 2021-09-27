import axios from 'axios';

export const baseUrl = 'http://coding-test.cube19.io/frontend/v1/starting-state';
export const postUrl = 'http://coding-test.cube19.io/frontend/v1/process-user';

const axiosConfig = {
  baseURL: process.env.REACT_APP_API,
};

export const instance = axios.create(axiosConfig);
// on successful response
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 500) {
      return instance(error.config);
    }
    throw error.response;
  }
);
