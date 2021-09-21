import {createReducer} from '@reduxjs/toolkit';
import {ILeader} from './interfaces/index';
import {addLeaders, editLeaders, fetchLeadersSuccess} from './leaders-actions';
import {addLeadersOperations, editLeadersOperations, getLeadersOperations} from './leaders-operations';

const initialState: ILeader[] = [];

const leaders = createReducer(initialState, {
  [addLeaders.type]: addLeadersOperations,
  [editLeaders.type]: editLeadersOperations,
  [fetchLeadersSuccess.type]: getLeadersOperations,
});

export default leaders;
