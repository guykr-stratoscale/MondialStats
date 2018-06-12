export default class Team {
  static _id = 0
  static create(...names) {
    return names.map(name => new Team(name)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor(name) {
    this.id = Team._id++

    this.name = name
  }
}
