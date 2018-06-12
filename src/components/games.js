import React from 'react'
import Game from './game'
import AppContext from '../context'

export default function Games() {
  return (
    <AppContext.Consumer>
      {({ games = {} }) => {
        return (
          <ol>
            {Object.values(games).map(game => (
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
