import * as d3 from 'd3'
import { TEAMS } from './teams'

const assignBets = (game_bets, game_index) => (p, i) => {
  const players_guess = game_bets.find(g => g.player_id === i).answer
  const bets = p.bets
  bets[game_index].answers = [players_guess]
  return { ...p, bets }
}

const assignFormBets = game_bets => (p, i) => {
  const players_guess = game_bets.find(g => g.id === i)
  const bets = p.bets
  Object.keys(players_guess)
    .map(Number)
    .filter(k => !isNaN(k))
    .forEach(game_index => {
      bets[game_index] = {
        winner: TEAMS.find(team => team.name === players_guess[game_index]).id,
      }
    })
  return { ...p, bets }
}

const assignQFBets = game_bets => (p, i) => {
  const qf_start = 56
  const bets = p.bets
  const player_bets = game_bets.find(bet => bet.ID === i)
  if (player_bets) {
    Object.entries(player_bets)
      .filter(([key, val]) => key.startsWith('game'))
      .forEach(([key, value]) => {
        const [_, index, k] = key.split('|')
        const game_index = qf_start + Number(index)

        if (!bets[game_index]) {
          bets[game_index] = {}
        }

        bets[game_index] = {
          ...bets[game_index],
          [k]: k === 'winner' ? TEAMS.find(team => team.name === value).id : value,
        }
      })
  }

  return { ...p, bets }
}

