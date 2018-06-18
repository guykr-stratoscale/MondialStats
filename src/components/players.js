import React from 'react'
import { List } from 'immutable'
import Player from './player'
import { withContext } from '../context'

function Players({ players = List() }) {
  return (
    <ol className="players">
      {players.sortBy(p => p.name).map(player => (
        <li key={player.id}>
          <Player player={player} />
        </li>
      ))}
    </ol>
  )
}

export default withContext('players')(Players)
