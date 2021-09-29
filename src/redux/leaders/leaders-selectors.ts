import {RootState} from '../store';
import {ILeader} from './interfaces';

export const getAllLeaders = (state: RootState) => state.leaders;
export const getAllPrevLeaders = (state: RootState) => [...state.prevLeaders];

export const sortAllLeaders = (state: RootState) =>
  state.leaders.sort((a, b) => b.score - a.score).map((leader, idx) => ({...leader, rank: idx + 1, change: 0}));

export const getHighScoreLeaders = (state: RootState) => {
  const allLeaders = getAllLeaders(state)
    .flat(2)
    .sort((a, b) => b.score - a.score);
  return allLeaders.slice(0, 4);
};

export const sortAllPrevLeaders = (state: RootState) =>
  getAllPrevLeaders(state).map((leaders: ILeader[]) => {
    [...leaders].sort((a, b) => b.score - a.score).map((leader, idx) => ({...leader, rank: idx + 1, change: 0}));
    return leaders;
  });
