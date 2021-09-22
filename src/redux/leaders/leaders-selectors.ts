import {RootState} from '../store';

export const getAllLeaders = (state: RootState) => state.leaders;

export const sortAllLeaders = (state: RootState) =>
  state.leaders.sort((a, b) => b.score - a.score).map((leader, idx: number) => ({...leader, rank: idx + 1, change: 0}));
