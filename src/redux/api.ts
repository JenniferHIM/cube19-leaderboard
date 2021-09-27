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

// export default instance;
// export async function getLeaders() {
//   try {
//     const {data} = await axios.get(baseUrl);
//     return data;
//   } catch (error) {
//     toast.error('Getting Leaders error.');
//     return new Promise(isRejected);
//   }
// }

// export async function postLeaders() {
//   try {
//     const {data} = await axios.post(postUrl);
//     return data;
//   } catch (error) {
//     toast.error('Posting Leaders error');
//     return new Promise(isRejected);
//   }
// }

// export async function addLeadersRequest(newObject: ILeader) {
//   try {
//     const {data} = await axios.post('/leaders', newObject);
//     return data;
//   } catch (error) {
//     toast.error('Adding new leader error.');
//     return new Promise(isRejected);
//   }
// }

// export async function editLeadersRequest(id: number) {
//   try {
//     await axios.delete(`/leaders/${id}`);
//     return id;
//   } catch (error) {
//     toast.error('Editing leader error.');
//     return new Promise(isRejected);
//   }
// }
