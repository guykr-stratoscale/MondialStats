import * as d3 from 'd3'

const assignBets = (game_bets, game_index) => (p, i) => {
  const players_guess = game_bets.find(g => g.player_id === i).answer
  const bets = p.bets
  bets[game_index].answers = [players_guess]
  return { ...p, bets }
}
const fixGameOrder = (player) => {
  const germanyGame = player.bets[27]
  player.bets[27] = player.bets[28]
  player.bets[28] = germanyGame

  const peruGame = player.bets[36]
  player.bets[36] = player.bets[37]
  player.bets[37] = peruGame

  return player
}

const PLAYERS = [
  {
    name: 'קרמני',
    champion: 'Brazil',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
        answers: [1],
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
        answers: [2],
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'גלילאו',
    champion: 'France',
    scorer: 'Griezmann',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
        answers: [1],
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'איטזיג',
    champion: 'Germany',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
        answers: [1],
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'שריקי',
    champion: 'Germany',
    scorer: 'Griezmann',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
        answers: [3],
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '5',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'היו״ר',
    champion: 'Germany',
    scorer: 'Timo Werner',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
        answers: [1],
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'פוגל',
    champion: 'Brazil',
    scorer: 'Revivo',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
        answers: [2],
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '5',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'יונלף',
    champion: 'Brazil',
    scorer: 'Gabriel Jesus',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
        answers: [0],
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
    ],
  },
  {
    name: 'ישקה',
    champion: 'Germany',
    scorer: 'Thomas Müller',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
        answers: [0],
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '6',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '6',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '5',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
    ],
  },
  {
    name: 'שפיגלית',
    champion: 'Brazil',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
        answers: [2],
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'שפיגלון',
    champion: 'Spain',
    scorer: 'Lewandowski',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
        answers: [1],
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'עציץ',
    champion: 'France',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
        answers: [1],
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'מושון',
    champion: 'Germany',
    scorer: 'Ronaldo',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
        answers: [4],
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '5',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'סמי',
    champion: 'Germany',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
        answers: [0],
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
    ],
  },
]

const game_11_guesses = [
  {
    player_id: 7,
    answer: 'Brazil',
  },
  {
    player_id: 6,
    answer: 'Brazil',
  },
  {
    player_id: 2,
    answer: 'Brazil',
  },
  {
    player_id: 0,
    answer: 'Brazil',
  },
  {
    player_id: 12,
    answer: 'Brazil',
  },
  {
    player_id: 11,
    answer: 'Brazil',
  },
  {
    player_id: 8,
    answer: 'Brazil',
  },
  {
    player_id: 4,
    answer: 'Brazil',
  },
  {
    player_id: 3,
    answer: 'Brazil',
  },
  {
    player_id: 10,
    answer: 'Switzerland',
  },
  {
    player_id: 5,
    answer: 'Brazil',
  },
  {
    player_id: 1,
    answer: 'Brazil',
  },
  {
    player_id: 9,
    answer: 'Switzerland',
  },
]
const game_16_answers = [
  {
    player_id: 7,
    answer: 'black',
  },
  {
    player_id: 6,
    answer: 'black',
  },
  {
    player_id: 2,
    answer: 'white',
  },
  {
    player_id: 0,
    answer: 'white',
  },
  {
    player_id: 12,
    answer: 'white',
  },
  {
    player_id: 11,
    answer: 'black',
  },
  {
    player_id: 8,
    answer: 'white',
  },
  {
    player_id: 4,
    answer: 'white',
  },
  {
    player_id: 3,
    answer: 'black',
  },
  {
    player_id: 10,
    answer: 'white',
  },
  {
    player_id: 5,
    answer: 'white',
  },
  {
    player_id: 1,
    answer: 'white',
  },
  {
    player_id: 9,
    answer: 'white',
  },
]
export default PLAYERS.map(fixGameOrder).map(assignBets(game_11_guesses, 10)).map(assignBets(game_16_answers, 15))

export const playerColor = d3.scaleSequential(d3.interpolateSinebow).domain([0, PLAYERS.length])
