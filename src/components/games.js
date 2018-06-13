import React from 'react'
import Game from './game'
import AppContext from '../context'
import { List } from 'immutable'

export default function Games() {
  return (
    <AppContext.Consumer>
      {({ games = List() }) => {
        return (
          <ol>
            {games.map(game => (
              <li>
                <Game game={game} />
              </li>
            ))}
          </ol>
        )
      }}
    </AppContext.Consumer>
  )
}
