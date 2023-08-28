/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
const matches = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 3,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 4,
    homeTeamId: 3,
    homeTeamGoals: 0,
    awayTeamId: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  },
  {
    id: 5,
    homeTeamId: 7,
    homeTeamGoals: 1,
    awayTeamId: 10,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo',
    },
    awayTeam: {
      teamName: 'Minas Brasília',
    },
  },
  {
    id: 6,
    homeTeamId: 5,
    homeTeamGoals: 1,
    awayTeamId: 13,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Cruzeiro',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 7,
    homeTeamId: 12,
    homeTeamGoals: 2,
    awayTeamId: 6,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 8,
    homeTeamId: 15,
    homeTeamGoals: 0,
    awayTeamId: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
  {
    id: 9,
    homeTeamId: 1,
    homeTeamGoals: 0,
    awayTeamId: 12,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'Palmeiras',
    },
  },
  {
    id: 10,
    homeTeamId: 2,
    homeTeamGoals: 0,
    awayTeamId: 9,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 11,
    homeTeamId: 13,
    homeTeamGoals: 1,
    awayTeamId: 3,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Botafogo',
    },
  },
  {
    id: 12,
    homeTeamId: 6,
    homeTeamGoals: 0,
    awayTeamId: 4,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 13,
    homeTeamId: 8,
    homeTeamGoals: 2,
    awayTeamId: 5,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Grêmio',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 14,
    homeTeamId: 14,
    homeTeamGoals: 2,
    awayTeamId: 16,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 15,
    homeTeamId: 10,
    homeTeamGoals: 0,
    awayTeamId: 15,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'São José-SP',
    },
  },
  {
    id: 16,
    homeTeamId: 11,
    homeTeamGoals: 0,
    awayTeamId: 7,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Napoli-SC',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 17,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 8,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 18,
    homeTeamId: 12,
    homeTeamGoals: 4,
    awayTeamId: 5,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 19,
    homeTeamId: 11,
    homeTeamGoals: 2,
    awayTeamId: 2,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Napoli-SC',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  },
  {
    id: 20,
    homeTeamId: 7,
    homeTeamGoals: 0,
    awayTeamId: 9,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 21,
    homeTeamId: 6,
    homeTeamGoals: 3,
    awayTeamId: 13,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 22,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 3,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Botafogo',
    },
  },
  {
    id: 23,
    homeTeamId: 15,
    homeTeamGoals: 2,
    awayTeamId: 16,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 24,
    homeTeamId: 10,
    homeTeamGoals: 2,
    awayTeamId: 14,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 25,
    homeTeamId: 2,
    homeTeamGoals: 0,
    awayTeamId: 6,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 26,
    homeTeamId: 13,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
  {
    id: 27,
    homeTeamId: 5,
    homeTeamGoals: 1,
    awayTeamId: 15,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Cruzeiro',
    },
    awayTeam: {
      teamName: 'São José-SP',
    },
  },
  {
    id: 28,
    homeTeamId: 16,
    homeTeamGoals: 3,
    awayTeamId: 7,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 29,
    homeTeamId: 9,
    homeTeamGoals: 0,
    awayTeamId: 4,
    awayTeamGoals: 4,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 30,
    homeTeamId: 3,
    homeTeamGoals: 0,
    awayTeamId: 12,
    awayTeamGoals: 4,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Palmeiras',
    },
  },
  {
    id: 31,
    homeTeamId: 8,
    homeTeamGoals: 2,
    awayTeamId: 10,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Grêmio',
    },
    awayTeam: {
      teamName: 'Minas Brasília',
    },
  },
  {
    id: 32,
    homeTeamId: 14,
    homeTeamGoals: 5,
    awayTeamId: 11,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 33,
    homeTeamId: 1,
    homeTeamGoals: 1,
    awayTeamId: 16,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 34,
    homeTeamId: 9,
    homeTeamGoals: 3,
    awayTeamId: 6,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 35,
    homeTeamId: 10,
    homeTeamGoals: 1,
    awayTeamId: 5,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 36,
    homeTeamId: 2,
    homeTeamGoals: 0,
    awayTeamId: 7,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 37,
    homeTeamId: 15,
    homeTeamGoals: 0,
    awayTeamId: 13,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 38,
    homeTeamId: 14,
    homeTeamGoals: 2,
    awayTeamId: 4,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 39,
    homeTeamId: 3,
    homeTeamGoals: 2,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 40,
    homeTeamId: 12,
    homeTeamGoals: 4,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 42,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
  {
    id: 48,
    homeTeamId: 13,
    homeTeamGoals: 3,
    awayTeamId: 2,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  },
];

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

