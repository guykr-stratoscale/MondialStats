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
            {players.map(player => (
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
