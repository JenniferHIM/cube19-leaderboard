import {RootState} from '../store';
import {ILeader} from './interfaces';

export const getAllLeaders = (state: RootState) => state.leaders.leaders;
export const getCurrentDay = (state: RootState) => state.leaders.currentDay;

export const sortAllLeaders = (state: RootState) =>
  state.leaders.leaders[state.leaders.currentDay]
    .sort((a, b) => b.score - a.score)
    .map((leader, idx) => ({...leader, rank: idx + 1, change: 0}));

export const getHighScoreLeaders = (state: RootState) => {
  const allLeaders =
    (state.leaders.leaders[state.leaders.currentDay] && [...state.leaders.leaders[state.leaders.currentDay]]) || [];
  const namesUnique = [...allLeaders.map((leader) => leader.name)];
  const highScoreLeaders: ILeader[] = [];

  allLeaders.map((leader: ILeader) => {
    if (namesUnique.includes(leader.name)) {
      highScoreLeaders.push(leader);
      const nameIndex = namesUnique.indexOf(leader.name);
      namesUnique.splice(nameIndex, 1);
    }

    return leader;
  });

  return allLeaders.sort((a, b) => b.score - a.score).slice(0, 4);
};
