import React from 'react'
import Team from './team'
import AppContext from '../context'

export default function Teams() {
  return (
    <AppContext.Consumer>
      {({ teams = [] }) => {
        return teams.map(team => (
          <div>
            <Team team={team} />
          </div>
        ))
      }}
    </AppContext.Consumer>
  )
}
