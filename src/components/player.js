import React from 'react'
import { List } from 'immutable'
import AppContext, { withContext } from '../context'
import cn from 'classnames'
import Bet from './bet'
import { playerColor } from '../data/players'

function Player({ player, selectPlayer, selected_player }) {
  return (
    <div
      className={cn('player', { selected: selected_player === player.id })}
      onClick={selectPlayer.bind(null, player.id)}>
      <span
        className={cn('name', { selected: selected_player === player.id })}
        style={{ color: playerColor(player.id) }}>
        {player.name}
      </span>
      <span className="details">
        ({player.champion}, {player.scorer})
      </span>
    </div>
  )
}

export default withContext('selectPlayer', 'selected_player')(Player)
