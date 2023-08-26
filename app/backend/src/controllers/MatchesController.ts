import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private matchesService: MatchesService;

  constructor(matches: MatchesService = new MatchesService()) {
    this.matchesService = matches;
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
}
