import { GAMES } from '../data/games'
import { Record, List, fromJS } from 'immutable'

class Game extends Record({
  id: 0,
  team_a: null,
  team_b: null,
  team_a_score: '?',
  team_b_score: '?',
  team_a_factor: 1,
  team_b_factor: 1,
  draw_factor: 1,
  date: null,
  questions: List(),
  answers: List(),
  status: null,
}) {
  wasPlayed() {
    return this.status === 'FINISHED'
  }
  isPlaying() {
    return this.status === 'IN_PLAY'
  }

  getWinner() {
    return this.team_a_score > this.team_b_score
      ? this.team_a
      : this.team_b_score > this.team_a_score
        ? this.team_b
        : null
  }
}

export const initGames = () => {
  return fromJS(
    GAMES.map((game, i) => {
      return new Game({
        ...game,
        questions: fromJS(game.questions || []),
        answers: fromJS(game.answers || []),
        id: i,
      })
    }),
  )
}

export const gamesAdaptor = (games, data) => {
  return games.map((game, i) => {
    const d = data[i]
    return game.withMutations(game => {
      // game.status = i === 16 ? 'IN_PLAY' : d.status
      game.status = d.status
      game.team_a_score = d.result.goalsHomeTeam === null ? '?' : d.result.goalsHomeTeam
      game.team_b_score = d.result.goalsAwayTeam === null ? '?' : d.result.goalsAwayTeam
    })
  })
}

export default Game
