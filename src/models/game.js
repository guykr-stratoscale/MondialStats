import { GAMES, FACTORS } from '../data/games'
import { Record, List, fromJS } from 'immutable'
import { TEAMS } from '../data/teams'
import moment from 'moment'

class Game extends Record({
  id: 0,
  team_a: null,
  team_b: null,
  team_a_score: '?',
  team_b_score: '?',
  team_a_score_90m: '?',
  team_b_score_90m: '?',
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

// export const gamesAdaptor = (games, data) => {
//   return games.map((game, i) => {
//     const d = data[i]
//     return game.withMutations(game => {
//       // game.status       = [34, 35].includes(i) ? 'IN_PLAY' : d.status
//       game.status = d.status
//       game.team_a_score = d.result.goalsHomeTeam === null ? '?' : d.result.goalsHomeTeam
//       game.team_b_score = d.result.goalsAwayTeam === null ? '?' : d.result.goalsAwayTeam
//     })
//   })
// }

// TODO: add factors here
export const gamesAdaptor = (games, data) => {
  return (
    List(data)
      // .filter(d => d.status !== 'SCHEDULED')
      .map((d, i) => {
        const { team_a: team_a_factor = 1, team_b: team_b_factor = 1, draw: draw_factor = 0 } =
          FACTORS[i] || {}

        const game = games.get(
          i,
          new Game({
            id: i,
            date: moment(d.utcDate),
            team_a_factor,
            team_b_factor,
            draw_factor,
          }),
        )
        return game.withMutations(game => {
          // game.status       = [34, 35].includes(i) ? 'IN_PLAY' : d.status
          game.status = d.status
          game.team_a_score = d.score.fullTime.homeTeam === null ? '?' : d.score.fullTime.homeTeam
          game.team_b_score = d.score.fullTime.awayTeam === null ? '?' : d.score.fullTime.awayTeam
          game.team_a_score_90m = game.team_a_score
          game.team_b_score_90m = game.team_b_score
          if (d.score.extraTime.homeTeam !== null) {
            game.team_a_score = d.score.extraTime.homeTeam
            game.team_b_score = d.score.extraTime.awayTeam
          }
          if (d.score.penalties.homeTeam !== null) {
            game.team_a_score = d.score.penalties.homeTeam
            game.team_b_score = d.score.penalties.awayTeam
          }
          const team_a = TEAMS.find(team => team.name === d.homeTeam.name) || {}
          const team_b = TEAMS.find(team => team.name === d.awayTeam.name) || {}
          game.team_a = team_a.id
          game.team_b = team_b.id
        })
      })
  )
}

export default Game
