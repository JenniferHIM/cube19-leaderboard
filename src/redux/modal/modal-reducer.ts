import {createReducer} from '@reduxjs/toolkit';
import {modalAddLeadersActions, modalEditLeadersActions, modalPostLeadersAction} from './modal-actions';

export const isModalAddLeaders = createReducer(false, {
  [modalAddLeadersActions.type]: (state) => !state,
});

export const isModalEditLeaders = createReducer(false, {
  [modalEditLeadersActions.type]: (state) => !state,
});

export const isModalPostLeaders = createReducer(false, {
  [modalPostLeadersAction.type]: (state) => !state,
});
