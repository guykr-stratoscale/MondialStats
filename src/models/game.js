import { GAMES } from '../data/games'

export default class Game {
  static _id = 0
  static init() {
    return Game.create(...GAMES)
  }
  static create(...games) {
    return games.map(game => new Game(game)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor({
    team_a,
    team_b,
    team_a_score,
    team_b_score,
    team_a_factor = 1,
    team_b_factor = 1,
    date = new Date(),
  } = {}) {
    this.id = Game._id++

    this.team_a = team_a
    this.team_b = team_b
    this.team_a_score = team_a_score
    this.team_b_score = team_b_score
    this.team_a_factor = team_a_factor
    this.team_b_factor = team_b_factor

    this.date = date

    this.winner =
      this.team_a_score > this.team_b_score
        ? this.team_a
        : this.team_b_score > this.team_a_score ? this.team_b : 'draw'
  }
}
