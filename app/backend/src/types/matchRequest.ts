export type Match = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};

export type InsertMatch = {
  id?: number,
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress?: boolean,
};
