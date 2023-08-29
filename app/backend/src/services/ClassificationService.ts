import { Team } from '../types/Team';
import MatchesModel from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';
// import { ServiceResponse } from './ServiceResponse';

export default class ClassificationService {
  private matchesModel: MatchesModel;
  private teamsModel: TeamModel;
  private name: string;;
  private team: Team[];
  private arrayTeams: Team[];
  private teamsNameInDatabase: string[];
  private arrayFromArray: Team[][];

  constructor() {
    this.matchesModel = new MatchesModel();
    this.teamsModel = new TeamModel();
    this.name = '';
    this.team = [];
    this.arrayTeams = [];
    this.teamsNameInDatabase = [];
    this.arrayFromArray = [];
  }

  private constructorArrayFromArray(url: boolean) {
    return this.teamsNameInDatabase.map((nameTime) => (
      this.arrayTeams.filter((team) => (
        url ? team.homeTeam.teamName === nameTime : team.awayTeam.teamName === nameTime
      ))
    ));
  }

  private victories(): number {
    return this.team.filter((equipe) => {
      if (equipe.homeTeam.teamName === this.name) {
        return equipe.homeTeamGoals > equipe.awayTeamGoals;
      }
      return equipe.awayTeamGoals > equipe.homeTeamGoals;
    }).length;
  }

  private losses(): number {
    return this.team.filter((equipe) => {
      if (equipe.awayTeam.teamName === this.name) {
        return equipe.awayTeamGoals < equipe.homeTeamGoals;
      }
      return equipe.homeTeamGoals < equipe.awayTeamGoals;
    }).length;
  }

  private favor(): number {
    return this.team.reduce((acc, crr) => {
      if (crr.homeTeam.teamName === this.name) {
        return acc + crr.homeTeamGoals;
      }
      return acc + crr.awayTeamGoals;
    }, 0);
  }

  private own(): number {
    return this.team.reduce((acc, crr) => {
      if (crr.homeTeam.teamName === this.name) {
        return acc + crr.awayTeamGoals;
      }
      return acc + crr.homeTeamGoals;
    }, 0);
  }

  private draw(): number {
    return this.team.filter((equipe) => equipe.homeTeamGoals === equipe.awayTeamGoals).length;
  }

  private totalPoints(): number {
    return (this.victories() * 3) + this.draw();
  }

  private classification() {
    return this.arrayFromArray.map((team, index) => {
      this.team = team;
      this.name = this.teamsNameInDatabase[index];
      return { name: this.teamsNameInDatabase[index],
        totalVictories: this.victories(),
        totalDraws: this.draw(),
        totalPoints: this.totalPoints(),
        totalGames: team.length,
        totalLosses: this.losses(),
        goalsFavor: this.favor(),
        goalsOwn: this.own(),
        goalsBalance: this.favor() - this.own(),
        efficiency: Number(((this.totalPoints() / (team.length * 3)) * 100).toFixed(2)) };
    });
  }
  // .sort((a, b) => {
  //   if (a.totalPoints > b.totalPoints) return -1;
  //   if (a.totalPoints < b.totalPoints) return 1;
  //   return 0;
  // });

  public async getClassifications(url: boolean) {
    this.arrayTeams = await this.matchesModel.filterMatches('false') as Team[];
    this.teamsNameInDatabase = (await this.teamsModel.findAll()).map((team) => team.teamName);
    this.arrayFromArray = this.constructorArrayFromArray(url);
    const classification = this.classification().sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      return 0;
    });
    return { status: '', data: classification };
  }
}
