export interface ILeadersReducer {
  currentDay: number;
  leaders: Array<Array<ILeader>>;
}

export interface ILeader {
  id: string;
  name: string;
  rank: number;
  score: number;
  change: number;
}

export interface ILeaderResponse {
  name: string;
  score: number;
}
