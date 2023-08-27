import { InsertMatch, Match } from '../../types/matchRequest';
import { IMatches } from './IMatches';

export interface IMatchesModel {
  findAll(): Promise<IMatches[]>,
  filterMatches(boolean: string): Promise<IMatches[]>,
  update(id: number): Promise<unknown>,
  updateMatchInProgress(id: number, data: Match): Promise<void>,
  insert(data: InsertMatch): Promise<InsertMatch>,
}
