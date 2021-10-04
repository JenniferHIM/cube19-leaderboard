import {createReducer} from '@reduxjs/toolkit';
import {ILeadersReducer} from './interfaces/index';
import {addLeaders, editLeaders, fetchLeadersSuccess, postLeadersSuccess, setCurrentDay} from './leaders-actions';

import {
  addLeadersOperation,
  editLeadersOperation,
  getLeadersOperation,
  setCurrentDayOperation,
} from './leaders-operations';

const initialState: ILeadersReducer = {
  currentDay: 0,
  leaders: [],
};

export const leaders = createReducer(initialState, {
  [addLeaders.type]: addLeadersOperation,
  [editLeaders.type]: editLeadersOperation,
  [fetchLeadersSuccess.type]: getLeadersOperation,
  [postLeadersSuccess.type]: addLeadersOperation,
  [setCurrentDay.type]: setCurrentDayOperation,
});
