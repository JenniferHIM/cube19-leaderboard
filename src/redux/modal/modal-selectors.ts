import {RootState} from '../store';

export const modalAddLeadersSelectors = (state: RootState) => state.isModalAddLeaders;

export const modalEditLeadersSelectors = (state: RootState) => state.isModalEditLeaders;
