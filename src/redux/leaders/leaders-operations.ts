import {ILeader} from './interfaces/index';

export const addLeadersOperations = (state: ILeader[], {payload}: {payload: ILeader}) => [...state, {...payload}];

export const editLeadersOperations = (state: ILeader[], {payload}: {payload: ILeader}) =>
  state.map((leader) => (leader.id === payload.id ? payload : leader));
