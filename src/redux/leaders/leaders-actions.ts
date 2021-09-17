import {createAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import axios from 'axios';
import {ILeader} from './interfaces';
import {baseUrl} from '../api';
import {fetchLeadersRequest} from './leaders-types';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction<ILeader>('leaders/edit');

const fetchLeaders = () => async (dispatch: any) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await axios.get(`${baseUrl}`);
  } catch (error) {
    toast.error('Error request');
  }
};
