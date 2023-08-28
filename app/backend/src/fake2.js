const { matches } = require('./fake');

const arrayTeams = ['Avaí/Kindermann',
  'Bahia',
  'Botafogo',
  'Corinthians',
  'Cruzeiro',
  'Ferroviária',
  'Flamengo',
  'Grêmio',
  'Internacional',
  'Minas Brasília',
  'Napoli-SC', 'Palmeiras', 'Real Brasília', 'Santos', 'São José-SP', 'São Paulo'];

const constructorArrayFromArray = (array) => (
  arrayTeams.map((nameTime) => (
    array.filter((team) => (
      team.homeTeam.teamName === nameTime || team.awayTeam.teamName === nameTime
    ))
  ))
);

const victories = (team, name) => (
  team.filter((equipe) => {
    if (equipe.homeTeam.teamName === name) {
      return equipe.homeTeamGoals > equipe.awayTeamGoals;
    }
    return equipe.awayTeamGoals > equipe.homeTeamGoals;
  }).length
);

const losses = (team, name) => (
  team.filter((equipe) => {
    if (equipe.awayTeam.teamName === name) {
      return equipe.awayTeamGoals < equipe.homeTeamGoals;
    }
    return equipe.homeTeamGoals < equipe.awayTeamGoals;
  }).length
);

const favor = (team, name) => (
  team.reduce((acc, crr) => {
    if (crr.homeTeam.teamName === name) {
      return acc + crr.homeTeamGoals;
    }
    return acc + crr.awayTeamGoals;
  }, 0)
);

const own = (team, name) => (
  team.reduce((acc, crr) => {
    if (crr.homeTeam.teamName === name) {
      return acc + crr.awayTeamGoals;
    }
    return acc + crr.homeTeamGoals;
  }, 0)
);

const draw = (team) => (
  team.filter((equipe) => equipe.homeTeamGoals === equipe.awayTeamGoals).length
);

const totalPoints = (team, index) => (
  (victories(team, arrayTeams[index]) * 3) + draw(team)
);

const classificacaoDeTimes = () => {
  const arrayFromArray = constructorArrayFromArray(matches);
  return arrayFromArray.map((team, index) => ({
    name: arrayTeams[index],
    totalVictories: victories(team, arrayTeams[index]),
    totalDraws: draw(team),
    totalPoints: totalPoints(team, index),
    totalGames: team.length,
    totalLosses: losses(team, arrayTeams[index]),
    goalsFavor: favor(team, arrayTeams[index]),
    goalsOwn: own(team, arrayTeams[index]),
    goalsBalance: favor(team, arrayTeams[index]) - own(team, arrayTeams[index]),
    efficiency: Number(([totalPoints(team, index) / (team.length * 3)] * 100).toFixed(2)),
  }));
};
// return {
//   name,
//   totalPoints,
//   totalGames,
//   totalVictories,
//   totalDraws,
//   totalLosses,
//   goalsFavor,
//   goalsOwn,
//   goalsBalance,
//   efficiency,
// };

console.log(classificacaoDeTimes());
