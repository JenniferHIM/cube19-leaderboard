import {createReducer} from '@reduxjs/toolkit';
import {ILeader} from './interfaces/index';
import {
  addLeaders,
  editLeaders,
  fetchLeadersSuccess,
  postLeadersSuccess,
  addPrevLeadersAction,
} from './leaders-actions';

import {
  addLeadersOperation,
  editLeadersOperation,
  getLeadersOperation,
  addPrevLeadersOperation,
} from './leaders-operations';

const initialState: ILeader[] = [];

export const leaders = createReducer(initialState, {
  [addLeaders.type]: addLeadersOperation,
  [editLeaders.type]: editLeadersOperation,
  [fetchLeadersSuccess.type]: getLeadersOperation,
  [postLeadersSuccess.type]: addLeadersOperation,
});

const initialStatePrevLeaders: ILeader[][] = [];

export const prevLeaders = createReducer(initialStatePrevLeaders, {
  [addPrevLeadersAction.type]: addPrevLeadersOperation,
});
