import { IMatches } from './IMatches';

export interface IMatchesModel {
  findAll(): Promise<IMatches[]>,
  filterMatches(boolean: string): Promise<IMatches[]>,
}
