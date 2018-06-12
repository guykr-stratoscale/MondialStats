export default class Game {
  static _id = 0
  static create(...games) {
    return games.map(game => new Game(...game)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor(team_a, team_b) {
    this.id = Game._id++

    this.team_a = team_a
    this.team_b = team_b
    this.team_a_score = null
    this.team_b_score = null
    this.team_a_factor = null
    this.team_b_factor = null

    this.date = null

    this.winner = null
  }
}
