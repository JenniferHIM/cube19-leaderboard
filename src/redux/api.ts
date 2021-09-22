import {isRejected} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';
import {ILeader} from './leaders/interfaces';

export const baseUrl = 'http://coding-test.cube19.io/frontend/v1/starting-state';

export async function getLeaders() {
  try {
    const {data} = await axios.get(baseUrl);
    return data;
  } catch (error) {
    toast.error('Getting Leaders error.');
    return new Promise(isRejected);
  }
}

export async function addLeadersRequest(newObject: ILeader) {
  try {
    const {data} = await axios.post('/leaders', newObject);
    return data;
  } catch (error) {
    toast.error('Adding new leader error.');
    return new Promise(isRejected);
  }
}

export async function editLeadersRequest(id: number) {
  try {
    await axios.delete(`/leaders/${id}`);
    return id;
  } catch (error) {
    toast.error('Editing leader error.');
    return new Promise(isRejected);
  }
}
