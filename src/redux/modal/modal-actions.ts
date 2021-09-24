import {createAction} from '@reduxjs/toolkit';
import {Dispatch} from 'redux';
import {toast} from 'react-toastify';
import axios from 'axios';
import {ILeader} from '../leaders/interfaces';
import {postUrl} from '../api';

export const modalAddLeadersActions = createAction('modal/modalAddLeaders');

export const modalEditLeadersActions = createAction('modal/isModalEditLeaders');

export const modalPostLeadersAction = createAction('modal/isModalPostLeaders');

export const postLeadersRequest = createAction('leaders/postLeadersRequest');
export const postLeadersSuccess = createAction<Array<ILeader>>('leaders/postLeadersSuccess');
export const postLeadersError = createAction('leaders/postLeadersError');

export const postLeaders = async (dispatch: Dispatch) => {
  dispatch(postLeadersRequest());
  // try {
  //   const {data} = await axios.post(postUrl);
  //   const leaders = data.map();
  //   dispatch(postLeadersSuccess(leaders));
  // } catch (error) {
  //   toast.error('Error request');
  // }

  try {
    await axios.post(postUrl, {
      username: 'the username entered',
    });
  } catch (error) {
    toast.error('Error request');
    dispatch(postLeadersError());
  }
};
