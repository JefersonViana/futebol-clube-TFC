import MatchesModel from '../models/MatchesModel';
import { IMatchesModel } from '../interfaces/matches/IMatchesModel';
import { ServiceMessage, ServiceResponse } from './ServiceResponse';
import { IMatches } from '../interfaces/matches/IMatches';

export default class MatchesService {
  private matchesModel: IMatchesModel;

  constructor(matches: IMatchesModel = new MatchesModel()) {
    this.matchesModel = matches;
  }

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getMatchesFiltered(inProgress: string): Promise<ServiceResponse<IMatches[]>> {
    const allMatchesFiltered = await this.matchesModel.filterMatches(inProgress);
    return { status: 'SUCCESSFUL', data: allMatchesFiltered };
  }

  public async update(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const allMatchesFiltered = await this.matchesModel.update(id);
    console.log('SERVICE', allMatchesFiltered);
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }
}
