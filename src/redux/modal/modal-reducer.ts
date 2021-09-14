import {createReducer} from '@reduxjs/toolkit';
import {modalAddLeadersActions, modalEditLeadersActions} from './modal-actions';

export const isModalAddLeaders = createReducer(false, {
  [modalAddLeadersActions.type]: (state) => !state,
});

export const isModalEditLeaders = createReducer(false, {
  [modalEditLeadersActions.type]: (state) => !state,
});
