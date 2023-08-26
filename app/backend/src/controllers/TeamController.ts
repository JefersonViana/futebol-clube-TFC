import { Request, Response } from 'express';
import TeamService from '../services/TeamService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  // public async createTeam(req: Request, res: Response) {
  //   const { data } = await this.teamService.createTeam(req.body);
  //   return res.status(201).json(data);
  // }

  public async getAllTeams(_req: Request, res: Response):Promise<Response> {
    const allTeams = await this.teamService.getAllTeams();
    return res.status(200).json(allTeams.data);
  }

  public async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.teamService.getTeamById(Number(id));
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json(data);
  }
}
