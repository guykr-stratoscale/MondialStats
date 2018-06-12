import React from 'react'
import Team from './team'
import AppContext from '../context'

export default function Teams() {
  return (
    <AppContext.Consumer>
      {({ teams = {} }) => {
        return Object.values(teams).map(team => <Team team={team} />)
      }}
    </AppContext.Consumer>
  )
}
