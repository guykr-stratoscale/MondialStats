import React from 'react'
import Player from './player'
import AppContext from '../context'

export default function Players() {
  return (
    <AppContext.Consumer>
      {({ players = {} }) => {
        return (
          <ol>
            {Object.values(players).map(player => (
              <li>
                <Player player={player} />
              </li>
            ))}
          </ol>
        )
      }}
    </AppContext.Consumer>
  )
}
