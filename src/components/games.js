import React from 'react'
import Game from './game'
import { withContext } from '../context'
import { List } from 'immutable'

function Games({ games = List() }) {
  return (
    <div className="games">
      {games.map(game => (
          <Game key={game.id} game={game} />
      ))}
    </div>
  )
}

export default withContext('games')(Games)
