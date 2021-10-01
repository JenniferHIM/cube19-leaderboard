import {createAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {v4 as uuidv4} from 'uuid';
import {Dispatch} from 'redux';
import {ILeader} from './interfaces';
import {instance, baseUrl, postUrl} from '../api';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction<ILeader>('leaders/edit');

export const fetchLeadersRequest = createAction('leaders/fetchLeadersRequest');
export const fetchLeadersSuccess = createAction<Array<ILeader>>('leaders/fetchLeadersSuccess');
export const fetchLeadersError = createAction('leaders/fetchLeadersError');

export const postLeadersRequest = createAction('leaders/postLeadersRequest');
export const postLeadersSuccess = createAction<ILeader>('leaders/postLeadersSuccess');
export const postLeadersError = createAction('leaders/postLeadersError');

export const setCurrentDay = createAction<number>('leaders/setCurrentDay');

export const addPrevLeadersAction = createAction('leaders/addPrevLeaders');

export const fetchLeaders = () => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await instance.get(baseUrl);
    const leaders = data.map((item: ILeader) => ({name: item.name, score: item.score ? item.score : 0}));
    dispatch(fetchLeadersSuccess(leaders));
  } catch (error) {
    toast.error('Error request');
    dispatch(fetchLeadersError());
  }
};

export const postLeaders = (leader: {username: string; score: number}) => async (dispatch: Dispatch) => {
  dispatch(fetchLeadersRequest());
  try {
    const {data} = await instance.post(postUrl, {username: leader.username});
    const leaderToAdd: ILeader = {
      name: leader.username,
      score: leader.score,
      id: uuidv4(),
      rank: 0,
      change: 0,
    };
    dispatch(postLeadersSuccess(leaderToAdd));
  } catch (error) {
    toast.error('Error request');
    dispatch(postLeadersError());
  }
};
