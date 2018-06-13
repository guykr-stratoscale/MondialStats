import { TEAMS } from '../data/teams'
import { Record, fromJS } from 'immutable'

const Team = Record({
  id: 0,
  name: null,
  region: null,
  code: null,
})

export const initTeams = () => {
  return fromJS(TEAMS.map(team => new Team(team)))
}
