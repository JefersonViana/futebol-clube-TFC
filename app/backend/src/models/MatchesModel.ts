import { IMatches } from '../interfaces/matches/IMatches';
import { IMatchesModel } from '../interfaces/matches/IMatchesModel';
import SequelizeMatches from '../database/models/MatchesModel';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { InsertMatch, Match } from '../types/matchRequest';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;

  public async findAll(): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }

  public async filterMatches(inProgress:string): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      where: { inProgress: inProgress === 'false' ? 0 : 1 },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeam, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return dbData;
  }

  public async update(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, {
      where: { id },
    });
  }

  public async updateMatchInProgress(id: number, data: Match): Promise<void> {
    await this.model.update(data, {
      where: { id },
    });
  }

  public async insert(data: InsertMatch): Promise<InsertMatch> {
    const dbData = await this.model.create({
      inProgress: true,
      ...data,
    });
    return dbData;
  }
}
