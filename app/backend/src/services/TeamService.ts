// import { NewEntity } from '../interfaces';
import { ITeam } from '../interfaces/teams/ITeam';
import { ITeamModel } from '../interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import { ServiceResponse } from './ServiceResponse';

export default class TeamService {
  private teamModel: ITeamModel;

  constructor(team:ITeamModel = new TeamModel()) {
    this.teamModel = team;
  }

  // public async createTeam(team: NewEntity<ITeam>): Promise<ServiceResponse<ITeam>> {
  //   const newTeam = await this.teamModel.create(team);
  //   return { status: 'SUCCESSFUL', data: newTeam };
  // }

  public async getAllTeams(): Promise<ServiceResponse<ITeam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getTeamById(id: number): Promise<ServiceResponse<ITeam>> {
    const getTeam = await this.teamModel.findById(id);
    if (!getTeam) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: getTeam };
  }
}
