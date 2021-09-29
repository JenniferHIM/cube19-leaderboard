import {v4 as uuidv4} from 'uuid';
import {ILeader} from './interfaces/index';

export const addLeadersOperation = (state: ILeader[], {payload}: {payload: ILeader}) => [...state, {...payload}];

export const editLeadersOperation = (state: ILeader[], {payload}: {payload: ILeader}) =>
  state.map((leader) => (leader.id === payload.id ? payload : leader));

export const getLeadersOperation = (state: ILeader[], {payload}: {payload: ILeader[]}) => [
  ...payload.map((item) => ({...item, id: uuidv4(), rank: 0, change: 0})),
];

export const addPrevLeadersOperation = (state: ILeader[][], {payload}: {payload: ILeader[]}) => [...state, payload];
