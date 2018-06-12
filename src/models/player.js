class Bet {
  constructor({ round, team_a_score, team_b_score, answers = [] } = {}) {
    this.round = round
    this.team_a_score = team_a_score
    this.team_b_score = team_b_score
    this.answers = answers
    this.score = 0
  }
}

export default class Player {
  static _id = 0
  static create(...players) {
    return players.map(player => new Player(player)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor({ name, bets = [] } = {}) {
    this.id = Player._id++

    this.name = name
    this.bets = bets.map(bet => new Bet(bet))
    this.score = 0
  }

  getScore(round) {}
}
