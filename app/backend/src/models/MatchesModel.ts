import { IMatches } from '../interfaces/matches/IMatches';
import { IMatchesModel } from '../interfaces/matches/IMatchesModel';
import SequelizeMatches from '../database/models/MatchesModel';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  async findAll(): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }

  async filterMatches(inProgress:string): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      where: { inProgress: inProgress === 'false' ? 0 : 1 },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }
}