const fixGameOrder = player => {
  const germanyGame = player.bets[27]
  player.bets[27] = player.bets[28]
  player.bets[28] = germanyGame

  const germanySKoreaGame = player.bets[40]
  player.bets[40] = player.bets[41]
  player.bets[41] = germanySKoreaGame

  // const englandGame = player.bets[46]
  // player.bets[46] = player.bets[47]
  // player.bets[47] = englandGame

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

const round_16_bonus = [
  {
    Timestamp: '6/29/2018 20:41:15',
    'Email Address': 'guykrem@gmail.com',
    id: 0,
    שם: 'קרמני',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 2,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 5,
  },
  {
    Timestamp: '6/29/2018 15:46:34',
    'Email Address': 'galilamitai@gmail.com',
    id: 1,
    שם: 'גליל',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'ארגנטינה',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'כן',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 2,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 22:38:13',
    'Email Address': 'itzikyo@gmail.com',
    id: 2,
    שם: 'איטזיג',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 3,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 3,
  },
  {
    Timestamp: '6/29/2018 16:49:16',
    'Email Address': 'ariellowi@gmail.com',
    id: 3,
    שם: 'שריקי',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 3,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 4,
  },
  {
    Timestamp: '6/29/2018 21:49:14',
    'Email Address': 'itamarshai76@gmail.com',
    id: 4,
    שם: 'The Chairman',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'לא',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'ארגנטינה',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'פורטוגל',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 1,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 23:34:39',
    'Email Address': 'fogelson@hotmail.com',
    id: 5,
    שם: 'מונגל',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'ארגנטינה',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 2,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 22:59:10',
    'Email Address': 'yonelf@gmail.com',
    id: 6,
    שם: 'יוני',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'כן',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 3,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 15:43:43',
    'Email Address': 'yshalitin@yahoo.com',
    id: 7,
    שם: 'ישקה',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'לא',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'פורטוגל',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לרוסיה',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 2,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 19:36:28',
    'Email Address': 'eranronit@gmail.com',
    id: 8,
    שם: 'eranronit@gmail.com',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לרוסיה',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'כן',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 3,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 4,
  },
  {
    Timestamp: '6/29/2018 19:33:00',
    'Email Address': 'eranspiegel@gmail.com',
    id: 9,
    שם: 'eranspiegel@gmail.com',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'לא',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'כן',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 1,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 4,
  },
  {
    Timestamp: '6/29/2018 17:11:25',
    'Email Address': 'ranatzmon@gmail.com',
    id: 10,
    שם: 'ran',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'אורוגוואי',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'כן',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 0,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 2,
  },
  {
    Timestamp: '6/29/2018 15:30:27',
    'Email Address': 'moshesadoun@gmail.com',
    id: 11,
    שם: 'מושון',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'כן',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'צרפת',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'פורטוגל',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 3,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 7,
  },
  {
    Timestamp: '6/29/2018 15:30:35',
    'Email Address': 'Bhecht@gmail.com',
    id: 12,
    שם: 'ברק הכט',
    'האם ניימאר יכבוש במהלך מול מקסיקו ? (1 נק)': 'לא',
    'למי יהיו יותר בעיטות למסגרת במהלך המשחק בין צרפת לארגנטינה? (2 נק)': 'ארגנטינה',
    'מי יחזיק יותר בכדור (החזקת כדור) במהלך המשחק בין אורוגוואי לפורטוגל ? (3 נק)': 'פורטוגל',
    'למי יהיו יותר הוצאות חוץ במהלך המשחק בין רוסיה לספרד ? (4 נק)': 'לספרד',
    'האם דנמרק תבצע מעל 10 עבירות במהלך המשחק ? (5 נק)': 'לא',
    'האם הארי קיין יסיים בראש טבלת מלך השערים בסוף הסיבוב (לא כולל שער בבעיטות הכרעה בסוף המשחק )? (6 נק)':
      'לא',
    'כמה משחקים יגיעו להכרעה בבעיטות 11 מטר? (7 נק)': 2,
    'כמה כרטיסים (צהובים ואדומים ביחד) ישרקו במהלך המשחק לחובת היפנים? (8 נק)': 3,
  },
]
const round_16_bets = [
  {
    '48': 'France',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'Colombia',
    Timestamp: '6/29/2018 0:43:39',
    id: 9,
    שם: 'שפיגל',
  },
  {
    '48': 'France',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Switzerland',
    '55': 'England',
    Timestamp: '6/29/2018 9:44:36',
    id: 10,
    שם: 'Ran atzmon',
  },
  {
    '48': 'Argentina',
    '49': 'Portugal',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Switzerland',
    '55': 'Colombia',
    Timestamp: '6/29/2018 11:24:23',
    id: 12,
    שם: 'סמי',
  },
  {
    '48': 'France',
    '49': 'Portugal',
    '50': 'Spain',
    '51': 'Denmark',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Switzerland',
    '55': 'Colombia',
    Timestamp: '6/29/2018 13:06:56',
    id: 7,
    שם: 'ישקה',
  },
  {
    '48': 'Argentina',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 13:16:33',
    id: 5,
    שם: 'מונגל',
  },
  {
    '48': 'France',
    '49': 'Portugal',
    '50': 'Russia',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Japan',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 14:38:45',
    id: 11,
    שם: 'מושון',
  },
  {
    '48': 'Argentina',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 15:07:32',
    id: 2,
    שם: 'איטזיג',
  },
  {
    '48': 'France',
    '49': 'Portugal',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Switzerland',
    '55': 'England',
    Timestamp: '6/29/2018 15:24:33',
    id: 4,
    שם: 'Itamar Shai',
  },
  {
    '48': 'France',
    '49': 'Uruguay',
    '50': 'Russia',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Switzerland',
    '55': 'England',
    Timestamp: '6/29/2018 15:42:22',
    id: 1,
    שם: 'גליל',
  },
  {
    '48': 'France',
    '49': 'Portugal',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 16:41:09',
    id: 3,
    שם: 'שריקי',
  },
  {
    '48': 'Argentina',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'Colombia',
    Timestamp: '6/29/2018 19:38:33',
    id: 8,
    שם: 'רונה',
  },
  {
    '48': 'France',
    '49': 'Uruguay',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 20:38:55',
    id: 0,
    שם: 'קרמני',
  },
  {
    '48': 'France',
    '49': 'Portugal',
    '50': 'Spain',
    '51': 'Croatia',
    '52': 'Brazil',
    '53': 'Belgium',
    '54': 'Sweden',
    '55': 'England',
    Timestamp: '6/29/2018 23:02:12',
    id: 6,
    שם: 'יוני',
  },
]
const querter_finals_bets = [
  {
    Timestamp: '7/5/2018 23:29:08',
    ID: 0,
    שם: 'קרמני',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 1,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 2,
    'game|3|winner': 'Croatia',
    'Email Address': 'guykrem@gmail.com',
  },
  {
    Timestamp: '7/5/2018 23:30:02',
    ID: 1,
    שם: 'גליל',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 1,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 2,
    'game|2|team_b_score': 1,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Croatia',
    'Email Address': 'galilamitai@gmail.com',
  },
  {
    Timestamp: '7/5/2018 14:23:29',
    ID: 2,
    שם: 'Itzig',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 0,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Croatia',
    'Email Address': 'itzikyo@gmail.com',
  },
  {
    Timestamp: '7/5/2018 13:53:51',
    ID: 4,
    שם: 'Itamar',
    'game|0|team_a_score': 2,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Belgium',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 1,
    'game|2|winner': 'Sweden',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Croatia',
    'Email Address': 'itamarshai76@gmail.com',
  },
  {
    Timestamp: '7/4/2018 20:06:47',
    ID: 5,
    שם: 'מונגל אבטיח',
    'game|0|team_a_score': 3,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 1,
    'game|2|winner': 'England',
    'game|3|team_a_score': 0,
    'game|3|team_b_score': 0,
    'game|3|winner': 'Russia',
    'Email Address': 'fogelson@hotmail.com',
  },
  {
    Timestamp: '7/5/2018 13:51:14',
    ID: 6,
    שם: 'יוני',
    'game|0|team_a_score': 0,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Belgium',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 0,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Russia',
    'Email Address': 'yonelf@gmail.com',
  },
  {
    Timestamp: '7/4/2018 20:04:01',
    ID: 7,
    שם: 'ישי שליטין',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Belgium',
    'game|2|team_a_score': 3,
    'game|2|team_b_score': 1,
    'game|2|winner': 'England',
    'game|3|team_a_score': 2,
    'game|3|team_b_score': 2,
    'game|3|winner': 'Russia',
    'Email Address': 'yshalitin@yahoo.com',
  },
  {
    Timestamp: '7/4/2018 18:54:50',
    ID: 8,
    שם: 'eranronit@gmail.com',
    'game|0|team_a_score': 2,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 3,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 2,
    'game|2|team_b_score': 0,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Croatia',
    'Email Address': 'eranronit@gmail.com',
  },
  {
    Timestamp: '7/4/2018 16:34:46',
    ID: 9,
    שם: 'eranspiegel',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 2,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Belgium',
    'game|2|team_a_score': 0,
    'game|2|team_b_score': 0,
    'game|2|winner': 'Sweden',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 2,
    'game|3|winner': 'Croatia',
    'Email Address': 'eranspiegel@gmail.com',
  },
  {
    Timestamp: '7/4/2018 21:27:26',
    ID: 10,
    שם: 'ran',
    'game|0|team_a_score': 2,
    'game|0|team_b_score': 3,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Belgium',
    'game|2|team_a_score': 1,
    'game|2|team_b_score': 2,
    'game|2|winner': 'Sweden',
    'game|3|team_a_score': 2,
    'game|3|team_b_score': 2,
    'game|3|winner': 'Croatia',
    'Email Address': 'ranatzmon@gmail.com',
  },
  {
    Timestamp: '7/4/2018 20:04:13',
    ID: 11,
    שם: 'מושון',
    'game|0|team_a_score': 2,
    'game|0|team_b_score': 3,
    'game|0|winner': 'France',
    'game|1|team_a_score': 2,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 2,
    'game|2|team_b_score': 1,
    'game|2|winner': 'England',
    'game|3|team_a_score': 1,
    'game|3|team_b_score': 0,
    'game|3|winner': 'Russia',
    'Email Address': 'moshesadoun@gmail.com',
  },
  {
    Timestamp: '7/4/2018 19:28:41',
    ID: 12,
    שם: 'ברק הכט',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 1,
    'game|0|winner': 'Uruguay',
    'game|1|team_a_score': 0,
    'game|1|team_b_score': 1,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 2,
    'game|2|team_b_score': 0,
    'game|2|winner': 'England',
    'game|3|team_a_score': 2,
    'game|3|team_b_score': 1,
    'game|3|winner': 'Russia',
    'Email Address': 'Bhecht@gmail.com',
  },
  {
    Timestamp: '7/6/2018 0:50:38',
    ID: 3,
    שם: 'ariel',
    'game|0|team_a_score': 1,
    'game|0|team_b_score': 3,
    'game|0|winner': 'France',
    'game|1|team_a_score': 1,
    'game|1|team_b_score': 2,
    'game|1|winner': 'Brazil',
    'game|2|team_a_score': 2,
    'game|2|team_b_score': 2,
    'game|2|winner': 'Sweden',
    'game|3|team_a_score': 2,
    'game|3|team_b_score': 4,
    'game|3|winner': 'Croatia',
    'Email Address': 'ariellowi@gmail.com',
  },
]

export default PLAYERS.map(fixGameOrder)
  .map(assignBets(game_11_guesses, 10))
  .map(assignBets(game_16_answers, 15))
  .map(assignFormBets(round_16_bets))
  .map(assignQFBets(querter_finals_bets))

export const playerColor = d3.scaleSequential(d3.interpolateSinebow).domain([0, PLAYERS.length])