module.exports = {
  matches,
  arrayTeams,
};

// const constructorArrayFromArray = (array) => (
//   arrayTeams.map((nameTime) => (
//     array.filter((team) => (
//       team.homeTeam.teamName === nameTime || team.awayTeam.teamName === nameTime
//     ))
//   ))
// );

// const classificacaoDeTimes = () => {
//   const arrayFromArray = constructorArrayFromArray(matches);
//   let name = '';
//   let totalPoints = '';
//   let totalGames = '';
//   let totalVictories = '';
//   let totalDraws = '';
//   let totalLosses = '';
//   let goalsFavor = '';
//   let goalsOwn = '';
//   let goalsBalance = '';
//   let efficiency = '';
//   return arrayFromArray.map((team, index) => {
//     name = arrayTeams[index];
//     totalVictories = team.filter((equipe) => {
//       if (equipe.homeTeam.teamName === name) {
//         return equipe.homeTeamGoals > equipe.awayTeamGoals;
//       }
//       return equipe.awayTeamGoals > equipe.homeTeamGoals;
//     }).length;
//     totalDraws = team.filter((equipe) => equipe.homeTeamGoals === equipe.awayTeamGoals).length;
//     totalPoints = (totalVictories * 3) + totalDraws;
//     totalGames = team.length;
//     totalLosses = team.filter((equipe) => {
//       if (equipe.awayTeam.teamName === name) {
//         return equipe.awayTeamGoals < equipe.homeTeamGoals;
//       }
//       return equipe.homeTeamGoals < equipe.awayTeamGoals;
//     }).length;
//     goalsFavor = team.reduce((acc, crr) => {
//       if (crr.homeTeam.teamName === name) {
//         return acc + crr.homeTeamGoals;
//       }
//       return acc + crr.awayTeamGoals;
//     }, 0);
//     goalsOwn = team.reduce((acc, crr) => {
//       if (crr.homeTeam.teamName === name) {
//         return acc + crr.awayTeamGoals;
//       }
//       return acc + crr.homeTeamGoals;
//     }, 0);
//     goalsBalance = goalsFavor - goalsOwn;
//     efficiency = Number(([totalPoints / (totalGames * 3)] * 100).toFixed(2));
//     return {
//       name,
//       totalPoints,
//       totalGames,
//       totalVictories,
//       totalDraws,
//       totalLosses,
//       goalsFavor,
//       goalsOwn,
//       goalsBalance,
//       efficiency,
//     };
//   });
// };

// console.log(classificacaoDeTimes());

// const sp = matches.filter((team) => (
//   team.homeTeam.teamName === 'Palmeiras' || team.awayTeam.teamName === 'Palmeiras'
// ));
// console.log(sp);

// const totalVictories = sp.filter((team) => {
//   if (team.homeTeam.teamName === 'Palmeiras') {
//     return team.homeTeamGoals > team.awayTeamGoals;
//   }
//   return team.awayTeamGoals > team.homeTeamGoals;
// }).length;

// const totalDraws = sp.filter((team) => team.homeTeamGoals === team.awayTeamGoals).length;

// const goalsFavor = sp.reduce((acc, crr) => {
//   if (crr.homeTeam.teamName === 'Palmeiras') {
//     return acc + crr.homeTeamGoals;
//   }
//   return acc + crr.awayTeamGoals;
// }, 0);

// const goalsOwn = sp.reduce((acc, crr) => {
//   if (crr.homeTeam.teamName === 'Palmeiras') {
//     return acc + crr.awayTeamGoals;
//   }
//   return acc + crr.homeTeamGoals;
// }, 0);

// const totalPoints = (totalVictories * 3) + totalDraws;
// const totalGames = sp.length;

// const time = {
//   name: 'Palmeiras',
//   totalPoints,
//   totalGames,
//   totalVictories,
//   totalDraws,
//   totalLosses: sp.filter((team) => {
//     if (team.awayTeam.teamName === 'Palmeiras') {
//       return team.awayTeamGoals < team.homeTeamGoals;
//     }
//     return team.homeTeamGoals < team.awayTeamGoals;
//   }).length,
//   goalsFavor,
//   goalsOwn,
//   goalsBalance: goalsFavor - goalsOwn,
//   efficiency: Number(([totalPoints / (totalGames * 3)] * 100).toFixed(2)),
// };
// console.table(time);
