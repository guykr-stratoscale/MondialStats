import React from 'react'
import { List } from 'immutable'
import Player from './player'
import AppContext from '../context'

export default function Players() {
  return (
    <AppContext.Consumer>
      {({ players = List() }) => {
        return (
          <ol>
            {players.sortBy(p => p.name).map(player => (
              <li key={player.id}>
                <Player player={player} />
              </li>
            ))}
          </ol>
        )
      }}
    </AppContext.Consumer>
  )
}
