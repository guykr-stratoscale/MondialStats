import { Record, List } from 'immutable'
import PLAYERS from '../data/players'

const Bet = Record({
  game: 0,
  team_a_score: 0,
  team_b_score: 0,
  answers: List(),
})

const Player = Record({
  id: 0,
  name: null,
  bets: List(),
})

export const initPlayers = () => {
  return PLAYERS.map((player, i) => {
    return new Player({
      ...player,
      bets: player.bets.map((bet, gameIndex) => {
        return new Bet({ ...bet, game: gameIndex })
      }),
    })
  })
}
