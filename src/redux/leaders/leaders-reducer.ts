import {createReducer} from '@reduxjs/toolkit';
import {ILeader} from './interfaces/index';
import {addLeaders, editLeaders, fetchLeadersSuccess} from './leaders-actions';
import {addLeadersOperation, editLeadersOperation, getLeadersOperation} from './leaders-operations';

const initialState: ILeader[] = [];

const leaders = createReducer(initialState, {
  [addLeaders.type]: addLeadersOperation,
  [editLeaders.type]: editLeadersOperation,
  [fetchLeadersSuccess.type]: getLeadersOperation,
});

export default leaders;
