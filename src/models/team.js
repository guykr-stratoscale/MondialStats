import { TEAMS } from '../data/teams'
import { Record, List } from 'immutable'

const Team = Record({
  id: 0,
  name: null,
  region: null,
  code: null,
})

export const initTeams = () => {
  return TEAMS.map((team, i) => {
    return new Team(team)
  })
}
