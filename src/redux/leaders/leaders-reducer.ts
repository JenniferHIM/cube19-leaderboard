import {createReducer} from '@reduxjs/toolkit';
import {ILeader} from './interfaces/index';
import {addLeaders, editLeaders} from './leaders-actions';
import {addLeadersOperations, editLeadersOperations} from './leaders-operations';

const initialState: ILeader[] = [];

const leaders = createReducer(initialState, {
  [addLeaders.type]: addLeadersOperations,
  [editLeaders.type]: editLeadersOperations,
});

export default leaders;
