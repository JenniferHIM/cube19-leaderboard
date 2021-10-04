import {v4 as uuidv4} from 'uuid';
import {ILeader, ILeadersReducer} from './interfaces/index';

export const addLeadersOperation = (state: ILeadersReducer, {payload}: {payload: ILeader}) => ({
  ...state,
  leaders: [...state.leaders.map((item, index) => (state.currentDay === index ? [...item, payload] : item))],
});

export const editLeadersOperation = (state: ILeadersReducer, {payload}: {payload: ILeader}) => ({
  ...state,
  leaders: [
    ...state.leaders.map((item, index) =>
      state.currentDay === index ? [...item.map((leader) => (leader.id === payload.id ? payload : leader))] : item
    ),
  ],
});

export const getLeadersOperation = (state: ILeadersReducer, {payload}: {payload: ILeader[]}) => ({
  ...state,
  leaders: [...state.leaders, payload.map((item) => ({...item, id: uuidv4(), rank: 0, change: 0}))],
});

export const setCurrentDayOperation = (state: ILeadersReducer, {payload}: {payload: number}) => ({
  ...state,
  currentDay: payload,
});
