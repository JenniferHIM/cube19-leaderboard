import {createAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import axios from 'axios';
import {Dispatch} from 'redux';
import {ILeader} from './interfaces';
import {baseUrl, postUrl} from '../api';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction<ILeader>('leaders/edit');

export const fetchLeadersRequest = createAction('leaders/fetchLeadersRequest');
export const fetchLeadersSuccess = createAction<Array<ILeader>>('leaders/fetchLeadersSuccess');
export const fetchLeadersError = createAction('leaders/fetchLeadersError');

export const postLeadersRequest = createAction('leaders/postLeadersRequest');
export const postLeadersSuccess = createAction<ILeader>('leaders/postLeadersSuccess');
export const postLeadersError = createAction('leaders/postLeadersError');

export const fetchLeaders = () => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await axios.get(baseUrl);
    const leaders = data.map((item: ILeader) => ({name: item.name, score: item.score ? item.score : 0}));
    dispatch(fetchLeadersSuccess(leaders));
  } catch (error) {
    toast.error('Error request');
    dispatch(fetchLeadersError());
  }
};

export const postLeaders = (leader: {name: string; score: number}) => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await axios.post(postUrl, leader);
    const leaderToAdd: ILeader = {
      id: data.id,
      name: data.name,
      score: data.score,
      rank: data.rank,
      change: data.change,
    };
    dispatch(postLeadersSuccess(leaderToAdd));
  } catch (error) {
    toast.error('Error request');
    dispatch(postLeadersError());
  }
};
