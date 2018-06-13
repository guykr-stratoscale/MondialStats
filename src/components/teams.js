import React from 'react'
import { List } from 'immutable'
import Team from './team'
import AppContext from '../context'

export default function Teams() {
  return (
    <AppContext.Consumer>
      {({ teams = List() }) => {
        //console.log('teams', teams.first().toJS())
        return teams.map(team => (
          <div>
            <Team team={team} />
          </div>
        ))
      }}
    </AppContext.Consumer>
  )
}
