import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import { InsertMatch, Match } from '../types/matchRequest';
import TeamService from '../services/TeamService';

export default class MatchesController {
  private matchesService: MatchesService;
  private teamService: TeamService;

  constructor(matches: MatchesService = new MatchesService()) {
    this.matchesService = matches;
    this.teamService = new TeamService();
  }

  public async getMatchesFiltered(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress === 'false' || inProgress === 'true') {
      const allMatchesFiltered = await this.matchesService.getMatchesFiltered(inProgress);
      return res.status(200).json(allMatchesFiltered.data);
    }
    const allMatches = await this.matchesService.getAllMatches();
    return res.status(200).json(allMatches.data);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const allMatchesFiltered = await this.matchesService.update(Number(id));
    return res.status(200).json(allMatchesFiltered.data);
  }

  public async updateMatchInProgress(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const data: Match = { homeTeamGoals, awayTeamGoals };
    const matchUpdated = await this.matchesService.updateMatchInProgress(Number(id), data);
    return res.status(200).json(matchUpdated.data);
  }

  private async checksiftheteamexists(teams: Array<number>): Promise<boolean> {
    const allTeams = await Promise.all(
      teams.map(async (team) => this.teamService.getTeamById(team)),
    );
    return allTeams.every((team) => team.status === 'SUCCESSFUL');
  }

  public async insert(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
    const notExistTeam = await this.checksiftheteamexists([homeTeamId, awayTeamId]);
    if (!notExistTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    const data: InsertMatch = { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals };
    const allMatchesFiltered = await this.matchesService.insert(data);
    return res.status(201).json(allMatchesFiltered.data);
  }
}
