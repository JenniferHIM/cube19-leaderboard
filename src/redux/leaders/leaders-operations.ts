import {v4 as uuidv4} from 'uuid';
import {ILeader, ILeaderResponse, ILeadersReducer} from './interfaces/index';

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

export const getLeadersOperation = (state: ILeadersReducer, {payload}: {payload: ILeaderResponse[]}) => ({
  ...state,
  leaders: [
    ...state.leaders,
    payload.map((item) => ({
      ...item,
      id: uuidv4(),
      rank: [...payload].sort((a, b) => b.score - a.score).findIndex((el) => el.name === item.name) + 1,
      change: state.currentDay
        ? [...state.leaders[state.currentDay - 1].map((i) => ({...i}))]
            .sort((a, b) => b.score - a.score)
            .findIndex((el) => el.name === item.name) -
          [...payload].sort((a, b) => b.score - a.score).findIndex((el) => el.name === item.name)
        : 0,
      // state.currentDay
      // ? state.leaders[state.currentDay - 1].sort().find()
      // : 0,
      // ? (state.leaders.[state.currentDay].sort((a, b) => a.state.currentDay - b.state.[currentDay - 1])?.rank || 0) - item.rank
      // : 0,
    })),
  ],
});

export const setCurrentDayOperation = (state: ILeadersReducer, {payload}: {payload: number}) => ({
  ...state,
  currentDay: payload,
});
