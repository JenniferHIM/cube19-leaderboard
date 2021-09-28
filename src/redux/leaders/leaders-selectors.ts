import {RootState} from '../store';

export const getAllLeaders = (state: RootState) => state.leaders;

export const sortAllLeaders = (state: RootState) =>
  state.leaders.sort((a, b) => b.score - a.score).map((leader, idx: number) => ({...leader, rank: idx + 1, change: 0}));

export const getHighScoreLeaders = (state: RootState) => {
  const allLeaders = getAllLeaders(state)
    .flat(2)
    .sort((a, b) => b.score - a.score);
  return allLeaders.slice(0, 4);
};
