import {RootState} from '../store';

export const getAllLeaders = (state: RootState) => [...state.leaders];

export const sortAllLeaders = (state: RootState) =>
  getAllLeaders(state)
    .sort((a, b) => b.score - a.score)
    .map((leader, idx: number) => ({...leader, rank: idx + 1}));
