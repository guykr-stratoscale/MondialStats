export default class Round {
  static _id = 0

  static create(...rounds) {
    return rounds.map(round => new Round(round)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor({ game, questions = [], answers = [] } = {}) {
    this.id = Round._id++

    this.game = game
    this.questions = questions
    this.answers = answers
  }
}
