import * as d3 from 'd3'

const assignBets = (game_bets, game_index) => (p, i) => {
  const players_guess = game_bets.find(g => g.player_id === i).team
  const bets = p.bets
  bets[game_index].answers = [players_guess]
  return { ...p, bets }
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
        team_b_score: '2',
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
    team: 'Brazil',
  },
  {
    player_id: 6,
    team: 'Brazil',
  },
  {
    player_id: 2,
    team: 'Brazil',
  },
  {
    player_id: 0,
    team: 'Brazil',
  },
  {
    player_id: 12,
    team: 'Brazil',
  },
  {
    player_id: 11,
    team: 'Brazil',
  },
  {
    player_id: 8,
    team: 'Brazil',
  },
  {
    player_id: 4,
    team: 'Brazil',
  },
  {
    player_id: 3,
    team: 'Brazil',
  },
  {
    player_id: 10,
    team: 'Switzerland',
  },
  {
    player_id: 5,
    team: 'Brazil',
  },
  {
    player_id: 1,
    team: 'Brazil',
  },
  {
    player_id: 9,
    team: 'Switzerland',
  },
]
export default PLAYERS.map(assignBets(game_11_guesses, 10))

export const playerColor = d3.scaleSequential(d3.interpolateSinebow).domain([0, PLAYERS.length])
