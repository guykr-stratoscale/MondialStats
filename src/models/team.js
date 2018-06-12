import { TEAMS } from '../data/teams'

export default class Team {
  static _id = 0
  static init() {
    return Team.create(TEAMS)
  }
  static create(teams) {
    return teams.map(team => new Team(team)).reduce((result, t) => {
      result[t.id] = t
      return result
    }, {})
  }

  constructor({ name, region, code, flag }) {
    this.id = Team._id++

    this.name = name
    this.region = region
    this.code = code
    this.flag = flag
  }
}
