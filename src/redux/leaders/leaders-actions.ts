import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import axios from 'axios';
import {Dispatch} from 'redux';
import {ILeader} from './interfaces';
import {baseUrl} from '../api';
import {fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersError} from './leaders-types';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction<ILeader>('leaders/edit');

export const fetchLeaders = () => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await axios.get(baseUrl);
    const leader = data.map((item: ILeader) => ({name: item.name, score: item.score ? item.score : 0}));
    dispatch({type: [fetchLeadersSuccess.type], payload: leader});
  } catch (error) {
    toast.error('Error request');
    dispatch({type: [fetchLeadersError.type]});
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
