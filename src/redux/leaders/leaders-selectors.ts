import {RootState} from '../store';

export const getAllLeaders = (state: RootState) => state.leaders.leaders;
export const getCurrentDay = (state: RootState) => state.leaders.currentDay;

export const sortAllLeaders = (state: RootState) =>
  state.leaders.leaders[state.leaders.currentDay]
    .sort((a, b) => b.score - a.score)
    .map((leader, idx) => ({...leader, rank: idx + 1, change: 0}));

export const getHighScoreLeaders = (state: RootState) => {
  const allLeaders = state.leaders.leaders[state.leaders.currentDay]?.sort((a, b) => b.score - a.score);
  return allLeaders ? allLeaders.slice(0, 4) : [];
};
