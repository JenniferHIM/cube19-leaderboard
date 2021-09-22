import {createAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import axios from 'axios';
import {Dispatch} from 'redux';
import {ILeader} from './interfaces';
import {baseUrl} from '../api';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction<ILeader>('leaders/edit');

// export const addLeadersActions = createAction('leaders/AddLeaders');
// export const editLeadersActions = createAction('leaders/EditLeaders');

export const fetchLeadersRequest = createAction('leaders/fetchLeadersRequest');
export const fetchLeadersSuccess = createAction<Array<ILeader>>('leaders/fetchLeadersSuccess');
export const fetchLeadersError = createAction('leaders/fetchLeadersError');

export const fetchLeaders = () => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await axios.get(baseUrl);
    const leader = data.map((item: ILeader) => ({name: item.name, score: item.score ? item.score : 0}));
    dispatch(fetchLeadersSuccess(leader));
  } catch (error) {
    toast.error('Error request');
    dispatch(fetchLeadersError());
  }
};

// const fetchLeaders = () => async (dispatch: Dispatch) => {
//   dispatch(fetchLeadersRequest());
//   try {
//     const {data} = await axios.get(baseUrl);
//   } catch (error) {
//     toast.error('Error request');
//   }
// };
// export const addLeaders = createAsyncThunk<ILeader>('leaders/add', async (newObject) => {
//   const leaders = await addLeadersRequest(newObject);
//   return leaders;
// });

// export const editLeaders = createAsyncThunk('leaders/edit', async (id: number) => {
//   await editLeadersRequest(id);
// });
